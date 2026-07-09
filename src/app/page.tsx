"use client";

import { ArrowRight, Star, BookOpen, Heart, Lightbulb, Target } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const features = [
  {
    icon: Star,
    title: "提分显著",
    desc: "平均提分 20-30 分",
  },
  {
    icon: BookOpen,
    title: "5 年经验",
    desc: "深耕小学数学教学",
  },
  {
    icon: Heart,
    title: "耐心细致",
    desc: "关注每个学习细节",
  },
  {
    icon: Lightbulb,
    title: "因材施教",
    desc: "个性化学习方案",
  },
];

const reviews = [
  {
    text: "孩子以前很怕数学，现在每次上课都很期待！期中考试从 72 分提到了 95 分。",
    parent: "小明妈妈",
    detail: "四年级",
  },
  {
    text: "老师讲解很清晰，孩子说比学校老师讲得更明白，学习兴趣大大提高了。",
    parent: "小红爸爸",
    detail: "五年级",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-20 md:pb-28">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-[13px] font-medium text-apple-blue mb-4 tracking-wide">
              小学数学辅导 · 深圳宝安
            </p>
            <h1 className="text-[40px] md:text-[56px] font-semibold text-apple-dark leading-[1.1] tracking-tight text-balance mb-6">
              让孩子爱上
              <br />
              数学的每一课
            </h1>
            <p className="text-[17px] md:text-[19px] text-apple-gray leading-relaxed max-w-xl mx-auto mb-10">
              阮琪珍老师，5 年小学数学教学经验。用耐心和方法，帮助孩子建立数学思维，找到学习自信。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="/contact"
                className="w-full sm:w-auto px-7 py-3 bg-apple-blue text-white text-[15px] font-medium rounded-full hover:bg-apple-blue/90 transition-colors duration-200 inline-flex items-center justify-center gap-2"
              >
                预约免费试听
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/courses"
                className="w-full sm:w-auto px-7 py-3 text-apple-blue text-[15px] font-medium rounded-full hover:bg-apple-blue/5 transition-colors duration-200 inline-flex items-center justify-center"
              >
                了解课程
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="relative rounded-apple-lg overflow-hidden bg-apple-gray-6 aspect-[16/9] md:aspect-[21/9]">
            <img
              src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=warm%20modern%20classroom%20interior%20minimalist%20bright%20natural%20light%20wood%20desk%20chalkboard%20apple%20style%20clean%20aesthetic%20soft%20colors&image_size=landscape_16_9"
              alt="教学环境"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-3 gap-4 md:gap-8">
            {[
              { num: "5+", label: "年教学经验" },
              { num: "500+", label: "学生受益" },
              { num: "98%", label: "家长好评" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-[32px] md:text-[48px] font-semibold text-apple-dark tracking-tight">
                  {s.num}
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
          <div className="text-center mb-14">
            <h2 className="text-[28px] md:text-[36px] font-semibold text-apple-dark tracking-tight">
              为什么选择阮老师
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
                <h3 className="text-[15px] font-semibold text-apple-dark mb-1">
                  {f.title}
                </h3>
                <p className="text-[13px] text-apple-gray">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="text-center mb-14">
            <h2 className="text-[28px] md:text-[36px] font-semibold text-apple-dark tracking-tight">
              家长心声
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reviews.map((r, i) => (
              <div
                key={i}
                className="bg-apple-gray-6 rounded-apple p-6 md:p-8"
              >
                <p className="text-[15px] md:text-[17px] text-apple-dark leading-relaxed mb-6">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-apple-gray-5 flex items-center justify-center">
                    <span className="text-[12px] font-medium text-apple-gray">
                      {r.parent[0]}
                    </span>
                  </div>
                  <div>
                    <div className="text-[13px] font-medium text-apple-dark">
                      {r.parent}
                    </div>
                    <div className="text-[12px] text-apple-gray">{r.detail}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-apple-dark">
        <div className="max-w-5xl mx-auto px-5 md:px-8 text-center">
          <h2 className="text-[28px] md:text-[40px] font-semibold text-white tracking-tight mb-4">
            开启孩子的数学之旅
          </h2>
          <p className="text-[15px] md:text-[17px] text-apple-gray-3 mb-10 max-w-lg mx-auto">
            预约一节免费试听课，让孩子亲身体验不一样的数学课堂
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
