"use client";

import { ArrowRight, Star, BookOpen, Heart, Lightbulb, Target } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const features = [
  {
    icon: Target,
    title: "教学体系",
    desc: "覆盖小学全年级，从基础巩固到培优拔高，分层教学匹配每个孩子的起点。",
  },
  {
    icon: BookOpen,
    title: "课程研发",
    desc: "5 年一线经验沉淀，自主研发配套练习册与讲义，紧贴各版本教材大纲。",
  },
  {
    icon: Lightbulb,
    title: "教学方法",
    desc: "采用\"引导式教学法\"，从知识讲解、例题演示到独立练习形成完整闭环。",
  },
  {
    icon: Heart,
    title: "服务保障",
    desc: "定期学习反馈报告、家长沟通会、考前专项集训，全程跟踪学习效果。",
  },
];

const stats = [
  { num: "5", unit: "年", label: "一线教学经验" },
  { num: "1000+", unit: "", label: "累计授课课时" },
  { num: "200+", unit: "", label: "累计辅导学员" },
];

const services = [
  {
    title: "一对一辅导",
    desc: "根据诊断结果定制学习计划，每周 2-3 次课程，系统提升薄弱环节。",
    link: "/courses",
  },
  {
    title: "小班培优",
    desc: "4-6 人精品小班，互动式教学，适合基础较好的学生拓展拔高。",
    link: "/courses",
  },
  {
    title: "考前集训",
    desc: "期中期末、小升初考前专项突破，梳理知识框架，模拟真题演练。",
    link: "/contact",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-20">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-[13px] font-medium text-apple-blue mb-4 tracking-wide">
              专注小学数学 · 深圳宝安
            </p>
            <h1 className="text-[40px] md:text-[56px] font-semibold text-apple-dark leading-[1.1] tracking-tight text-balance mb-6">
              让每个孩子
              <br />
              都能学好数学
            </h1>
            <p className="text-[17px] md:text-[19px] text-apple-gray leading-relaxed max-w-xl mx-auto mb-10">
              一线教师一对一辅导，5 年教学经验，系统化课程设计，科学提升数学成绩。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="/contact"
                className="w-full sm:w-auto px-7 py-3 bg-apple-blue text-white text-[15px] font-medium rounded-full hover:bg-apple-blue/90 transition-colors duration-200 inline-flex items-center justify-center gap-2"
              >
                免费预约试听
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/courses"
                className="w-full sm:w-auto px-7 py-3 text-apple-blue text-[15px] font-medium rounded-full hover:bg-apple-blue/5 transition-colors duration-200 inline-flex items-center justify-center"
              >
                了解课程体系
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="rounded-apple-lg overflow-hidden aspect-[21/9] bg-apple-gray-6 mb-12">
            <img
              src="/img/background.jpg"
              alt="教学环境"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-4 md:gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-[32px] md:text-[48px] font-semibold text-apple-dark tracking-tight">
                  {s.num}
                  <span className="text-[20px] md:text-[24px] font-normal text-apple-gray ml-1">
                    {s.unit}
                  </span>
                </div>
                <div className="text-[12px] md:text-[14px] text-apple-gray mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28 bg-apple-gray-6">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-[13px] font-medium text-apple-blue mb-3">
              教学优势
            </p>
            <h2 className="text-[28px] md:text-[36px] font-semibold text-apple-dark tracking-tight">
              专业体系，科学提分
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-apple p-6 hover:shadow-apple transition-shadow duration-300"
              >
                <div className="w-10 h-10 rounded-[12px] bg-apple-gray-6 flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5 text-apple-blue" />
                </div>
                <h3 className="text-[15px] font-semibold text-apple-dark mb-2">
                  {f.title}
                </h3>
                <p className="text-[13px] text-apple-gray leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-[13px] font-medium text-apple-blue mb-3">
              课程服务
            </p>
            <h2 className="text-[28px] md:text-[36px] font-semibold text-apple-dark tracking-tight">
              分层教学方案
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <div
                key={i}
                className="bg-apple-gray-6 rounded-apple p-6 md:p-8 flex flex-col"
              >
                <h3 className="text-[18px] font-semibold text-apple-dark mb-3">
                  {s.title}
                </h3>
                <p className="text-[14px] text-apple-gray leading-relaxed mb-6 flex-1">
                  {s.desc}
                </p>
                <a
                  href={s.link}
                  className="inline-flex items-center gap-2 text-[14px] font-medium text-apple-blue hover:text-apple-blue/80 transition-colors"
                >
                  了解详情
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-20 md:py-28 bg-apple-gray-6">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-[13px] font-medium text-apple-blue mb-3">
              学习流程
            </p>
            <h2 className="text-[28px] md:text-[36px] font-semibold text-apple-dark tracking-tight">
              四步教学闭环
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { step: "01", title: "入学诊断", desc: "通过摸底测试和沟通，精准定位知识薄弱点。" },
              { step: "02", title: "定制方案", desc: "根据诊断结果设计专属学习计划与目标。" },
              { step: "03", title: "系统授课", desc: "知识点讲解 + 例题演练 + 独立练习，逐个攻克。" },
              { step: "04", title: "阶段测评", desc: "定期评估学习成果，动态调整教学方案。" },
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-apple p-6">
                <div className="text-[28px] font-semibold text-apple-blue/30 mb-3">
                  {s.step}
                </div>
                <h3 className="text-[15px] font-semibold text-apple-dark mb-2">
                  {s.title}
                </h3>
                <p className="text-[13px] text-apple-gray leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-apple-dark">
        <div className="max-w-5xl mx-auto px-5 md:px-8 text-center">
          <h2 className="text-[28px] md:text-[40px] font-semibold text-white tracking-tight mb-4">
            预约免费学情诊断
          </h2>
          <p className="text-[15px] md:text-[17px] text-apple-gray-3 mb-10 max-w-lg mx-auto">
            30 分钟一对一沟通，全面了解孩子学习情况，制定初步学习建议
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-apple-blue text-white text-[15px] font-medium rounded-full hover:bg-apple-blue/90 transition-colors duration-200"
          >
            立即预约
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
