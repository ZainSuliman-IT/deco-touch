import Link from "next/link";
import { getFeaturedProducts } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import { Sparkles, Gift, ShieldCheck, Truck, ArrowLeft, ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default async function HomePage() {
  const featuredProducts = await getFeaturedProducts();

  const categories = [
    { title: "تحف وانتيك", count: "قطع تاريخية نادرة", query: "تحف+وانتيك" },
    { title: "ديكور منزلي", count: "تصاميم عصرية دافئة", query: "ديكور+منزلي" },
    { title: "عطور و سبلاشات", count: "روائح تراثية فريدة", query: "عطور+و+سبلاشات" },
    { title: "إضاءة وشموع", count: "أجواء شتوية دافئة", query: "إضاءة+وشموع" },
  ];

  return (
    <div className="flex flex-col gap-20 pb-20">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-[#FAF8F5] py-24 sm:py-32">
        {/* Shadow Effect */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute -top-40 right-1/2 translate-x-1/2 -z-10 h-96 w-[42rem] rounded-full bg-radial from-amber-200/40 via-amber-100/20 to-transparent blur-3xl"
        />

        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            
            {/* Upper Logo */}
            <ScrollReveal delay={0.1} yOffset={16}>
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-200/80 bg-amber-50/90 px-4 py-1.5 text-xs font-semibold text-amber-900 shadow-xs backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-amber-600 animate-pulse" />
                <span>مقتنيات فنية تخلد الذكريات</span>
              </div>
            </ScrollReveal>

            {/* Home Title */}
            <ScrollReveal delay={0.2} yOffset={20}>
              <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-stone-900 sm:text-6xl sm:leading-[1.15]">
                لكل ركنٍ حكاية، <br className="hidden sm:inline" />
                <span className="bg-gradient-to-l from-amber-800 via-amber-700 to-stone-900 bg-clip-text text-transparent">
                  ولكل هديةٍ أثر
                </span>
              </h1>
            </ScrollReveal>

            {/* Home Description */}
            <ScrollReveal delay={0.3} yOffset={20}>
              <p className="mt-6 text-base leading-relaxed text-stone-600 sm:text-lg sm:leading-relaxed">
                نجمع لكم تشكيلة منتقاة بعناية من التحف النادرة، المصنوعات اليدوية، وهدايا المناسبات الاستثنائية التي تعبر عن الذوق الرفيع.
              </p>
            </ScrollReveal>

            {/* Home Buttons */}
            <ScrollReveal delay={0.4} yOffset={20}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/products"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-stone-900 px-8 py-4 text-sm font-semibold text-amber-100 shadow-lg shadow-stone-900/10 transition-all duration-300 hover:bg-stone-800 hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
                >
                  تصفح الكتالوج بالكامل
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                </Link>
                <a
                  href="#about"
                  className="inline-flex items-center gap-2 rounded-full border border-stone-300/80 bg-white/70 px-7 py-4 text-sm font-semibold text-stone-700 shadow-xs backdrop-blur-md transition-all duration-200 hover:bg-white hover:border-stone-400 active:scale-95"
                >
                  عن فلسفتنا في الانتقاء
                </a>
              </div>
            </ScrollReveal>

            {/* Bottom Bar */}
            <ScrollReveal delay={0.5} yOffset={16}>
              <div className="mt-14 pt-10 border-t border-stone-200/60 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-lg font-bold text-stone-900 sm:text-xl">100%</div>
                  <div className="text-[11px] text-stone-500 mt-0.5">قطع أصلية ومميزة</div>
                </div>
                <div className="border-x border-stone-200/60">
                  <div className="text-lg font-bold text-stone-900 sm:text-xl">تغليف خاص</div>
                  <div className="text-[11px] text-stone-500 mt-0.5">جاهز للإهداء المباشر</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-stone-900 sm:text-xl">حجز مرن</div>
                  <div className="text-[11px] text-stone-500 mt-0.5">طلب مباشر عبر واتساب</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Categories Bar */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, index) => (
            <ScrollReveal key={cat.title} delay={index * 0.1} yOffset={20}>
              <Link
                href={`/products?category=${cat.query}`}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-stone-200/80 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-300/80 hover:shadow-xl hover:shadow-amber-900/5"
              >
                {/* Hover Effect */}
                <div 
                  aria-hidden="true" 
                  className="pointer-events-none absolute -top-12 -left-12 h-28 w-28 rounded-full bg-radial from-amber-100/70 to-transparent opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" 
                />

                <div className="relative z-10">
                  <span className="inline-block h-1 w-6 rounded-full bg-stone-200 transition-all duration-300 group-hover:w-10 group-hover:bg-amber-700" />
                  
                  <h3 className="mt-4 text-lg font-bold text-stone-900 transition-colors duration-200 group-hover:text-amber-900">
                    {cat.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-stone-500 leading-relaxed">
                    {cat.count}
                  </p>
                </div>

                <div className="relative z-10 mt-8 flex items-center justify-between border-t border-stone-100 pt-4">
                  <span className="text-[11px] font-medium text-stone-400 transition-colors duration-200 group-hover:text-amber-800">
                    استكشف القطع
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-stone-50 text-stone-400 transition-all duration-300 group-hover:bg-stone-900 group-hover:text-amber-100">
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Featured Collection */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8">
        <ScrollReveal delay={0.1} yOffset={16}>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-b border-stone-200/80 pb-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-600" />
                </span>
                <span className="text-xs font-semibold tracking-wider text-amber-800 uppercase">
                  انتقاءات حصرية
                </span>
              </div>
              <h2 className="mt-1.5 text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
                مختارات هذا الشهر
              </h2>
            </div>

            <Link
              href="/products"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-stone-700 transition-colors hover:text-amber-900"
            >
              <span>مشاهدة جميع القطع ({featuredProducts.length}+)</span>
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-stone-100 transition-all duration-300 group-hover:bg-amber-100 group-hover:text-amber-900">
                <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
              </div>
            </Link>
          </div>
        </ScrollReveal>

        {/* Grid of Featured Products */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product, index) => (
            <ScrollReveal 
              key={product.id} 
              delay={0.15 + index * 0.1} 
              duration={0.65} 
              yOffset={24}
              className="h-full"
            >
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Trust & Brand Values */}
      <section id="about" className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-stone-200/80 bg-gradient-to-b from-stone-100/90 to-stone-100/40 p-8 sm:p-14">
          
          {/* Orange Shadow in Background */}
          <div 
            aria-hidden="true" 
            className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-amber-100/60 blur-3xl"
          />

          {/* About Section Header */}
          <ScrollReveal delay={0.1} yOffset={16}>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-semibold tracking-wider text-amber-800 uppercase">
                قيمنا ومعاييرنا
              </span>
              <h2 className="mt-2 text-2xl font-extrabold text-stone-900 sm:text-3xl tracking-tight">
                لماذا تختار مقتنياتنا؟
              </h2>
              <p className="mt-3 text-sm text-stone-600 leading-relaxed sm:text-base">
                نؤمن أن الهدية ليست مجرد غرض يُشترى، بل هي رسالة تقدير واهتمام تدوم لسنوات وتصنع ذكريات لا تُنسى.
              </p>
            </div>
          </ScrollReveal>

          {/* Featured Features Cards with Sequential Appearance and Hover Interaction */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            
            {/* Feature 1: Packaging */}
            <ScrollReveal delay={0.2} yOffset={20} className="h-full">
              <div className="group flex h-full flex-col items-center text-center rounded-2xl border border-stone-200/80 bg-white/90 p-8 shadow-xs backdrop-blur-xs transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/80 hover:shadow-lg hover:shadow-amber-900/5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-amber-800 ring-1 ring-amber-200/60 transition-all duration-300 group-hover:scale-110 group-hover:bg-amber-100 mb-5">
                  <Gift className="h-7 w-7" />
                </div>
                <h3 className="text-base font-bold text-stone-900 group-hover:text-amber-900 transition-colors">
                  تغليف هدايا فاخر
                </h3>
                <p className="mt-2.5 text-xs leading-relaxed text-stone-600">
                  نهتم بأدق التفاصيل من الصناديق الفاخرة، الأشرطة الحريرية، وبطاقات الإهداء المكتوبة يدوياً لتصل كتحفة متكاملة.
                </p>
              </div>
            </ScrollReveal>

            {/* Feature 2: Quality and Authenticity */}
            <ScrollReveal delay={0.3} yOffset={20} className="h-full">
              <div className="group flex h-full flex-col items-center text-center rounded-2xl border border-stone-200/80 bg-white/90 p-8 shadow-xs backdrop-blur-xs transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/80 hover:shadow-lg hover:shadow-amber-900/5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-amber-800 ring-1 ring-amber-200/60 transition-all duration-300 group-hover:scale-110 group-hover:bg-amber-100 mb-5">
                  <ShieldCheck className="h-7 w-7" />
                </div>
                <h3 className="text-base font-bold text-stone-900 group-hover:text-amber-900 transition-colors">
                  أصالة وجودة الصنع
                </h3>
                <p className="mt-2.5 text-xs leading-relaxed text-stone-600">
                  كل قطعة تُفحص وتُنتقى بعناية فائقة لضمان نقاء الخامات، دقة الحفر، ومتانة تدوم طويلاً دون أن تفقد بريقها.
                </p>
              </div>
            </ScrollReveal>

            {/* Feature 3: Secure Shipping */}
            <ScrollReveal delay={0.4} yOffset={20} className="h-full">
              <div className="group flex h-full flex-col items-center text-center rounded-2xl border border-stone-200/80 bg-white/90 p-8 shadow-xs backdrop-blur-xs transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/80 hover:shadow-lg hover:shadow-amber-900/5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-amber-800 ring-1 ring-amber-200/60 transition-all duration-300 group-hover:scale-110 group-hover:bg-amber-100 mb-5">
                  <Truck className="h-7 w-7" />
                </div>
                <h3 className="text-base font-bold text-stone-900 group-hover:text-amber-900 transition-colors">
                  توصيل آمن ومحمي
                </h3>
                <p className="mt-2.5 text-xs leading-relaxed text-stone-600">
                  تغليف متعدد الطبقات ومبطن ضد الصدمات لضمان وصول المقتنيات الخزفية والزجاجية الحساسة بسلام تام حتى باب منزلك.
                </p>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

    </div>
  );
}