"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "首页", href: "/" },
  { label: "关于我", href: "/about" },
  { label: "课程服务", href: "/courses" },
  { label: "教学案例", href: "/cases" },
  { label: "联系咨询", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
              <span className="text-white font-bold">阮</span>
            </div>
            <span className="font-bold text-lg text-slate-800">阮老师数学</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-600 hover:text-primary-500 transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:13800138000"
              className="flex items-center gap-1 text-slate-600 hover:text-primary-500 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">咨询电话</span>
            </a>
            <a
              href="/contact"
              className="px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full text-sm font-medium hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              <span className="flex items-center gap-1">
                <MessageCircle className="w-4 h-4" />
                在线咨询
              </span>
            </a>
          </div>

          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-slate-600 hover:text-primary-500 hover:bg-slate-50 rounded-lg transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-100">
              <a
                href="/contact"
                className="block w-full py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg text-center font-medium"
                onClick={() => setIsOpen(false)}
              >
                立即咨询
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
