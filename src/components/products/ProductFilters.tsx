"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Search, RotateCcw } from "lucide-react";
import { ProductCategory } from "@/types/product";

const CATEGORIES: (ProductCategory | "الكل")[] = [
  "الكل",
  "تحف وانتيك",
  "ديكور منزلي",
  "عطور و سبلاشات",
  "إضاءة وشموع",
];

export default function ProductFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get("category") || "الكل";
  const currentSearch = searchParams.get("search") || "";
  const currentAvailability = searchParams.get("available") || "all";

  // Update the query parameters in the URL based on the selected filter values
  const updateQuery = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value && value !== "الكل" && value !== "all") {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleReset = () => {
    router.push(pathname, { scroll: false });
  };

  const hasActiveFilters = searchParams.toString().length > 0;

  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-stone-200/80 bg-white p-6 shadow-xs">
      <div className="relative">
        <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
        <input
          type="text"
          placeholder="ابحث بالاسم، الخامة، أو الكلمات المفتاحية..."
          defaultValue={currentSearch}
          onChange={(e) => updateQuery("search", e.target.value || null)}
          className="w-full rounded-xl border border-stone-200 bg-stone-50/50 py-2.5 pr-10 pl-4 text-sm text-stone-900 placeholder:text-stone-400 focus:border-amber-400 focus:bg-white focus:outline-hidden"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
          التصنيف
        </label>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = currentCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => updateQuery("category", cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition active:scale-95 ${
                  isActive
                    ? "bg-stone-900 text-amber-100 shadow-xs"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between border-t border-stone-100 pt-4 gap-4">
        <div className="flex items-center gap-2">
          <label className="text-xs text-stone-600 font-medium">حالة التوفر:</label>
          <select
            value={currentAvailability}
            onChange={(e) => updateQuery("available", e.target.value)}
            aria-label="تصفية حسب حالة التوفر"
            className="rounded-lg border border-stone-200 bg-stone-50 px-3 py-1.5 text-xs text-stone-700 focus:border-amber-400 focus:outline-hidden"
          >
            <option value="all">جميع القطع</option>
            <option value="in_stock">المتاحة فقط للحجز</option>
          </select>
        </div>

        {hasActiveFilters && (
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-800 hover:text-amber-900 hover:underline"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            إعادة تعيين الفلاتر
          </button>
        )}
      </div>
    </div>
  );
}