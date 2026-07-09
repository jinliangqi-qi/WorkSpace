"use client";

import { Clock, Users, BookOpen, Star, ArrowRight, CheckCircle } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const courses = [
  {
    id: 1,
    title: "一对一精品辅导",
    description: "根据学生特点量身定制学习方案，针对性解决问题，快速提升成绩",
    duration: "60分钟/课时",
    students: "1人",
    price: "300",
    features: [
      "个性化学习方案",
      "针对性错题辅导",
      "学习进度跟踪",
      "定期反馈报告",
    ],
    popular: true,
  },
  {
    id: 2,
    title: "小班培优课程",
    description: "4-6人小班教学，互动性强，适合基础较好的学生拔高",
    duration: "90分钟/课时",
    students: "4-6人",
    price: "180",
    features: [
      "互动式教学",
      "小组讨论学习",
      "思维拓展训练",
      "学习氛围好",
    ],
    popular: false,
  },
  {
    id: 3,
    title: "作业辅导",
    description: "每日作业辅导，帮助孩子养成良好的学习习惯",
    duration: "90分钟/天",
    students: "4-6人",
    price: "120",
    features: [
      "作业答疑解惑",
      "学习习惯培养",
      "时间管理指导",
      "错题整理",
    ],
    popular: false,
  },
  {
    id: 4,
    title: "奥数思维训练",
    description: "培养数学思维能力，提升逻辑推理和问题解决能力",
    duration: "90分钟/课时",
    students: "4-6人",
    price: "200",
    features: [
      "思维能力培养",
      "竞赛技巧训练",
      "难题突破",
      "拓展知识面",
    ],
    popular: false,
  },
];

const gradeLevels = [
  { grade: "一年级", content: "数字认识、加减法基础、简单应用题" },
  { grade: "二年级", content: "乘法口诀、混合运算、图形认识" },
  { grade: "三年级", content: "两位数乘法、分数初步、应用题进阶" },
  { grade: "四年级", content: "四则运算、小数、大数认识、复杂应用题" },
  { grade: "五年级", content: "分数运算、小数乘除、几何图形、方程初步" },
  { grade: "六年级", content: "比例、百分数、圆、统计、小升初衔接" },
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-24 pb-16 bg-gradient-warm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              课程服务
            </h1>
            <p className="text-lg text-slate-600">
              多种课程选择，满足不同需求
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">
            课程类型
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className={`relative bg-white rounded-2xl overflow-hidden border-2 transition-all hover:shadow-xl hover:-translate-y-1 ${
                  course.popular ? "border-primary-400" : "border-slate-100"
                }`}
              >
                {course.popular && (
                  <div className="absolute top-0 right-0 bg-primary-500 text-white text-xs font-medium px-3 py-1 rounded-bl-lg">
                    最受欢迎
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2 text-slate-500">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{course.students}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    {course.title}
                  </h3>
                  <p className="text-slate-600 mb-4">
                    {course.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {course.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-3xl font-bold text-primary-500">
                        ¥{course.price}
                      </span>
                      <span className="text-slate-500 text-sm">/课时</span>
                    </div>
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-1 px-4 py-2 bg-primary-500 text-white rounded-full text-sm font-medium hover:bg-primary-600 transition-colors"
                    >
                      咨询详情
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">
            各年级教学重点
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gradeLevels.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-card hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-warm-100 rounded-xl flex items-center justify-center">
                    <span className="text-lg font-bold text-primary-500">
                      {item.grade.replace("年级", "")}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800">
                    {item.grade}
                  </h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            不确定选择哪个课程？
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            免费咨询阮老师，为您推荐最适合孩子的课程方案
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full text-lg font-medium hover:shadow-xl transition-all hover:-translate-y-1"
          >
            免费咨询课程
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
