import Link from "next/link";
import Image from "next/image";
import { Sparkles, Heart, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-100 text-stone-700">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2 space-y-4">
            {/* Logo In Footer */}
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/decotouch-logo.png"
                  alt="DécoTouch Logo"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-stone-900 transition-colors group-hover:text-amber-900">
                  DÉCOTOUCH
                </span>
                <span className="text-[10px] font-semibold text-amber-800/90 tracking-widest uppercase">
                  تحف ومقتنيات راقية
                </span>
              </div>
            </Link>

            <p className="max-w-md text-sm leading-relaxed text-stone-600">
              وجهتكم الأولى لاقتناء الهدايا والتحف المصنوعة بذوق فني استثنائي. نحرص على انتقاء قطع تروي حكاية وتضفي على مساحتكم طابعاً من الدفء والأصالة.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-stone-900 tracking-wider">أقسام المعرض</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/products?category=تحف+وانتيك" className="hover:text-amber-800 transition">تحف وأنتيك</Link>
              </li>
              <li>
                <Link href="/products?category=ديكور+منزلي" className="hover:text-amber-800 transition">ديكورات منزلية</Link>
              </li>
              <li>
                <Link href="/products?category=فخاريات+ومصنوعات+يدوية" className="hover:text-amber-800 transition">مصنوعات يدوية</Link>
              </li>
              <li>
                <Link href="/products?category=إضاءة+وشموع" className="hover:text-amber-800 transition">إضاءة وشموع</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-stone-900 tracking-wider">الطلبات الخاصة</h3>
            <p className="mt-4 text-sm text-stone-600 leading-relaxed">
              نوفر خدمة حجز القطع وتجهيز هدايا المناسبات الخاصة والشخصية.
            </p>
            <div className="mt-4">
              <a
                href="https://wa.me/?text=مرحباً،%20أود%20الاستفسار%20عن%20التحف%20والهدايا%20المتاحة"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700 hover:text-emerald-800"
              >
                <MessageCircle className="h-4 w-4" />
                تواصل معنا عبر واتساب
              </a>
            </div>
          </div>
          
        </div>

        <div className="mt-12 border-t border-stone-200/80 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} Deco Touch. جميع الحقوق محفوظة.</p>
          <p className="flex items-center gap-1" dir="ltr">
           Developed and programmed by <strong>M&Z </strong>using Next.js and Tailwind CSS.
          </p>
        </div>

      </div>
    </footer>
  );
}