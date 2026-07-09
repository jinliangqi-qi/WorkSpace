"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const contacts = [
  { icon: Phone, label: "咨询电话", value: "138-0013-8000", href: "tel:13800138000" },
  { icon: MessageCircle, label: "微信号", value: "Cherry-Rora", href: "#" },
  { icon: Mail, label: "邮箱", value: "ruanqizhen@example.com", href: "mailto:ruanqizhen@example.com" },
  { icon: MapPin, label: "地址", value: "广东深圳宝安区", href: "#" },
];

const times = [
  "周一至周五：17:00 - 21:00",
  "周六：09:00 - 21:00",
  "周日：09:00 - 21:00",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    parentName: "",
    studentName: "",
    grade: "",
    phone: "",
    wechat: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("提交失败");
      setSubmitted(true);
      setForm({ parentName: "", studentName: "", grade: "", phone: "", wechat: "", message: "" });
    } catch {
      alert("提交失败，请稍后重试");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-28 md:pt-36 pb-16 md:pb-20">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-[13px] font-medium text-apple-blue mb-4">
              联系咨询
            </p>
            <h1 className="text-[32px] md:text-[48px] font-semibold text-apple-dark leading-[1.1] tracking-tight">
              开始孩子的学习之旅
            </h1>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-3">
                {contacts.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    className="flex items-center gap-4 p-4 rounded-apple bg-apple-gray-6 hover:bg-apple-gray-5 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-[12px] bg-white flex items-center justify-center shadow-apple">
                      <c.icon className="w-4.5 h-4.5 text-apple-blue" />
                    </div>
                    <div>
                      <div className="text-[11px] text-apple-gray">
                        {c.label}
                      </div>
                      <div className="text-[14px] font-medium text-apple-dark">
                        {c.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="bg-apple-gray-6 rounded-apple p-6">
                <h3 className="text-[14px] font-semibold text-apple-dark mb-4">
                  咨询时间
                </h3>
                <div className="space-y-2">
                  {times.map((t) => (
                    <div
                      key={t}
                      className="text-[13px] text-apple-gray flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-apple-green flex-shrink-0" />
                      {t}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-apple-gray-6 rounded-apple p-6 text-center">
                <p className="text-[13px] text-apple-gray mb-4">扫码添加微信</p>
                <div className="w-40 h-40 mx-auto bg-white rounded-apple flex items-center justify-center shadow-apple">
                  <img
                    src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=QR%20code%20minimal%20clean%20black%20white%20simple%20square%20icon&image_size=square"
                    alt="微信二维码"
                    className="w-36 h-36"
                  />
                </div>
                <p className="text-[12px] text-apple-blue font-medium mt-3">
                  Cherry-Rora
                </p>
              </div>
            </div>

            {/* Right - Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-apple-green/5 border border-apple-green/20 rounded-apple p-10 text-center">
                  <CheckCircle className="w-14 h-14 text-apple-green mx-auto mb-4" />
                  <h3 className="text-[20px] font-semibold text-apple-dark mb-2">
                    提交成功
                  </h3>
                  <p className="text-[14px] text-apple-gray">
                    阮老师会尽快与您联系
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2.5 bg-apple-blue text-white text-[14px] font-medium rounded-full hover:bg-apple-blue/90 transition-colors"
                  >
                    继续咨询
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[13px] font-medium text-apple-dark mb-1.5">
                        家长姓名 <span className="text-apple-red">*</span>
                      </label>
                      <input
                        type="text"
                        name="parentName"
                        value={form.parentName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 bg-apple-gray-6 border-0 rounded-apple text-[14px] text-apple-dark placeholder:text-apple-gray-3 focus:outline-none focus:ring-2 focus:ring-apple-blue/30 transition-shadow"
                        placeholder="请输入姓名"
                      />
                    </div>
                    <div>
                      <label className="block text-[13px] font-medium text-apple-dark mb-1.5">
                        学生姓名 <span className="text-apple-red">*</span>
                      </label>
                      <input
                        type="text"
                        name="studentName"
                        value={form.studentName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 bg-apple-gray-6 border-0 rounded-apple text-[14px] text-apple-dark placeholder:text-apple-gray-3 focus:outline-none focus:ring-2 focus:ring-apple-blue/30 transition-shadow"
                        placeholder="请输入姓名"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[13px] font-medium text-apple-dark mb-1.5">
                      年级 <span className="text-apple-red">*</span>
                    </label>
                    <select
                      name="grade"
                      value={form.grade}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 bg-apple-gray-6 border-0 rounded-apple text-[14px] text-apple-dark focus:outline-none focus:ring-2 focus:ring-apple-blue/30 transition-shadow appearance-none"
                    >
                      <option value="">请选择年级</option>
                      {["一年级", "二年级", "三年级", "四年级", "五年级", "六年级"].map(
                        (g) => (
                          <option key={g} value={g}>
                            {g}
                          </option>
                        )
                      )}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[13px] font-medium text-apple-dark mb-1.5">
                        联系电话 <span className="text-apple-red">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 bg-apple-gray-6 border-0 rounded-apple text-[14px] text-apple-dark placeholder:text-apple-gray-3 focus:outline-none focus:ring-2 focus:ring-apple-blue/30 transition-shadow"
                        placeholder="请输入手机号"
                      />
                    </div>
                    <div>
                      <label className="block text-[13px] font-medium text-apple-dark mb-1.5">
                        微信号
                      </label>
                      <input
                        type="text"
                        name="wechat"
                        value={form.wechat}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 bg-apple-gray-6 border-0 rounded-apple text-[14px] text-apple-dark placeholder:text-apple-gray-3 focus:outline-none focus:ring-2 focus:ring-apple-blue/30 transition-shadow"
                        placeholder="请输入微信号"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[13px] font-medium text-apple-dark mb-1.5">
                      咨询内容
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2.5 bg-apple-gray-6 border-0 rounded-apple text-[14px] text-apple-dark placeholder:text-apple-gray-3 focus:outline-none focus:ring-2 focus:ring-apple-blue/30 transition-shadow resize-none"
                      placeholder="请描述孩子的学习情况..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 bg-apple-blue text-white text-[15px] font-medium rounded-full hover:bg-apple-blue/90 transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        提交中...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        提交咨询
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
