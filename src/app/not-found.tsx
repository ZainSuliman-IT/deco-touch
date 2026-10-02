import Link from "next/link";
import { Compass, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-stone-100 text-stone-700 mb-6">
        <Sparkles className="h-8 w-8 text-amber-700" />
      </div>

      <span className="text-sm font-semibold tracking-wider text-amber-800 uppercase">
        خطأ 404
      </span>
      <h1 className="mt-2 text-3xl font-extrabold text-stone-900 sm:text-4xl">
        لم نعثر على هذه القطعة
      </h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-stone-600">
        يبدو أن الرابط الذي طلبته غير موجود أو تم نقل القطعة إلى أرشيف المقتنيات المباعة.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-amber-100 shadow-sm transition hover:bg-stone-800"
        >
          <Compass className="h-4 w-4" />
          تصفح الكتالوج المتاح
        </Link>
        <Link
          href="/"
          className="rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-700 transition hover:bg-stone-50"
        >
          العودة للرئيسية
        </Link>
      </div>
    </main>
  );
}