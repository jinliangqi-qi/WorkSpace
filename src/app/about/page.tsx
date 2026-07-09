"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const highlights = [
  { num: "5", unit: "年", label: "一线教学经验" },
  { num: "1000+", unit: "", label: "累计授课课时" },
  { num: "200+", unit: "", label: "累计辅导学员" },
];

const timeline = [
  { year: "2021", title: "加入一线教学", desc: "入职知名教育机构，系统学习教学法，累计完成 400+ 课时授课。" },
  { year: "2022", title: "获评优秀教师", desc: "教学满意度连续四个季度排名机构前列，获年度优秀教师表彰。" },
  { year: "2023", title: "转向个性化辅导", desc: "专注一对一和小班教学，深入研发个性化教学方案与配套教辅资料。" },
  { year: "2024", title: "教学体系成熟", desc: "形成\"诊断-规划-教学-测评\"四步教学闭环，辅导学员突破 200 人次。" },
  { year: "2025", title: "独立教学工作室", desc: "成立个人教学工作室，专注小学数学个性化辅导与课程研发。" },
  { year: "2026", title: "线上线下融合", desc: "扩展线上授课能力，同步服务更多地区的学员家庭。" },
];

const values = [
  {
    title: "系统教学",
    desc: "不靠题海战术，而是帮孩子建立完整的知识框架。每个知识点讲透、练会、能迁移。",
  },
  {
    title: "因材施教",
    desc: "同一个年级，不同孩子的问题完全不同。入学先诊断，再制定个性化的学习方案。",
  },
  {
    title: "家校协同",
    desc: "定期向家长反馈学习进度，沟通课堂表现，让家长清楚知道孩子在学什么、学得怎么样。",
  },
  {
    title: "长期陪伴",
    desc: "不追求一次考试突击提分，而是持续跟踪孩子的学习状态，培养受益终身的数学思维。",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-20">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="max-w-2xl">
            <p className="text-[13px] font-medium text-apple-blue mb-4">
              关于阮老师
            </p>
            <h1 className="text-[32px] md:text-[48px] font-semibold text-apple-dark leading-[1.1] tracking-tight mb-6">
              专业背景
              <br />
              教学资质
            </h1>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-3 gap-4 md:gap-8">
            {highlights.map((s) => (
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

      {/* About */}
      <section className="py-20 md:py-28 bg-apple-gray-6">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-apple-lg overflow-hidden aspect-[4/3] bg-apple-gray-6">
              <img
                src="/img/Head.jpg"
                alt="阮琪珍老师"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-[24px] md:text-[28px] font-semibold text-apple-dark tracking-tight mb-6">
                教师简介
              </h2>
              <div className="space-y-4">
                <p className="text-[17px] text-apple-dark leading-relaxed">
                  阮琪珍，毕业于师范院校数学教育专业，持有小学数学教师资格证书。
                </p>
                <p className="text-[17px] text-apple-dark leading-relaxed">
                  2021 年至今专注小学数学一线教学，熟悉人教版、北师大版、苏教版等多版本教材体系，对各年级知识架构和常见考点有系统性的理解。
                </p>
                <p className="text-[17px] text-apple-dark leading-relaxed">
                  教学中注重\"诊断先行\"——先通过摸底测试找出每个孩子的知识薄弱点，再制定针对性方案，避免无效刷题。
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-[24px] md:text-[28px] font-semibold text-apple-dark tracking-tight mb-6">
                擅长方向
              </h2>
              <div className="space-y-3">
                {[
                  "低年级（1-3 年级）：计算能力培养、应用题入门、学习习惯养成",
                  "中年级（4 年级）：四则运算强化、小数和分数基础过渡",
                  "高年级（5-6 年级）：几何图形、方程、比例与百分数、小升初衔接",
                  "专项突破：计算粗心纠正、审题方法训练、考试时间管理",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-apple p-4 text-[14px] text-apple-gray leading-relaxed"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28">
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
                  <p className="text-[13px] text-apple-gray leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-apple-gray-6">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-apple-dark tracking-tight mb-14">
            教学理念
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-apple p-6 md:p-8"
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
