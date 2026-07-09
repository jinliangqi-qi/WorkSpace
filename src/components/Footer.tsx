"use client";

import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                <span className="text-white font-bold">阮</span>
              </div>
              <span className="font-bold text-lg">阮老师数学</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              专注小学数学辅导5年，帮助上千名学生提升数学成绩，培养数学思维能力。
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="/about" className="hover:text-white transition-colors">关于我</a>
              </li>
              <li>
                <a href="/courses" className="hover:text-white transition-colors">课程服务</a>
              </li>
              <li>
                <a href="/cases" className="hover:text-white transition-colors">教学案例</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition-colors">联系咨询</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">联系方式</h4>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary-400" />
                <span>咨询电话：138-0013-8000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary-400" />
                <span>邮箱：ruanqizhen@example.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary-400" />
                <span>地址：广东深圳宝安区</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-500 text-sm">
          <p>© 2026 阮琪珍老师 版权所有</p>
        </div>
      </div>
    </footer>
  );
}
