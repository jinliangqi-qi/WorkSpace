from typing import Optional
from datetime import datetime

from pydantic import BaseModel
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import select, func, update
from sqlalchemy.ext.asyncio import AsyncSession

from app.database import Inquiry, get_db

router = APIRouter()


class InquiryCreate(BaseModel):
    parentName: str
    studentName: str
    grade: str
    phone: str
    wechat: Optional[str] = ""
    message: Optional[str] = ""


class InquiryResponse(BaseModel):
    id: int
    parent_name: str
    student_name: str
    grade: str
    phone: str
    wechat: str
    message: str
    is_read: bool
    is_replied: bool
    created_at: datetime
    note: str

    class Config:
        from_attributes = True


class InquiryListResponse(BaseModel):
    total: int
    unread: int
    items: list[InquiryResponse]


class InquiryNoteUpdate(BaseModel):
    note: str


@router.post("", response_model=InquiryResponse)
async def create_inquiry(
    data: InquiryCreate,
    db: AsyncSession = Depends(get_db),
):
    inquiry = Inquiry(
        parent_name=data.parentName,
        student_name=data.studentName,
        grade=data.grade,
        phone=data.phone,
        wechat=data.wechat or "",
        message=data.message or "",
    )
    db.add(inquiry)
    await db.commit()
    await db.refresh(inquiry)

    # 尝试发送微信通知
    try:
        from app.services.notification import send_inquiry_notification
        await send_inquiry_notification(inquiry)
    except Exception:
        pass  # 通知失败不影响主流程

    return inquiry


@router.get("", response_model=InquiryListResponse)
async def list_inquiries(
    page: int = 1,
    page_size: int = 20,
    is_read: Optional[bool] = None,
    db: AsyncSession = Depends(get_db),
):
    query = select(Inquiry).order_by(Inquiry.created_at.desc())
    count_query = select(func.count(Inquiry.id))

    if is_read is not None:
        query = query.where(Inquiry.is_read == is_read)
        count_query = count_query.where(Inquiry.is_read == is_read)

    total_result = await db.execute(count_query)
    total = total_result.scalar()

    unread_result = await db.execute(
        select(func.count(Inquiry.id)).where(Inquiry.is_read == False)
    )
    unread = unread_result.scalar()

    offset = (page - 1) * page_size
    query = query.offset(offset).limit(page_size)

    result = await db.execute(query)
    items = result.scalars().all()

    return InquiryListResponse(total=total, unread=unread, items=items)


@router.get("/{inquiry_id}", response_model=InquiryResponse)
async def get_inquiry(
    inquiry_id: int,
    db: AsyncSession = Depends(get_db),
):
    result = await db.execute(select(Inquiry).where(Inquiry.id == inquiry_id))
    inquiry = result.scalar_one_or_none()

    if not inquiry:
        raise HTTPException(status_code=404, detail="咨询记录不存在")

    # 标记为已读
    if not inquiry.is_read:
        inquiry.is_read = True
        await db.commit()
        await db.refresh(inquiry)

    return inquiry


@router.put("/{inquiry_id}/read")
async def mark_as_read(
    inquiry_id: int,
    db: AsyncSession = Depends(get_db),
):
    result = await db.execute(select(Inquiry).where(Inquiry.id == inquiry_id))
    inquiry = result.scalar_one_or_none()

    if not inquiry:
        raise HTTPException(status_code=404, detail="咨询记录不存在")

    inquiry.is_read = True
    await db.commit()
    return {"success": True}


@router.put("/{inquiry_id}/reply")
async def mark_as_replied(
    inquiry_id: int,
    db: AsyncSession = Depends(get_db),
):
    result = await db.execute(select(Inquiry).where(Inquiry.id == inquiry_id))
    inquiry = result.scalar_one_or_none()

    if not inquiry:
        raise HTTPException(status_code=404, detail="咨询记录不存在")

    inquiry.is_replied = True
    await db.commit()
    return {"success": True}


@router.put("/{inquiry_id}/note")
async def update_note(
    inquiry_id: int,
    data: InquiryNoteUpdate,
    db: AsyncSession = Depends(get_db),
):
    result = await db.execute(select(Inquiry).where(Inquiry.id == inquiry_id))
    inquiry = result.scalar_one_or_none()

    if not inquiry:
        raise HTTPException(status_code=404, detail="咨询记录不存在")

    inquiry.note = data.note
    await db.commit()
    return {"success": True}


@router.delete("/{inquiry_id}")
async def delete_inquiry(
    inquiry_id: int,
    db: AsyncSession = Depends(get_db),
):
    result = await db.execute(select(Inquiry).where(Inquiry.id == inquiry_id))
    inquiry = result.scalar_one_or_none()

    if not inquiry:
        raise HTTPException(status_code=404, detail="咨询记录不存在")

    await db.delete(inquiry)
    await db.commit()
    return {"success": True}
