"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "首页", href: "/" },
  { label: "关于我", href: "/about" },
  { label: "课程", href: "/courses" },
  { label: "案例", href: "/cases" },
  { label: "联系", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass border-b border-apple-gray-5/50 shadow-apple"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          <a href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-[10px] bg-apple-dark flex items-center justify-center">
              <span className="text-white text-sm font-semibold">阮</span>
            </div>
            <span className="font-semibold text-[15px] text-apple-dark tracking-tight">
              阮老师数学
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-1.5 text-[13px] font-medium text-apple-gray hover:text-apple-dark rounded-full transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/contact"
              className="ml-2 px-4 py-1.5 bg-apple-blue text-white text-[13px] font-medium rounded-full hover:bg-apple-blue/90 transition-colors duration-200"
            >
              预约试听
            </a>
          </div>

          <button
            className="md:hidden p-2 -mr-2 text-apple-dark"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass border-t border-apple-gray-5/50">
          <div className="max-w-5xl mx-auto px-5 py-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2.5 text-[15px] font-medium text-apple-dark hover:bg-apple-gray-6 rounded-apple transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full py-2.5 bg-apple-blue text-white text-[15px] font-medium rounded-apple text-center"
              >
                预约试听
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
