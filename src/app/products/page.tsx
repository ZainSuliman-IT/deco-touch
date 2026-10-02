import { getAllProducts } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import ProductFilters from "@/components/products/ProductFilters";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Suspense } from "react";
import { Sparkles, PackageOpen } from "lucide-react";

interface ProductsPageProps {
  searchParams: Promise<{
    category?: string;
    search?: string;
    available?: string;
  }>;
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const resolvedParams = await searchParams;
  const products = await getAllProducts();

  const selectedCategory = resolvedParams.category;
  const searchQuery = resolvedParams.search?.toLowerCase().trim();
  const availableFilter = resolvedParams.available;

  // process the products based on the selected filters and search query
  const filteredProducts = products.filter((item) => {
    // category filter
    if (selectedCategory && selectedCategory !== "الكل") {
      if (item.category !== selectedCategory) return false;
    }

    // availability filter
    if (availableFilter === "in_stock" && !item.isAvailable) {
      return false;
    }

    // text search filter
    if (searchQuery) {
      const matchTitle = item.title.toLowerCase().includes(searchQuery);
      const matchDescription = item.description.toLowerCase().includes(searchQuery);
      const matchMaterial = item.material?.toLowerCase().includes(searchQuery);
      const matchTags = item.tags.some((tag) => tag.toLowerCase().includes(searchQuery));
      return matchTitle || matchDescription || matchMaterial || matchTags;
    }

    return true;
  });

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8">
      <div className="mb-10 text-center sm:text-right">
        <ScrollReveal delay={0.1} yOffset={14}>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-800 tracking-wider uppercase mb-2">
            <Sparkles className="h-3.5 w-3.5 text-amber-600 animate-pulse" />
            <span>المعرض الشامل</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2} yOffset={16}>
          <h1 className="text-3xl font-extrabold text-stone-900 sm:text-4xl tracking-tight">
            كتالوج التحف والمقتنيات
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.3} yOffset={16}>
          <p className="mt-2 text-sm text-stone-600 max-w-2xl leading-relaxed">
            استكشف تفاصيل كل قطعة، أو استخدم الفلاتر للوصول إلى ما يلائم ذوقك ومناسبتك بدقة.
          </p>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.35} yOffset={20}>
        <div className="mb-10">
          <Suspense fallback={<div className="h-32 rounded-2xl bg-stone-200/60 animate-pulse" />}>
            <ProductFilters />
          </Suspense>
        </div>
      </ScrollReveal>

      {filteredProducts.length > 0 ? (
        <div>
          <ScrollReveal delay={0.4} yOffset={12}>
            <div className="mb-6 flex items-center justify-between border-b border-stone-200/60 pb-3 text-xs text-stone-500">
              <span>
                تم العثور على <strong className="text-stone-900 font-semibold">{filteredProducts.length}</strong> قطعة مقتناة
              </span>
              {selectedCategory && selectedCategory !== "الكل" && (
                <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-[11px] font-medium text-amber-800 border border-amber-200/60">
                  {selectedCategory}
                </span>
              )}
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product, index) => (
              <ScrollReveal 
                key={product.id} 
                delay={0.1 + (index % 6) * 0.08} 
                duration={0.55} 
                yOffset={24}
                className="h-full"
              >
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      ) : (
        <ScrollReveal delay={0.2} yOffset={20}>
          <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-stone-300/80 bg-white/60 p-16 text-center shadow-xs">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-stone-100 text-stone-400 mb-4">
              <PackageOpen className="h-8 w-8 text-stone-500" />
            </div>
            <h3 className="text-lg font-bold text-stone-800">لا توجد قطع مطابقة لخيارات البحث</h3>
            <p className="mt-1.5 text-xs text-stone-500 max-w-sm leading-relaxed">
              جرب اختيار تصنيف آخر، أو مسح نص البحث لإعادة استعراض كامل المجموعة الفنية.
            </p>
          </div>
        </ScrollReveal>
      )}
    </div>
  );
}