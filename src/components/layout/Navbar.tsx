"use client";

import { useState } from "react";
import Link from "next/link";
import { Sparkles, Menu, X, Compass, PhoneCall } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "الرئيسية", href: "/" },
    { name: "معرض التحف والهدايا", href: "/products" },
    { name: "عن المتجر", href: "/#about" },
    { name: "تواصل معنا", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200/80 bg-stone-50/80 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 group">
        
          {/* Logo container*/}
          <div className="relative h-20 w-20 overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/decotouch-logo.png"
              alt="DécoTouch Logo"
              fill
              priority
              sizes="56px"
              className="object-contain"
            />
          </div>

          {/* Logo text */}
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-stone-900 transition-colors group-hover:text-amber-900">
              DÉCOTOUCH
            </span>
            <span className="text-[10px] font-semibold text-amber-800/90 tracking-widest uppercase">
              تحف ومقتنيات راقية
            </span>
          </div>
        </Link>

        {/* Home Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-700">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="transition-colors hover:text-amber-700"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-amber-100 shadow-sm transition hover:bg-stone-800 active:scale-95"
          >
            <Compass className="h-4 w-4" />
            استكشف المجموعات
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-stone-700 hover:bg-stone-200/60 md:hidden"
          aria-label="تبديل القائمة"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-b border-neutral-200 bg-stone-50 px-6 py-6 md:hidden shadow-lg animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-stone-800 hover:text-amber-700"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-stone-200">
              <Link
                href="/products"
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-stone-900 py-3 text-center text-sm font-medium text-amber-100 shadow"
              >
                <Compass className="h-4 w-4" />
                استكشف الكتالوج
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}