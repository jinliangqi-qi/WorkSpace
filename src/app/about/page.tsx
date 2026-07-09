"use client";

import { BookOpen, Heart, Lightbulb, Users, Award, GraduationCap } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const experiences = [
  { year: "2021", title: "开始从事小学数学教学", description: "加入知名教育机构，担任小学数学教师" },
  { year: "2022", title: "获得优秀教师称号", description: "连续多次获得机构优秀教师表彰" },
  { year: "2023", title: "专注一对一辅导", description: "转向一对一精品辅导，积累丰富经验" },
  { year: "2024", title: "辅导学生突破500人", description: "帮助500+学生提升数学成绩" },
  { year: "2025", title: "独立开设工作室", description: "成立个人工作室，专注个性化教学" },
  { year: "2026", title: "线上辅导全面升级", description: "线上线下同步辅导，服务更多学生家庭" },
];

const teachingPhilosophy = [
  {
    icon: Heart,
    title: "用爱心对待每一个孩子",
    description: "每个孩子都是独特的，我相信用爱心和耐心能够打动每一个学生，让他们感受到学习的温暖。",
  },
  {
    icon: Lightbulb,
    title: "激发学习兴趣",
    description: "兴趣是最好的老师。我会通过有趣的故事和生动的例子，让孩子发现数学的魅力。",
  },
  {
    icon: BookOpen,
    title: "注重方法传授",
    description: "授人以鱼不如授人以渔。我不仅教知识，更注重培养孩子的学习方法和思维能力。",
  },
  {
    icon: Users,
    title: "家校密切配合",
    description: "教育是家庭和学校的共同责任。我会定期与家长沟通，共同关注孩子的成长。",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-24 pb-16 bg-gradient-warm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              关于阮老师
            </h1>
            <p className="text-lg text-slate-600">
              了解我的教学背景和教育理念
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20female%20math%20teacher%20in%20classroom%20teaching%20elementary%20students%20warm%20friendly%20environment%20bright%20colorful%20classroom&image_size=landscape_4_3"
                alt="阮老师教学中"
                className="w-full rounded-2xl shadow-card"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                个人简介
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  大家好，我是阮琪珍老师，毕业于师范院校数学教育专业，拥有小学数学教师资格证。
                </p>
                <p>
                  从2021年开始，我一直专注于小学数学教学工作。在这5年的教学生涯中，
                  我接触了上千名学生，深知每个孩子在数学学习中可能遇到的困难和挑战。
                </p>
                <p>
                  我始终相信，没有学不好数学的孩子，只有不适合的教学方法。
                  通过耐心的引导和个性化的教学方案，我帮助了许多曾经害怕数学的孩子，
                  让他们重新爱上了数学，并且在成绩上取得了显著的进步。
                </p>
              </div>
              <div className="mt-8 flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-primary-500" />
                  <span className="text-slate-600">师范院校毕业</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary-500" />
                  <span className="text-slate-600">优秀教师</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">
            教学经历
          </h2>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary-200"></div>
            <div className="space-y-8">
              {experiences.map((item, index) => (
                <div key={index} className="relative pl-16">
                  <div className="absolute left-4 w-5 h-5 bg-primary-500 rounded-full border-4 border-white"></div>
                  <div className="bg-white rounded-xl p-6 shadow-card">
                    <div className="text-primary-500 font-bold text-lg mb-2">{item.year}</div>
                    <div className="text-slate-800 font-semibold mb-1">{item.title}</div>
                    <div className="text-slate-600 text-sm">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">
            教育理念
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teachingPhilosophy.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-6 bg-slate-50 rounded-2xl hover:shadow-card transition-all"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-100 to-warm-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-8 h-8 text-primary-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
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
