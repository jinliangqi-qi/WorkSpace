"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle, Clock } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    parentName: "",
    studentName: "",
    grade: "",
    phone: "",
    wechat: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        throw new Error("提交失败，请稍后重试");
      }
      setIsSubmitted(true);
      setFormData({
        parentName: "",
        studentName: "",
        grade: "",
        phone: "",
        wechat: "",
        message: "",
      });
    } catch (err) {
      alert(err instanceof Error ? err.message : "提交失败");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "咨询电话",
      content: "138-0013-8000",
      link: "tel:13800138000",
    },
    {
      icon: MessageCircle,
      title: "微信号",
      content: "Cherry-Rora",
      link: "#",
    },
    {
      icon: Mail,
      title: "电子邮箱",
      content: "ruanqizhen@example.com",
      link: "mailto:ruanqizhen@example.com",
    },
    {
      icon: MapPin,
      title: "教学地址",
      content: "广东深圳宝安区",
      link: "#",
    },
  ];

  const timeSlots = [
    "周一至周五：17:00-21:00",
    "周六：09:00-21:00",
    "周日：09:00-21:00",
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-24 pb-16 bg-gradient-warm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              联系咨询
            </h1>
            <p className="text-lg text-slate-600">
              欢迎联系阮老师，了解更多课程详情
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-8">
                联系方式
              </h2>
              
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-warm-100 rounded-xl flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary-500" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">{item.title}</div>
                      <div className="text-lg font-semibold text-slate-800">{item.content}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-primary-50 to-warm-50 rounded-2xl">
                <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary-500" />
                  咨询时间
                </h3>
                <ul className="space-y-2 text-slate-600">
                  {timeSlots.map((time, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {time}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 p-6 bg-white border-2 border-dashed border-primary-200 rounded-2xl text-center">
                <p className="text-slate-600 mb-4">扫码添加微信咨询</p>
                <div className="w-48 h-48 mx-auto bg-white rounded-xl border border-slate-200 flex items-center justify-center">
                  <img
                    src="/img/Head.jpg"
                    alt="微信二维码"
                    className="w-40 h-40 object-cover"
                  />
                </div>
                <p className="text-sm text-primary-500 font-medium mt-2">微信号：Cherry-Rora</p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-8">
                在线咨询
              </h2>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">提交成功！</h3>
                  <p className="text-slate-600">阮老师会尽快与您联系，请保持电话畅通。</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 px-6 py-3 bg-primary-500 text-white rounded-full font-medium hover:bg-primary-600 transition-colors"
                  >
                    继续咨询
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        家长姓名 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="请输入您的姓名"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        学生姓名 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="studentName"
                        value={formData.studentName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="请输入学生姓名"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      年级 <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="grade"
                      value={formData.grade}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">请选择年级</option>
                      <option value="一年级">一年级</option>
                      <option value="二年级">二年级</option>
                      <option value="三年级">三年级</option>
                      <option value="四年级">四年级</option>
                      <option value="五年级">五年级</option>
                      <option value="六年级">六年级</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        联系电话 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="请输入手机号码"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        微信号
                      </label>
                      <input
                        type="text"
                        name="wechat"
                        value={formData.wechat}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="请输入微信号"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      咨询内容
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                      placeholder="请描述孩子的学习情况和您的需求..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-medium text-lg hover:shadow-xl transition-all hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        提交中...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        提交咨询
                      </>
                    )}
                  </button>

                  <p className="text-center text-sm text-slate-500">
                    提交即表示您同意我们的隐私政策，您的信息将被严格保密
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
