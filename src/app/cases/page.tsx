"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const cases = [
  {
    name: "小明",
    grade: "四年级",
    from: 72,
    to: 95,
    delta: "+23",
    time: "3 个月",
    story:
      "之前对数学很抵触，基础概念不扎实。通过一对一辅导，用生活中的例子帮他理解，慢慢建立信心。",
  },
  {
    name: "小红",
    grade: "五年级",
    from: 80,
    to: 98,
    delta: "+18",
    time: "4 个月",
    story:
      "基础不错但总是粗心丢分。制定了错题整理计划，培养仔细检查的习惯，针对薄弱几何专项训练。",
  },
  {
    name: "小刚",
    grade: "六年级",
    from: 65,
    to: 90,
    delta: "+25",
    time: "5 个月",
    story:
      "小升初压力大，数学成绩不理想。系统复习全部知识点，针对高频考点训练，同时进行心理辅导。",
  },
];

const reviews = [
  {
    text: "阮老师真的很有耐心！孩子以前一遇到难题就哭，现在能主动思考了，进步了 20 多分。",
    parent: "小明妈妈",
    detail: "四年级",
  },
  {
    text: "老师讲解很清晰，孩子说比学校老师讲得更明白，每次上课都很期待。",
    parent: "小红爸爸",
    detail: "五年级",
  },
  {
    text: "小升初压力大，阮老师不仅辅导功课，还经常鼓励孩子，给孩子信心。",
    parent: "小刚妈妈",
    detail: "六年级",
  },
  {
    text: "之前找过几个老师都不太满意，阮老师是第一个能让孩子真正理解数学的老师。",
    parent: "小华家长",
    detail: "三年级",
  },
];

export default function CasesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-28 md:pt-36 pb-16 md:pb-20">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-[13px] font-medium text-apple-blue mb-4">
              教学案例
            </p>
            <h1 className="text-[32px] md:text-[48px] font-semibold text-apple-dark leading-[1.1] tracking-tight">
              见证成长与进步
            </h1>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {cases.map((c) => (
              <div
                key={c.name}
                className="bg-apple-gray-6 rounded-apple overflow-hidden"
              >
                <div className="bg-apple-dark text-white p-6">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center text-[14px] font-semibold">
                        {c.name[0]}
                      </div>
                      <div>
                        <div className="text-[14px] font-semibold">
                          {c.name}
                        </div>
                        <div className="text-[12px] text-apple-gray-3">
                          {c.grade}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[20px] font-semibold text-apple-green">
                        {c.delta}
                      </div>
                      <div className="text-[11px] text-apple-gray-3">
                        {c.time}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-[13px]">
                    <div>
                      <div className="text-apple-gray-3 text-[11px]">
                        起始
                      </div>
                      <div className="font-medium">{c.from} 分</div>
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="h-1.5 bg-white/15 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-apple-green rounded-full"
                          style={{
                            width: `${((c.to - c.from) / 40) * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-apple-gray-3 text-[11px]">
                        当前
                      </div>
                      <div className="font-medium">{c.to} 分</div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[13px] text-apple-gray leading-relaxed">
                    {c.story}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 md:py-28 bg-apple-gray-6">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-apple-dark tracking-tight mb-14">
            家长评价
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white rounded-apple p-6 md:p-8">
                <p className="text-[15px] text-apple-dark leading-relaxed mb-6">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-apple-gray-6 flex items-center justify-center">
                    <span className="text-[12px] font-medium text-apple-gray">
                      {r.parent[0]}
                    </span>
                  </div>
                  <div>
                    <div className="text-[13px] font-medium text-apple-dark">
                      {r.parent}
                    </div>
                    <div className="text-[12px] text-apple-gray">
                      {r.detail}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
