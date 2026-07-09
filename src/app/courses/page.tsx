"use client";

import AnimateOnScroll from "@/components/AnimateOnScroll";
import { ArrowRight, Clock, Users } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const courses = [
  { title: "一对一辅导", desc: "诊断定制方案，每周 2-3 次课，针对薄弱环节重点突破。", duration: "60 分钟/课时", students: "1 人", price: "300", highlight: true },
  { title: "小班培优", desc: "4-6 人精品小班，互动教学，适合基础较好的学生拔高。", duration: "90 分钟/课时", students: "4-6 人", price: "180", highlight: false },
  { title: "考前集训", desc: "期中期末、小升初专项突破，梳理知识 + 真题模拟。", duration: "90 分钟/课时", students: "4-6 人", price: "200", highlight: false },
];

const grades = [
  { g: "一", name: "一年级", topics: "数字认识、加减法基础" },
  { g: "二", name: "二年级", topics: "乘法口诀、混合运算" },
  { g: "三", name: "三年级", topics: "两位数乘法、分数初步" },
  { g: "四", name: "四年级", topics: "四则运算、小数" },
  { g: "五", name: "五年级", topics: "分数运算、几何图形" },
  { g: "六", name: "六年级", topics: "比例、百分数、小升初衔接" },
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-blue-50" />
        <div className="relative max-w-5xl mx-auto px-5 md:px-8">
          <AnimateOnScroll anim="fade-up">
            <div className="max-w-2xl">
              <p className="text-[13px] font-semibold text-blue-500 tracking-widest uppercase mb-4">Courses</p>
              <h1 className="text-[36px] md:text-[48px] font-bold text-slate-900 leading-[1.1] tracking-tight mb-4">
                找到适合孩子的<span className="text-blue-500">学习方案</span>
              </h1>
              <p className="text-[16px] text-slate-500">从一对一诊断到考前集训，分层教学，按需选择。</p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Courses */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses.map((c, i) => (
              <AnimateOnScroll key={i} anim="scale-in" delay={i * 0.12}>
                <div className={`relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${c.highlight ? "bg-gradient-to-br from-slate-800 to-slate-900 text-white shadow-2xl" : "bg-white shadow-sm hover:shadow-xl border border-slate-100"}`}>
                  {c.highlight && <div className="absolute -top-3 left-6 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 text-[11px] font-bold px-3 py-1 rounded-full">最受欢迎</div>}
                  <h3 className={`text-xl font-bold mb-3 ${c.highlight ? "text-white" : "text-slate-800"}`}>{c.title}</h3>
                  <p className={`text-[14px] leading-relaxed mb-5 ${c.highlight ? "text-slate-300" : "text-slate-500"}`}>{c.desc}</p>
                  <div className="flex gap-4 mb-6">
                    <span className={`flex items-center gap-1 text-[12px] ${c.highlight ? "text-slate-400" : "text-slate-400"}`}><Clock className="w-3.5 h-3.5" />{c.duration}</span>
                    <span className={`flex items-center gap-1 text-[12px] ${c.highlight ? "text-slate-400" : "text-slate-400"}`}><Users className="w-3.5 h-3.5" />{c.students}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className={`text-[28px] font-bold tracking-tight ${c.highlight ? "text-white" : "text-slate-900"}`}>&yen;{c.price}</span>
                      <span className={`text-[12px] ml-1 ${c.highlight ? "text-slate-400" : "text-slate-400"}`}>/课时</span>
                    </div>
                    <a href="/contact" className={`inline-flex items-center gap-1.5 text-[14px] font-semibold ${c.highlight ? "text-amber-400 hover:text-amber-300" : "text-blue-500 hover:text-blue-400"} transition-colors`}>
                      咨询 <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Grades */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <AnimateOnScroll anim="fade-up">
            <p className="text-[13px] font-semibold text-blue-500 tracking-widest uppercase mb-4">Grades</p>
            <h2 className="text-[28px] md:text-[36px] font-bold text-slate-900 tracking-tight mb-12">各年级教学重点</h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {grades.map((g, i) => (
              <AnimateOnScroll key={g.name} anim="fade-up" delay={i * 0.06}>
                <div className="bg-white rounded-2xl p-5 border border-slate-50 hover:shadow-xl transition-all hover:-translate-y-0.5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-[14px] font-bold text-blue-500">{g.g}</span>
                  </div>
                  <div>
                    <h3 className="text-[14px] font-bold text-slate-800 mb-1">{g.name}</h3>
                    <p className="text-[13px] text-slate-500">{g.topics}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-5 text-center">
          <AnimateOnScroll anim="fade-up">
            <h2 className="text-[24px] md:text-[32px] font-bold text-slate-900 tracking-tight mb-4">不确定选哪个课程？</h2>
            <p className="text-[15px] text-slate-500 mb-8">免费咨询，老师根据孩子情况推荐最合适的方案。</p>
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white text-[15px] font-semibold rounded-2xl hover:bg-slate-800 transition-all hover:-translate-y-0.5 shadow-lg">
              免费咨询 <ArrowRight className="w-4 h-4" />
            </a>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  );
}
