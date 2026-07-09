"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const cases = [
  {
    grade: "四年级",
    title: "计算基础薄弱导致的综合失分",
    background: "该学员升入四年级后成绩持续下滑，单元测试多在及格线徘徊。摸底诊断发现：乘法口诀不熟练、进退位计算错误率高、应用题因计算失误导致后续步骤全错。",
    solution: "前 3 次课集中巩固二三年级计算基础（乘法口诀、竖式计算、加减进退位），配合每日 10 分钟口算训练。后续课程将计算练习融入每节课的暖身环节，同步推进四年级正常进度。",
    result: "期中测验 62 分 → 期末测验 82 分，计算题正确率从 60% 提升至 90%。",
    tags: ["计算补基", "习惯养成", "单科提分"],
  },
  {
    grade: "五年级",
    title: "审题粗心与检查方法缺失",
    background: "该学员知识掌握程度良好，但考试成绩始终在 75-85 分之间波动，无法突破 90 分。分析试卷发现：计算过程错误占失分的 60% 以上，主要有抄错数字、运算符号看错、竖式对齐问题三类。",
    solution: "引入\"三步检查法\"——第一步核对抄题数字、第二步检查运算符号、第三步验证结果合理性。每节课留出专门时间训练检查习惯，由老师在旁观察纠偏，逐步内化为自主行为。",
    result: "辅导 4 个月后，单元测验突破 91 分，该生已将检查方法养成习惯，家长反馈做作业质量明显提升。",
    tags: ["习惯矫正", "方法训练", "稳分提优"],
  },
  {
    grade: "三年级",
    title: "转学适应与学习信心重建",
    background: "该学员因家庭搬迁转学，原学校进度偏慢，转入新校后出现大面积知识断层。课堂上听不懂、不敢提问，数学成绩从原来班级中等降至垫底，对学习产生明显抵触情绪。",
    solution: "前两周以建立信任为主，降低教学节奏，从她能掌握的内容开始，每完成一个小目标都给予明确鼓励。教学内容从二年级下册开始查漏补缺，每周设置一道略超当前水平的挑战题，让她在完成中积累自信。",
    result: "3 个月后成绩从 63 分提升至 85 分。更重要的是课堂状态转变——从不敢抬头到主动举手回答问题，班主任反馈\"像换了一个人\"。",
    tags: ["知识补漏", "信心重建", "学习状态"],
  },
];

export default function CasesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-20">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="max-w-2xl">
            <p className="text-[13px] font-medium text-apple-blue mb-4">
              教学案例
            </p>
            <h1 className="text-[32px] md:text-[48px] font-semibold text-apple-dark leading-[1.1] tracking-tight mb-6">
              真实教学案例
              <br />
              与辅导方法论
            </h1>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="space-y-12">
            {cases.map((c, i) => (
              <div
                key={i}
                className="border-t border-apple-gray-5 pt-10 first:border-0 first:pt-0"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[12px] font-medium text-apple-blue bg-apple-blue/5 px-2.5 py-1 rounded-full">
                    {c.grade}
                  </span>
                  {c.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[12px] text-apple-gray bg-apple-gray-6 px-2.5 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h2 className="text-[22px] md:text-[28px] font-semibold text-apple-dark tracking-tight mb-8">
                  {c.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-apple-gray-6 rounded-apple p-6">
                    <div className="text-[12px] font-medium text-apple-blue mb-2">
                      学员背景
                    </div>
                    <p className="text-[14px] text-apple-gray leading-relaxed">
                      {c.background}
                    </p>
                  </div>
                  <div className="bg-apple-gray-6 rounded-apple p-6">
                    <div className="text-[12px] font-medium text-apple-blue mb-2">
                      辅导方案
                    </div>
                    <p className="text-[14px] text-apple-gray leading-relaxed">
                      {c.solution}
                    </p>
                  </div>
                  <div className="bg-apple-gray-6 rounded-apple p-6">
                    <div className="text-[12px] font-medium text-apple-blue mb-2">
                      辅导成果
                    </div>
                    <p className="text-[14px] text-apple-gray leading-relaxed">
                      {c.result}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 md:py-28 bg-apple-gray-6">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-apple-dark tracking-tight mb-14">
            辅导方法论
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "为什么先诊断再教学？",
                a: "许多孩子成绩不理想不是\"学不会\"，而是某些前置知识存在漏洞。先诊断能精准定位问题，避免在已掌握的内容上浪费时间。",
              },
              {
                q: "为什么强调检查习惯而不是大量刷题？",
                a: "五年级以下学生的失分中，计算错误占比通常超过 50%。培养检查习惯比多做 100 道题更直接有效，而且是终身受益的能力。",
              },
              {
                q: "为什么重视课堂状态而不仅是分数？",
                a: "分数是滞后指标，课堂状态是先行指标。敢提问、敢犯错、愿意思考的孩子，成绩提升是顺理成章的结果。我们更关注后者。",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-apple p-6 md:p-8">
                <h3 className="text-[16px] font-semibold text-apple-dark mb-2">
                  {item.q}
                </h3>
                <p className="text-[14px] text-apple-gray leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
