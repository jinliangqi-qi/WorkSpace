"use client";

import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const cases = [
  {
    grade: "四年级",
    title: "计算基础薄弱导致的综合失分",
    background: "该学员升入四年级后成绩持续下滑，单元测试多在及格线徘徊。摸底诊断发现：乘法口诀不熟练、进退位计算错误率高、应用题因计算失误导致后续步骤全错。",
    solution: "前 3 次课集中巩固二三年级计算基础（乘法口诀、竖式计算、加减进退位），配合每日 10 分钟口算训练。后续课程将计算练习融入每节课的暖身环节，同步推进四年级正常进度。",
    result: "期中测验 62 分 → 期末测验 82 分，计算题正确率从 60% 提升至 90%。",
    tags: ["计算补基", "习惯养成"],
  },
  {
    grade: "五年级",
    title: "审题粗心与检查方法缺失",
    background: "该学员知识掌握程度良好，但考试成绩始终在 75-85 分之间波动。分析试卷发现：计算过程错误占失分的 60% 以上，主要有抄错数字、运算符号看错、竖式对齐问题三类。",
    solution: "引入「三步检查法」——第一步核对抄题数字、第二步检查运算符号、第三步验证结果合理性。每节课留出专门时间训练检查习惯，逐步内化为自主行为。",
    result: "辅导 4 个月后，单元测验突破 91 分，该生已将检查方法养成习惯。",
    tags: ["习惯矫正", "方法训练"],
  },
  {
    grade: "三年级",
    title: "转学适应与学习信心重建",
    background: "该学员因家庭搬迁转学，原学校进度偏慢，转入新校后出现大面积知识断层。课堂上听不懂、不敢提问，数学成绩降至班级垫底。",
    solution: "前两周以建立信任为主，从她能掌握的内容开始，每完成一个小目标给予明确鼓励。教学内容从二年级下册查漏补缺，每周设置挑战题积累自信。",
    result: "3 个月后成绩从 63 分提升至 85 分，课堂状态从不敢抬头变为主动举手回答问题。",
    tags: ["知识补漏", "信心重建"],
  },
];

export default function CasesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-blue-50" />
        <div className="relative max-w-5xl mx-auto px-5 md:px-8">
          <AnimateOnScroll anim="fade-up">
            <div className="max-w-2xl">
              <p className="text-[13px] font-semibold text-blue-500 tracking-widest uppercase mb-4">Cases</p>
              <h1 className="text-[36px] md:text-[48px] font-bold text-slate-900 leading-[1.1] tracking-tight mb-4">
                真实教学案例<span className="text-blue-500"> · </span>辅导方法论
              </h1>
              <p className="text-[16px] text-slate-500">每个案例都包含完整的问题诊断、辅导方案和成果数据。</p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="space-y-16">
            {cases.map((c, i) => (
              <AnimateOnScroll key={i} anim="fade-up" delay={i * 0.15}>
                <div className="border-b border-slate-100 pb-16 last:border-0 last:pb-0">
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="text-[12px] font-bold text-blue-500 bg-blue-50 px-3 py-1 rounded-full">
                      {c.grade}
                    </span>
                    {c.tags.map((t) => (
                      <span key={t} className="text-[12px] text-slate-400 bg-slate-50 px-3 py-1 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-[24px] md:text-[30px] font-bold text-slate-900 tracking-tight mb-8">
                    案例 {i + 1}：{c.title}
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-slate-50 rounded-2xl p-6">
                      <div className="text-[12px] font-bold text-blue-400 tracking-widest uppercase mb-3">学员背景</div>
                      <p className="text-[14px] text-slate-600 leading-relaxed">{c.background}</p>
                    </div>
                    <div className="bg-slate-50 rounded-2xl p-6">
                      <div className="text-[12px] font-bold text-amber-400 tracking-widest uppercase mb-3">辅导方案</div>
                      <p className="text-[14px] text-slate-600 leading-relaxed">{c.solution}</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
                      <div className="text-[12px] font-bold text-green-500 tracking-widest uppercase mb-3">辅导成果</div>
                      <p className="text-[14px] text-slate-700 leading-relaxed font-medium">{c.result}</p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <AnimateOnScroll anim="fade-up">
            <p className="text-[13px] font-semibold text-blue-500 tracking-widest uppercase mb-4">Methodology</p>
            <h2 className="text-[28px] md:text-[36px] font-bold text-slate-900 tracking-tight mb-12">辅导方法论</h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                q: "为什么先诊断再教学？",
                a: "许多孩子成绩不理想不是学不会，而是某些前置知识存在漏洞。先诊断能精准定位问题，避免在已掌握的内容上浪费时间。",
              },
              {
                q: "为什么强调检查习惯？",
                a: "五年级以下学生的失分中，计算错误占比通常超过 50%。培养检查习惯比多做题更直接有效。",
              },
              {
                q: "为什么重视课堂状态？",
                a: "分数是滞后指标，课堂状态是先行指标。敢提问、敢犯错的孩子，成绩提升是顺理成章的结果。",
              },
            ].map((item, i) => (
              <AnimateOnScroll key={i} anim="scale-in" delay={i * 0.12}>
                <div className="bg-white rounded-2xl p-6 border border-slate-50 hover:shadow-xl transition-all hover:-translate-y-0.5">
                  <h3 className="text-[15px] font-bold text-slate-800 mb-3">{item.q}</h3>
                  <p className="text-[14px] text-slate-500 leading-relaxed">{item.a}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
