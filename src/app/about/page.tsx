"use client";

import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const timeline = [
  { year: "2021", title: "加入一线教学", desc: "入职知名教育机构，系统学习教学法，累计完成 400+ 课时授课。" },
  { year: "2022", title: "获评优秀教师", desc: "教学满意度连续四个季度排名机构前列，获年度优秀教师表彰。" },
  { year: "2023", title: "转向个性化辅导", desc: "专注一对一和小班教学，深入研发个性化教学方案与配套教辅资料。" },
  { year: "2024", title: "教学体系成熟", desc: "形成诊断-规划-教学-测评四步教学闭环，辅导学员突破 200 人次。" },
  { year: "2025", title: "独立教学工作室", desc: "成立个人教学工作室，专注小学数学个性化辅导与课程研发。" },
  { year: "2026", title: "线上线下融合", desc: "扩展线上授课能力，同步服务更多地区的学员家庭。" },
];

const values = [
  { title: "系统教学", desc: "不靠题海战术，而是帮孩子建立完整的知识框架。每个知识点讲透、练会、能迁移。" },
  { title: "因材施教", desc: "同一个年级，不同孩子的问题完全不同。入学先诊断，再制定个性化的学习方案。" },
  { title: "家校协同", desc: "定期向家长反馈学习进度，沟通课堂表现，让家长清楚知道孩子在学什么、学得怎么样。" },
  { title: "长期陪伴", desc: "不追求一次考试突击提分，而是持续跟踪孩子的学习状态，培养受益终身的数学思维。" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-blue-50" />
        <div className="relative max-w-5xl mx-auto px-5 md:px-8">
          <AnimateOnScroll anim="fade-up">
            <div className="max-w-2xl">
              <p className="text-[13px] font-semibold text-blue-500 tracking-widest uppercase mb-4">About</p>
              <h1 className="text-[36px] md:text-[48px] font-bold text-slate-900 leading-[1.1] tracking-tight mb-6">
                专业背景<span className="text-blue-500"> · </span>教学资质
              </h1>
              <p className="text-[16px] text-slate-500">师范院校数学教育专业毕业，5 年一线教学经验。</p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Stats + Photo */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll anim="fade-in-right">
              <div>
                <div className="grid grid-cols-3 gap-6 mb-10">
                  {[
                    { n: "5", u: "年", l: "教学经验" },
                    { n: "1000+", u: "", l: "授课课时" },
                    { n: "200+", u: "", l: "辅导学员" },
                  ].map((s) => (
                    <div key={s.l} className="text-center">
                      <div className="text-[36px] font-bold text-slate-900">
                        {s.n}<span className="text-base font-normal text-slate-400 ml-1">{s.u}</span>
                      </div>
                      <div className="text-[13px] text-slate-400 mt-1">{s.l}</div>
                    </div>
                  ))}
                </div>
                <div className="space-y-4 text-[16px] text-slate-600 leading-relaxed">
                  <p>阮琪珍，毕业于师范院校数学教育专业，持有小学数学教师资格证书。</p>
                  <p>2021 年至今专注小学数学一线教学，熟悉人教版、北师大版、苏教版等多版本教材体系，对各年级知识架构和常见考点有系统性的理解。</p>
                  <p>教学中注重「诊断先行」——先通过摸底测试找出每个孩子的知识薄弱点，再制定针对性方案，避免无效刷题。</p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll anim="fade-in-left" delay={0.2}>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
                  <img src="/img/Head.jpg" alt="阮琪珍老师" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-100 rounded-3xl -z-10" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-100 rounded-3xl -z-10" />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* 擅长方向 */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <AnimateOnScroll anim="fade-up">
            <p className="text-[13px] font-semibold text-blue-500 tracking-widest uppercase mb-4">Expertise</p>
            <h2 className="text-[28px] md:text-[36px] font-bold text-slate-900 tracking-tight mb-10">擅长方向</h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "低年级（1-3 年级）", detail: "计算能力培养、应用题入门、学习习惯养成" },
              { label: "中年级（4 年级）", detail: "四则运算强化、小数和分数基础过渡" },
              { label: "高年级（5-6 年级）", detail: "几何图形、方程、比例百分数、小升初衔接" },
              { label: "专项突破", detail: "计算粗心纠正、审题方法训练、考试时间管理" },
            ].map((item, i) => (
              <AnimateOnScroll key={i} anim="fade-up" delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 border border-slate-50 hover:shadow-xl transition-all hover:-translate-y-0.5">
                  <div className="text-[13px] font-bold text-blue-500 mb-2">{item.label}</div>
                  <div className="text-[14px] text-slate-500 leading-relaxed">{item.detail}</div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <AnimateOnScroll anim="fade-up">
            <p className="text-[13px] font-semibold text-blue-500 tracking-widest uppercase mb-4">Timeline</p>
            <h2 className="text-[28px] md:text-[36px] font-bold text-slate-900 tracking-tight mb-12">教学经历</h2>
          </AnimateOnScroll>
          <div className="space-y-0">
            {timeline.map((item, i) => (
              <AnimateOnScroll key={i} anim="fade-in-right" delay={i * 0.08}>
                <div className="flex gap-6 md:gap-10 py-5 border-b border-slate-100 last:border-0 group">
                  <div className="w-16 md:w-20 flex-shrink-0">
                    <span className="text-[15px] font-bold text-slate-300 group-hover:text-blue-500 transition-colors">
                      {item.year}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-[15px] font-bold text-slate-800 mb-1">{item.title}</h3>
                    <p className="text-[14px] text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <AnimateOnScroll anim="fade-up">
            <p className="text-[13px] font-semibold text-blue-500 tracking-widest uppercase mb-4">Philosophy</p>
            <h2 className="text-[28px] md:text-[36px] font-bold text-slate-900 tracking-tight mb-12">教学理念</h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <AnimateOnScroll key={i} anim="scale-in" delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 border border-slate-50 hover:shadow-xl transition-all hover:-translate-y-0.5">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{v.title}</h3>
                  <p className="text-[15px] text-slate-500 leading-relaxed">{v.desc}</p>
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
