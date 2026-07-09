"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle, Clock, Star } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const contacts = [
  { icon: Phone, label: "咨询电话", value: "138-0013-8000", href: "tel:13800138000" },
  { icon: MessageCircle, label: "微信号", value: "Cherry-Rora", href: "#" },
  { icon: Mail, label: "邮箱", value: "ruanqizhen@example.com", href: "mailto:ruanqizhen@example.com" },
  { icon: MapPin, label: "地址", value: "广东深圳宝安区", href: "#" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ parentName: "", studentName: "", grade: "", phone: "", wechat: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("提交失败");
      setSubmitted(true);
      setForm({ parentName: "", studentName: "", grade: "", phone: "", wechat: "", message: "" });
    } catch {
      alert("提交失败，请稍后重试");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-gradient-to-br from-amber-50 via-white to-blue-50">
        <div className="max-w-5xl mx-auto px-5 md:px-8 text-center">
          <p className="text-[13px] font-semibold text-blue-500 tracking-widest uppercase mb-4">Contact</p>
          <h1 className="text-[32px] md:text-[44px] font-bold text-slate-900 tracking-tight mb-4">
            免费诊断，<span className="text-blue-500">先聊再决定</span>
          </h1>
          <p className="text-[15px] text-slate-500 max-w-md mx-auto">
            填写表单，阮老师会在 24 小时内联系您。<br />无需任何费用，只是帮孩子分析一下现状。
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left - Contact info */}
            <AnimateOnScroll anim="fade-in-right" className="lg:col-span-2 space-y-5">
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                    <c.icon className="w-4 h-4 text-blue-500" />
                  </div>
                  <div>
                    <div className="text-[12px] text-slate-400">{c.label}</div>
                    <div className="text-[15px] font-semibold text-slate-700">{c.value}</div>
                  </div>
                </a>
              ))}

              <div className="bg-slate-50 rounded-2xl p-5">
                <h3 className="text-[14px] font-semibold text-slate-700 mb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-slate-400" />
                  咨询时间
                </h3>
                <div className="space-y-1.5">
                  {["周一至周五：17:00 - 21:00", "周六、周日：09:00 - 21:00"].map((t) => (
                    <div key={t} className="text-[13px] text-slate-500">{t}</div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-5 text-center">
                <p className="text-[13px] text-slate-400 mb-3">扫码添加微信</p>
                <div className="w-36 h-36 mx-auto bg-white rounded-2xl flex items-center justify-center shadow-sm">
                  <img src="/img/Head.jpg" alt="微信二维码" className="w-32 h-32 rounded-xl object-cover" />
                </div>
                <p className="text-[13px] text-blue-500 font-semibold mt-3">Cherry-Rora</p>
              </div>
              </AnimateOnScroll>

            {/* Right - Form */}
            <AnimateOnScroll anim="fade-in-left" delay={0.15} className="lg:col-span-3">
              {/* Trust badge */}
              <div className="flex items-center gap-4 mb-6 p-4 bg-blue-50 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-[14px] font-semibold text-slate-800">已服务 200+ 学员</div>
                  <div className="text-[12px] text-slate-500">提交后 24 小时内回复，信息严格保密</div>
                </div>
              </div>

              {submitted ? (
                <div className="bg-green-50 border border-green-100 rounded-2xl p-10 text-center">
                  <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
                  <h3 className="text-[20px] font-bold text-slate-800 mb-2">提交成功</h3>
                  <p className="text-[14px] text-slate-500">阮老师会在 24 小时内与您联系，<br />请保持电话畅通。</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-8 py-3 bg-slate-900 text-white text-[14px] font-semibold rounded-2xl hover:bg-slate-800 transition-colors"
                  >
                    继续咨询
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[13px] font-medium text-slate-600 mb-1.5">
                        家长姓名 <span className="text-red-400">*</span>
                      </label>
                      <input type="text" name="parentName" value={form.parentName} onChange={handleChange} required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-[14px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition-all"
                        placeholder="您的姓名" />
                    </div>
                    <div>
                      <label className="block text-[13px] font-medium text-slate-600 mb-1.5">
                        学生姓名 <span className="text-red-400">*</span>
                      </label>
                      <input type="text" name="studentName" value={form.studentName} onChange={handleChange} required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-[14px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition-all"
                        placeholder="孩子的姓名" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[13px] font-medium text-slate-600 mb-1.5">
                      年级 <span className="text-red-400">*</span>
                    </label>
                    <select name="grade" value={form.grade} onChange={handleChange} required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-[14px] text-slate-700 focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition-all">
                      <option value="">请选择年级</option>
                      {["一年级", "二年级", "三年级", "四年级", "五年级", "六年级"].map((g) => (
                        <option key={g} value={g}>{g}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[13px] font-medium text-slate-600 mb-1.5">
                        联系电话 <span className="text-red-400">*</span>
                      </label>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange} required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-[14px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition-all"
                        placeholder="手机号码" />
                    </div>
                    <div>
                      <label className="block text-[13px] font-medium text-slate-600 mb-1.5">微信号</label>
                      <input type="text" name="wechat" value={form.wechat} onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-[14px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition-all"
                        placeholder="方便联系" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[13px] font-medium text-slate-600 mb-1.5">孩子情况</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-[14px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                      placeholder="可以说说孩子的成绩、主要困难、希望达到的目标..." />
                  </div>

                  <button type="submit" disabled={submitting}
                    className="w-full py-4 bg-slate-900 text-white text-[15px] font-semibold rounded-2xl hover:bg-slate-800 transition-all hover:-translate-y-0.5 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                    {submitting ? (
                      <>提交中...</>
                    ) : (
                      <>
                        提交咨询
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[12px] text-slate-400">提交即视为同意隐私政策，您的信息将被严格保密</p>
                </form>
              )}
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
