"use client";

import { Star, TrendingUp, Quote, CheckCircle, Award } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const successCases = [
  {
    name: "小明",
    grade: "四年级",
    initialScore: 72,
    currentScore: 95,
    improvement: "+23分",
    duration: "3个月",
    story: "小明之前对数学很抵触，觉得数学很难。通过一对一辅导，我发现他主要是基础概念不扎实，对应用题理解有困难。我用生活中的例子帮他理解，慢慢建立信心，3个月内成绩从72分提升到95分。",
    avatar: "M",
  },
  {
    name: "小红",
    grade: "五年级",
    initialScore: 80,
    currentScore: 98,
    improvement: "+18分",
    duration: "4个月",
    story: "小红基础不错，但总是粗心大意丢分。我帮她制定了错题整理计划，培养仔细检查的习惯。同时针对她薄弱的几何部分进行专项训练，最终成绩稳定在98分左右。",
    avatar: "H",
  },
  {
    name: "小刚",
    grade: "六年级",
    initialScore: 65,
    currentScore: 90,
    improvement: "+25分",
    duration: "5个月",
    story: "小刚马上要小升初，数学成绩一直不理想。我帮他系统复习了小学全部知识点，针对高频考点进行训练，同时进行心理辅导减轻压力。最终顺利考入重点中学。",
    avatar: "G",
  },
];

const testimonials = [
  {
    content: "阮老师真的很有耐心！孩子以前一遇到数学难题就哭，现在能主动思考了。期中考试进步了20多分，太感谢老师了！",
    author: "小明妈妈",
    grade: "四年级",
    date: "2026年3月",
    rating: 5,
  },
  {
    content: "老师讲解很清晰，孩子说比学校老师讲得明白多了。每次上课都很期待，学习兴趣大大提高了。",
    author: "小红爸爸",
    grade: "五年级",
    date: "2026年2月",
    rating: 5,
  },
  {
    content: "小升初压力很大，阮老师不仅辅导功课，还经常鼓励孩子，给孩子信心。孩子现在心态很好，成绩也稳步提升。",
    author: "小刚妈妈",
    grade: "六年级",
    date: "2026年1月",
    rating: 5,
  },
  {
    content: "之前找过几个老师，都不太满意。阮老师是第一个能让孩子真正理解数学的老师，推荐！",
    author: "小华家长",
    grade: "三年级",
    date: "2026年4月",
    rating: 5,
  },
];

const achievements = [
  { icon: TrendingUp, value: "500+", label: "辅导学生" },
  { icon: Award, value: "98%", label: "家长满意度" },
  { icon: Star, value: "4.9", label: "平均评分" },
];

export default function CasesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-24 pb-16 bg-gradient-warm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              教学案例
            </h1>
            <p className="text-lg text-slate-600">
              真实案例见证孩子的成长与进步
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-12 mb-16">
            {achievements.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-warm-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-8 h-8 text-primary-500" />
                </div>
                <div className="text-3xl font-bold text-primary-500 mb-1">{item.value}</div>
                <div className="text-slate-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">
            提分案例
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successCases.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all">
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-xl font-bold">
                        {item.avatar}
                      </div>
                      <div>
                        <div className="font-semibold">{item.name}</div>
                        <div className="text-sm opacity-80">{item.grade}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">{item.improvement}</div>
                      <div className="text-sm opacity-80">{item.duration}</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm opacity-80">起始成绩</div>
                      <div className="text-xl font-semibold">{item.initialScore}分</div>
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-white rounded-full"
                          style={{ width: `${((item.currentScore - item.initialScore) / 40) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm opacity-80">当前成绩</div>
                      <div className="text-xl font-semibold">{item.currentScore}分</div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.story}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">
            家长评价
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((item, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-6">
                <Quote className="w-8 h-8 text-primary-300 mb-4" />
                <p className="text-slate-600 leading-relaxed mb-6">
                  {item.content}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-slate-800">{item.author}</div>
                    <div className="text-sm text-slate-500">{item.grade} · {item.date}</div>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
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
