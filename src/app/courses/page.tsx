"use client";

import { ArrowRight, Clock, Users } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const courses = [
  {
    title: "一对一精品辅导",
    desc: "量身定制学习方案，针对性解决问题，快速提升成绩",
    duration: "60 分钟 / 课时",
    students: "1 人",
    price: "300",
    features: ["个性化方案", "错题辅导", "进度跟踪", "反馈报告"],
    highlight: true,
  },
  {
    title: "小班培优课程",
    desc: "4-6 人小班互动教学，适合基础较好的学生拔高",
    duration: "90 分钟 / 课时",
    students: "4-6 人",
    price: "180",
    features: ["互动教学", "小组讨论", "思维拓展", "学习氛围"],
    highlight: false,
  },
  {
    title: "作业辅导",
    desc: "每日作业辅导答疑，培养良好学习习惯",
    duration: "90 分钟 / 天",
    students: "4-6 人",
    price: "120",
    features: ["答疑解惑", "习惯培养", "时间管理", "错题整理"],
    highlight: false,
  },
  {
    title: "奥数思维训练",
    desc: "培养数学思维能力，提升逻辑推理能力",
    duration: "90 分钟 / 课时",
    students: "4-6 人",
    price: "200",
    features: ["思维培养", "竞赛技巧", "难题突破", "知识拓展"],
    highlight: false,
  },
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

      <section className="pt-28 md:pt-36 pb-16 md:pb-20">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-[13px] font-medium text-apple-blue mb-4">
              课程服务
            </p>
            <h1 className="text-[32px] md:text-[48px] font-semibold text-apple-dark leading-[1.1] tracking-tight">
              找到适合孩子的
              <br />
              学习方式
            </h1>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {courses.map((c) => (
              <div
                key={c.title}
                className={`rounded-apple p-6 md:p-8 border transition-all duration-300 ${
                  c.highlight
                    ? "bg-apple-dark text-white border-apple-dark-2"
                    : "bg-white border-apple-gray-5 hover:border-apple-gray-4"
                }`}
              >
                {c.highlight && (
                  <span className="inline-block text-[11px] font-medium text-apple-blue-light bg-white/10 px-2.5 py-0.5 rounded-full mb-3">
                    最受欢迎
                  </span>
                )}
                <h3
                  className={`text-[18px] font-semibold mb-1 ${
                    c.highlight ? "text-white" : "text-apple-dark"
                  }`}
                >
                  {c.title}
                </h3>
                <p
                  className={`text-[13px] mb-4 ${
                    c.highlight ? "text-apple-gray-3" : "text-apple-gray"
                  }`}
                >
                  {c.desc}
                </p>
                <div className="flex gap-4 mb-5">
                  <span
                    className={`flex items-center gap-1 text-[12px] ${
                      c.highlight ? "text-apple-gray-3" : "text-apple-gray"
                    }`}
                  >
                    <Clock className="w-3.5 h-3.5" />
                    {c.duration}
                  </span>
                  <span
                    className={`flex items-center gap-1 text-[12px] ${
                      c.highlight ? "text-apple-gray-3" : "text-apple-gray"
                    }`}
                  >
                    <Users className="w-3.5 h-3.5" />
                    {c.students}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {c.features.map((f) => (
                    <span
                      key={f}
                      className={`text-[11px] px-2.5 py-1 rounded-full ${
                        c.highlight
                          ? "bg-white/10 text-white/80"
                          : "bg-apple-gray-6 text-apple-gray"
                      }`}
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span
                      className={`text-[28px] font-semibold tracking-tight ${
                        c.highlight ? "text-white" : "text-apple-dark"
                      }`}
                    >
                      &yen;{c.price}
                    </span>
                    <span
                      className={`text-[12px] ml-1 ${
                        c.highlight ? "text-apple-gray-3" : "text-apple-gray"
                      }`}
                    >
                      / 课时
                    </span>
                  </div>
                  <a
                    href="/contact"
                    className={`inline-flex items-center gap-1 text-[13px] font-medium ${
                      c.highlight
                        ? "text-white hover:text-apple-blue-light"
                        : "text-apple-blue hover:text-apple-blue/80"
                    } transition-colors`}
                  >
                    咨询详情
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grades */}
      <section className="py-20 md:py-28 bg-apple-gray-6">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-apple-dark tracking-tight mb-14">
            各年级重点
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {grades.map((g) => (
              <div
                key={g.name}
                className="bg-white rounded-apple p-5 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-[12px] bg-apple-gray-6 flex items-center justify-center flex-shrink-0">
                  <span className="text-[14px] font-semibold text-apple-blue">
                    {g.g}
                  </span>
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold text-apple-dark mb-0.5">
                    {g.name}
                  </h3>
                  <p className="text-[12px] text-apple-gray">{g.topics}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-5 md:px-8 text-center">
          <h2 className="text-[24px] md:text-[32px] font-semibold text-apple-dark tracking-tight mb-3">
            不确定选哪个课程？
          </h2>
          <p className="text-[15px] text-apple-gray mb-8">
            免费咨询阮老师，为您推荐最适合的方案
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 bg-apple-blue text-white text-[15px] font-medium rounded-full hover:bg-apple-blue/90 transition-colors"
          >
            免费咨询
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
