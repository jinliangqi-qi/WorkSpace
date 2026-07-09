"use client";

export function Footer() {
  const links = [
    { label: "首页", href: "/" },
    { label: "关于我", href: "/about" },
    { label: "课程", href: "/courses" },
    { label: "案例", href: "/cases" },
    { label: "联系", href: "/contact" },
  ];

  return (
    <footer className="bg-slate-50 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-[10px] bg-slate-900 flex items-center justify-center">
                <span className="text-white text-sm font-semibold">阮</span>
              </div>
              <span className="font-bold text-[15px] text-slate-800">
                阮老师数学
              </span>
            </div>
            <p className="text-[13px] text-slate-500 leading-relaxed max-w-xs">
              专注小学数学辅导，帮每个孩子建立真正的数学思维。
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[13px] text-slate-500 hover:text-slate-800 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:justify-between gap-2 text-[12px] text-slate-400">
          <span>广东深圳宝安区</span>
          <span>微信：Cherry-Rora</span>
        </div>

        <div className="mt-4 text-[11px] text-slate-300">
          &copy; {new Date().getFullYear()} 阮琪珍老师
        </div>
      </div>
    </footer>
  );
}
