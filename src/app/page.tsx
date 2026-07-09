"use client";

import { Star, Award, Clock, Target, ArrowRight, CheckCircle } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const features = [
  {
    icon: Star,
    title: "提分显著",
    description: "平均提分20-30分，多名学生从及格线提升到优秀",
  },
  {
    icon: Award,
    title: "经验丰富",
    description: "5年小学数学教学经验，深谙各年级知识点",
  },
  {
    icon: Clock,
    title: "耐心细致",
    description: "善于发现学生问题，耐心引导，激发学习兴趣",
  },
  {
    icon: Target,
    title: "因材施教",
    description: "根据每个学生特点制定个性化学习方案",
  },
];

const testimonials = [
  {
    content: "阮老师非常有耐心，孩子以前很怕数学，现在每次上课都很期待！这次期中考试从72分提到了95分！",
    author: "小明妈妈",
    grade: "四年级",
    result: "72→95分",
  },
  {
    content: "老师讲解很清晰，孩子以前总觉得数学很难，现在解题思路越来越清晰了，谢谢阮老师！",
    author: "小红爸爸",
    grade: "五年级",
    result: "成绩稳步提升",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative min-h-screen flex items-center bg-gradient-warm overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary-200 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-warm-200 rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-6">
                <CheckCircle className="w-4 h-4" />
                5年教学经验 · 提分专家
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight mb-6">
                让孩子爱上数学
                <br />
                <span className="text-gradient">轻松提分不是梦</span>
              </h1>

              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                我是阮琪珍老师，专注小学数学辅导5年。擅长激发孩子学习兴趣，
                用耐心和方法帮助孩子建立数学思维，让每一个孩子都能在数学学习中找到自信。
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full text-lg font-medium hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  免费预约试听
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/courses"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-700 border-2 border-slate-200 rounded-full text-lg font-medium hover:border-primary-300 hover:text-primary-500 transition-all"
                >
                  了解课程详情
                </a>
              </div>

              <div className="mt-12 flex items-center justify-center lg:justify-start gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-500">5+</div>
                  <div className="text-sm text-slate-500">年教学经验</div>
                </div>
                <div className="w-px h-12 bg-slate-300"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-500">500+</div>
                  <div className="text-sm text-slate-500">学生受益</div>
                </div>
                <div className="w-px h-12 bg-slate-300"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-500">98%</div>
                  <div className="text-sm text-slate-500">家长好评</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-300 to-warm-300 rounded-3xl rotate-6 opacity-20"></div>
                <div className="absolute inset-0 bg-white rounded-3xl shadow-soft overflow-hidden">
                  <img
                    src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=friendly%20female%20elementary%20school%20math%20teacher%20portrait%20professional%20warm%20smile%20teaching%20classroom%20background%20bright%20lighting%20photorealistic&image_size=portrait_4_3"
                    alt="阮琪珍老师"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-card p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Star className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-800">4.9</div>
                      <div className="text-sm text-slate-500">家长评分</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              为什么选择阮老师？
            </h2>
            <p className="text-lg text-slate-600">
              五大核心优势，让孩子的数学学习事半功倍
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 bg-white border border-slate-100 rounded-2xl hover:shadow-card hover:border-primary-200 transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-warm-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              家长真实评价
            </h2>
            <p className="text-lg text-slate-600">
              听听家长们怎么说
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-card"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 leading-relaxed mb-4">
                  "{item.content}"
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div>
                    <div className="font-medium text-slate-800">{item.author}</div>
                    <div className="text-sm text-slate-500">{item.grade}</div>
                  </div>
                  <div className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium">
                    {item.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary-500 to-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            预约免费试听课程
          </h2>
          <p className="text-lg text-primary-100 mb-8">
            让孩子亲身体验阮老师的教学方式，感受数学的乐趣
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 rounded-full text-lg font-medium hover:shadow-xl transition-all hover:-translate-y-1"
          >
            立即预约试听
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
