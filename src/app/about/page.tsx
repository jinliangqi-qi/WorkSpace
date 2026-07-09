"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const timeline = [
  { year: "2021", title: "开启教学之路", desc: "加入知名教育机构，担任小学数学教师" },
  { year: "2022", title: "获得优秀教师", desc: "连续多次获得机构优秀教师表彰" },
  { year: "2023", title: "专注一对一", desc: "转向一对一精品辅导，积累丰富经验" },
  { year: "2024", title: "辅导 500+ 学生", desc: "帮助 500 余名学生提升数学成绩" },
  { year: "2025", title: "独立工作室", desc: "成立个人工作室，专注个性化教学" },
  { year: "2026", title: "全面升级", desc: "线上线下同步辅导，服务更多家庭" },
];

const values = [
  {
    title: "用心",
    desc: "每个孩子都是独特的，用爱心和耐心对待每一位学生。",
  },
  {
    title: "启智",
    desc: "激发学习兴趣，让孩子发现数学的魅力与乐趣。",
  },
  {
    title: "授渔",
    desc: "不仅教知识，更注重培养孩子的学习方法和思维能力。",
  },
  {
    title: "同行",
    desc: "定期与家长沟通，家校配合，共同关注孩子成长。",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-28 md:pt-36 pb-16 md:pb-20">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="max-w-2xl">
            <p className="text-[13px] font-medium text-apple-blue mb-4">
              关于我
            </p>
            <h1 className="text-[32px] md:text-[48px] font-semibold text-apple-dark leading-[1.1] tracking-tight mb-6">
              用心教学
              <br />
              静待花开
            </h1>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-apple-lg overflow-hidden aspect-[4/3] bg-apple-gray-6">
              <img
                src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=female%20teacher%20portrait%20warm%20smile%20natural%20light%20clean%20background%20apple%20style%20minimalist%20soft%20colors&image_size=landscape_4_3"
                alt="阮老师"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-[17px] text-apple-dark leading-relaxed mb-4">
                我是阮琪珍，毕业于师范院校数学教育专业，拥有小学数学教师资格证。
              </p>
              <p className="text-[17px] text-apple-dark leading-relaxed mb-4">
                从 2021 年开始专注小学数学教学，深知每个孩子在学习中可能遇到的困难和挑战。
              </p>
              <p className="text-[17px] text-apple-dark leading-relaxed">
                我始终相信，没有学不好数学的孩子，只有不适合的教学方法。通过耐心引导和个性化方案，帮助每个孩子找到学习自信。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-apple-gray-6">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-apple-dark tracking-tight mb-14">
            教学经历
          </h2>
          <div className="space-y-0">
            {timeline.map((item, i) => (
              <div
                key={i}
                className="flex gap-6 md:gap-10 py-6 border-b border-apple-gray-5 last:border-0"
              >
                <div className="w-16 md:w-20 flex-shrink-0">
                  <span className="text-[15px] font-semibold text-apple-blue">
                    {item.year}
                  </span>
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold text-apple-dark mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-apple-gray">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-apple-dark tracking-tight mb-14">
            教育理念
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-apple-gray-6 rounded-apple p-6 md:p-8"
              >
                <h3 className="text-[20px] font-semibold text-apple-dark mb-2">
                  {v.title}
                </h3>
                <p className="text-[14px] text-apple-gray leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
