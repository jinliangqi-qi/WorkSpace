"use client";

import { useState } from "react";
import { ArrowRight, Star, BookOpen, Heart, Lightbulb, Target, Sparkles, MessageCircle, Phone } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function HomePage() {
  const [showFloat, setShowFloat] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ====== Hero ====== */}
      <section className="relative pt-20 md:pt-28 pb-12 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-blue-50" />
        <div className="absolute top-16 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl animate-pulse-soft" style={{ animation: "float-slow 8s ease-in-out infinite" }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-100/30 rounded-full blur-3xl" style={{ animation: "float-slow 10s ease-in-out 1s infinite" }} />

        <div className="relative max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 items-center">
            <AnimateOnScroll anim="fade-in-right">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-[13px] font-medium text-blue-600 mb-6">
                  <Sparkles className="w-4 h-4" />
                  深圳宝安 · 5 年一线教学
                </div>

                <h1 className="text-[38px] md:text-[48px] lg:text-[56px] font-bold text-slate-900 leading-[1.08] tracking-tight mb-5">
                  孩子数学<span className="text-blue-500">遇到瓶颈</span>？
                  <br />
                  让专业老师帮他
                  <br />
                  <span className="text-amber-500">找到突破口</span>
                </h1>

                <p className="text-[16px] md:text-[18px] text-slate-500 leading-relaxed mb-8">
                  先诊断，再定制方案。不盲目刷题，帮孩子建立真正的数学思维。
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start">
                  <a
                    href="/contact"
                    className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white text-[15px] font-semibold rounded-2xl hover:bg-slate-800 transition-all hover:-translate-y-0.5 hover:shadow-xl shadow-lg inline-flex items-center justify-center gap-2"
                  >
                    免费诊断学情
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="/cases"
                    className="w-full sm:w-auto px-8 py-4 text-slate-600 text-[15px] font-medium rounded-2xl hover:bg-slate-50 transition-all inline-flex items-center justify-center gap-2"
                  >
                    查看辅导案例
                    <ArrowRight className="w-4 h-4 opacity-40" />
                  </a>
                </div>

                <p className="mt-4 text-[13px] text-slate-400">无需费用 · 30 分钟了解孩子真实水平</p>
              </div>
            </AnimateOnScroll>

            {/* Photo */}
            <AnimateOnScroll anim="fade-in-left" delay={0.2}>
            <div className="relative flex justify-center">
              <div className="relative w-[240px] md:w-[300px]" style={{ animation: "float-slow 6s ease-in-out infinite" }}>
                <div className="absolute -inset-6 bg-gradient-to-br from-amber-200 via-blue-100 to-blue-200 rounded-[40px] rotate-3 opacity-60" />
                <div className="absolute -inset-3 bg-gradient-to-br from-amber-100 via-white to-blue-100 rounded-[36px] -rotate-2 opacity-80" />
                <div className="relative rounded-[32px] overflow-hidden shadow-2xl aspect-[4/5]">
                  <img src="/img/Head.jpg" alt="阮琪珍老师" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-3 -left-3 bg-white rounded-2xl shadow-xl px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <span className="text-[14px] font-bold text-slate-800">200+ 学员信任</span>
                  </div>
                </div>
              </div>
            </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ====== 常见问题快速入口 ====== */}
      <AnimateOnScroll anim="fade-up">
      <section className="pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <p className="text-center text-[14px] text-slate-400 mb-6">选择最接近孩子情况的问题，查看解决方案</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "计算总是粗心出错", href: "/cases" },
              { label: "应用题读不懂题目", href: "/cases" },
              { label: "对数学提不起兴趣", href: "/about" },
              { label: "成绩忽高忽低不稳定", href: "/cases" },
              { label: "基础薄弱跟不上进度", href: "/courses" },
              { label: "小升初怎么准备", href: "/courses" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-5 py-3 bg-slate-50 border border-slate-100 rounded-2xl text-[15px] text-slate-600 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 transition-all font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* ====== 3 步流程 ====== */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <AnimateOnScroll anim="fade-up">
          <div className="text-center mb-14">
            <p className="text-[13px] font-semibold text-blue-500 tracking-widest uppercase mb-4">How It Works</p>
            <h2 className="text-[28px] md:text-[36px] font-bold text-slate-900 tracking-tight">
              只需<span className="text-blue-500">3 步</span>，轻松开始
            </h2>
          </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            <div className="hidden md:block absolute top-10 left-[25%] right-[25%] h-0.5 bg-gradient-to-r from-slate-200 via-blue-200 to-slate-200" />
            {[
              { step: "01", title: "在线沟通", desc: "描述孩子年级、当前成绩和主要困难，老师初步了解情况。", icon: MessageCircle },
              { step: "02", title: "免费试听", desc: "老师针对性讲一节诊断课，孩子体验教学方式，家长观察效果。", icon: Sparkles },
              { step: "03", title: "定制方案", desc: "根据诊断结果制定专属学习计划，开始系统辅导。", icon: Target },
            ].map((s, i) => (
              <AnimateOnScroll key={s.step} anim="scale-in" delay={i * 0.15}>
              <div className="relative bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 text-blue-500 flex items-center justify-center mx-auto mb-5">
                  <s.icon className="w-6 h-6" />
                </div>
                <div className="text-[12px] font-bold text-blue-400 tracking-widest mb-3">STEP {s.step}</div>
                <h3 className="text-lg font-bold text-slate-800 mb-3">{s.title}</h3>
                <p className="text-[14px] text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll anim="fade-up" delay={0.3}>
          <div className="text-center mt-10">
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white text-[15px] font-semibold rounded-2xl hover:bg-slate-800 transition-all hover:-translate-y-0.5 shadow-lg">
              立即沟通
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ====== 案例预览 ====== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <AnimateOnScroll anim="fade-up">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[13px] font-semibold text-blue-500 tracking-widest uppercase mb-3">Cases</p>
              <h2 className="text-[28px] md:text-[36px] font-bold text-slate-900 tracking-tight">
                他们的问题，<span className="text-amber-500">可能和你一样</span>
              </h2>
            </div>
            <a href="/cases" className="hidden sm:inline-flex items-center gap-1.5 text-[15px] font-semibold text-blue-500 hover:text-blue-400 transition-colors">
              查看全部案例
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { problem: "四年级，计算基础薄弱", action: "补二三年级计算基础 + 每日口算训练", result: "62 → 82 分", tag: "计算补基" },
              { problem: "五年级，成绩卡在 75-85 分", action: "引入三步检查法，培养自主纠错习惯", result: "突破 91 分", tag: "习惯矫正" },
              { problem: "三年级，转学跟不上进度", action: "降难度重建信心 + 二年级内容补漏", result: "63 → 85 分", tag: "信心重建" },
            ].map((c, i) => (
              <AnimateOnScroll key={i} anim="fade-up" delay={i * 0.15}>
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-slate-50">
                <div className="text-[11px] font-bold text-blue-400 tracking-widest mb-3">案例 {i + 1}</div>
                <h3 className="text-[15px] font-bold text-slate-800 mb-2">{c.problem}</h3>
                <p className="text-[13px] text-slate-500 leading-relaxed mb-4">{c.action}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-bold text-green-600">{c.result}</span>
                  <span className="text-[11px] text-slate-400 bg-white px-2 py-1 rounded-full shadow-sm">{c.tag}</span>
                </div>
              </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 教学理念 ====== */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <AnimateOnScroll anim="fade-up">
          <div className="text-center mb-14">
            <p className="text-[13px] font-semibold text-blue-500 tracking-widest uppercase mb-4">Why Us</p>
            <h2 className="text-[28px] md:text-[36px] font-bold text-slate-900 tracking-tight">
              不止是辅导，是<span className="text-blue-500">学习方式</span>的改变
            </h2>
          </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, color: "blue", title: "精准诊断", desc: "不做盲目刷题，先测试定位知识薄弱点，再针对性制定方案。" },
              { icon: BookOpen, color: "amber", title: "体系课程", desc: "5 年沉淀的自研教案，覆盖人教版、北师大版等主流教材。" },
              { icon: Lightbulb, color: "green", title: "引导教学", desc: "不直接给答案，而是帮孩子自己找到解题思路，建立自信。" },
              { icon: Heart, color: "rose", title: "长期陪伴", desc: "定期家长沟通 + 阶段测评反馈，全程跟踪学习状态。" },
            ].map((f, i) => (
              <AnimateOnScroll key={i} anim="scale-in" delay={i * 0.1}>
              <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-50">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${f.color === "blue" ? "bg-gradient-to-br from-blue-50 to-blue-100 text-blue-500" : f.color === "amber" ? "bg-gradient-to-br from-amber-50 to-amber-100 text-amber-500" : f.color === "green" ? "bg-gradient-to-br from-green-50 to-green-100 text-green-500" : "bg-gradient-to-br from-rose-50 to-rose-100 text-rose-500"} group-hover:scale-110 transition-transform`}>
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-3">{f.title}</h3>
                <p className="text-[14px] text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 课程方案 ====== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <AnimateOnScroll anim="fade-up">
          <div className="text-center mb-14">
            <p className="text-[13px] font-semibold text-blue-500 tracking-widest uppercase mb-4">Courses</p>
            <h2 className="text-[28px] md:text-[36px] font-bold text-slate-900 tracking-tight">
              找到最适合的<span className="text-blue-500">学习方案</span>
            </h2>
          </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "一对一辅导", desc: "诊断定制方案，每周 2-3 次，针对薄弱环节重点突破。", feature: "最受欢迎", highlight: true },
              { title: "小班培优", desc: "4-6 人精品小班，互动课堂，适合基础较好的同学拓展拔高。", feature: "", highlight: false },
              { title: "考前集训", desc: "期中期末、小升初考前专项突破，知识梳理 + 真题模拟。", feature: "", highlight: false },
            ].map((s, i) => (
              <AnimateOnScroll key={i} anim="scale-in" delay={i * 0.15}>
              <div className={`relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${s.highlight ? "bg-gradient-to-br from-slate-800 to-slate-900 text-white shadow-2xl" : "bg-white shadow-sm hover:shadow-xl border border-slate-100"}`}>
                {s.feature && <div className="absolute -top-3 left-6 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 text-[11px] font-bold px-3 py-1 rounded-full">{s.feature}</div>}
                <h3 className={`text-xl font-bold mb-3 ${s.highlight ? "text-white" : "text-slate-800"}`}>{s.title}</h3>
                <p className={`text-[14px] leading-relaxed mb-6 ${s.highlight ? "text-slate-300" : "text-slate-500"}`}>{s.desc}</p>
                <a href="/contact" className={`inline-flex items-center gap-2 text-[14px] font-semibold ${s.highlight ? "text-amber-400 hover:text-amber-300" : "text-blue-500 hover:text-blue-400"} transition-colors`}>咨询详情 <ArrowRight className="w-4 h-4" /></a>
              </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CTA ====== */}
      <section className="py-24 md:py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-amber-500/5" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl" style={{ animation: "float-slow 12s ease-in-out infinite" }} />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-amber-500/5 rounded-full blur-3xl" style={{ animation: "float-slow 14s ease-in-out 2s infinite" }} />

        <AnimateOnScroll anim="scale-in">
        <div className="relative max-w-2xl mx-auto px-5 text-center">
          <h2 className="text-[32px] md:text-[44px] font-bold text-white tracking-tight mb-6">
            不确定孩子的问题在哪？
            <br />
            <span className="text-blue-400">先诊断，再决定</span>
          </h2>
          <p className="text-[16px] text-slate-400 leading-relaxed mb-10">
            30 分钟一对一沟通，了解孩子当前水平，
            <br />
            给出一份客观的学习建议。完全免费。
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-white text-slate-900 text-[16px] font-bold rounded-2xl hover:bg-slate-100 transition-all hover:-translate-y-0.5 shadow-2xl">
            免费诊断学情
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="mt-6 text-[13px] text-slate-500">已帮助 200+ 学员找到学习方向</p>
        </div>
        </AnimateOnScroll>
      </section>

      <Footer />

      {/* ====== 悬浮咨询按钮 ====== */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {showFloat && (
          <div className="flex flex-col gap-2 mb-2" style={{ animation: "fade-up 0.3s ease-out" }}>
            <a
              href="tel:13800138000"
              className="flex items-center gap-3 bg-white shadow-xl rounded-2xl px-5 py-3 text-[14px] font-medium text-slate-700 hover:bg-slate-50 transition-all"
            >
              <Phone className="w-4 h-4 text-blue-500" />
              电话咨询
            </a>
            <button
              onClick={() => { navigator.clipboard.writeText("Cherry-Rora"); alert("微信号已复制：Cherry-Rora"); }}
              className="flex items-center gap-3 bg-white shadow-xl rounded-2xl px-5 py-3 text-[14px] font-medium text-slate-700 hover:bg-slate-50 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-green-500" />
              复制微信号
            </button>
          </div>
        )}
        <button
          onClick={() => setShowFloat(!showFloat)}
          className={`w-14 h-14 rounded-2xl shadow-xl flex items-center justify-center transition-all duration-300 ${
            showFloat ? "bg-slate-800 text-white rotate-45" : "bg-gradient-to-br from-slate-800 to-slate-900 text-white hover:from-slate-700 hover:to-slate-800"
          }`}
          style={{ animation: showFloat ? "none" : "pulse-soft 2s ease-in-out infinite" }}
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
