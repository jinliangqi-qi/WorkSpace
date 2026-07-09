"use client";

import { Star, TrendingUp, Quote, CheckCircle, Award } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const successCases = [
  {
    name: "子涵",
    grade: "四年级",
    initialScore: 58,
    currentScore: 82,
    improvement: "+24分",
    duration: "一学期",
    story: "子涵三年级下开始跟不上，乘法口诀背不熟，应用题完全看不懂题目。我先花了3节课帮她补基础计算，再用画图的方式讲应用题，让她自己把题目'翻译'成图。期中考试及格了，期末考了82分，她妈妈发消息说孩子第一次主动说'数学也没那么难'。",
    avatar: "子",
  },
  {
    name: "俊杰",
    grade: "五年级",
    initialScore: 76,
    currentScore: 91,
    improvement: "+15分",
    duration: "4个月",
    story: "俊杰的问题比较典型——知识点都懂，计算老出错。我让他每次做完题先自己检查一遍，把检查方法拆成三步：一看数字有没有抄错、二看运算符号、三看单位。光这个习惯就帮他少丢了七八分。加上几何题的专项训练，期末终于上了90。",
    avatar: "俊",
  },
  {
    name: "思琪",
    grade: "三年级",
    initialScore: 63,
    currentScore: 85,
    improvement: "+22分",
    duration: "3个月",
    story: "思琪是三年级转学过来的，之前的学校进度慢，刚来就跟不上。她性格内向，不懂也不敢问。我先和她多聊天建立信任，再从二年级的内容开始查漏补缺，每周给她布置一两道稍微超纲的题培养信心。三个月后不但成绩上来了，上课也开始举手发言了。",
    avatar: "思",
  },
];

const testimonials = [
  {
    content: "老师，子涵这次期末数学82分！她自己都不敢相信，回来第一件事就是给我看卷子。以前每次考试前都紧张得睡不着，这次居然说'我觉得我能考好'。真的很感谢您这学期的辅导，下学期继续跟您学。",
    author: "子涵妈妈",
    grade: "四年级",
    date: "2026年1月",
    rating: 5,
  },
  {
    content: "阮老师好，俊杰这次单元测验91分，计算题全对。您教的那个「三步检查法」真的有用，他现在每次做完题都自己先查一遍，这个习惯养成了比分数更重要。谢谢老师！",
    author: "俊杰爸爸",
    grade: "五年级",
    date: "2026年3月",
    rating: 5,
  },
  {
    content: "老师，跟您说个好消息，思琪今天数学课主动举手回答问题了！虽然答得不太完整，但班主任特意给我发了消息。她以前在班上一句话都不说的。成绩也在慢慢上来，这次测验考了78，及格线终于过了。",
    author: "思琪妈妈",
    grade: "三年级",
    date: "2026年4月",
    rating: 5,
  },
  {
    content: "阮老师，我们试听了三个老师的课，孩子自己选的您。他说您讲课有意思，不像学校里那么严肃。上了两个月了，最近一次考试进步了十几分，关键是现在做作业不用我催了，主动拿过来让我签字。",
    author: "浩宇妈妈",
    grade: "五年级",
    date: "2026年5月",
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
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12 mb-16">
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
