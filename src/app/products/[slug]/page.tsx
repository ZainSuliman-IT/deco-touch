import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { getAllProducts, getProductBySlug } from "@/data/products";
import ProductGallery from "@/components/products/ProductGallery";
import ProductCard from "@/components/products/ProductCard";
import { 
  ArrowRight, 
  MessageCircle, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  Layers, 
  Maximize2, 
  ShieldCheck, 
  Package 
} from "lucide-react";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      title: "القطعة غير موجودة | Deco Touch",
    };
  }

  return {
    title: `${product.title} | Deco Touch`,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      images: [{ url: product.images[0] }],
    },
  };
}

export default async function ProductDetailsPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const allProducts = await getAllProducts();
  const relatedProducts = allProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const whatsappMessage = encodeURIComponent(
    `مرحباً، أود حجز أو الاستفسار عن تفاصيل هذه القطعة:\n- الاسم: ${product.title}\n- الرمز: ${product.id}\n- السعر: ${product.price} ${product.currency}`
  );
  const whatsappUrl = `https://wa.me/?text=${whatsappMessage}`;

  return (
    <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8">
      {/*(Breadcrumb)*/}
      <nav className="mb-8 flex items-center gap-2 text-xs text-stone-500">
        <Link href="/" className="hover:text-stone-900 transition">الرئيسية</Link>
        <span>/</span>
        <Link href="/products" className="hover:text-stone-900 transition">الكتالوج</Link>
        <span>/</span>
        <span className="text-stone-800 font-medium truncate max-w-xs">{product.title}</span>
      </nav>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <ProductGallery images={product.images} title={product.title} />
        </div>

        <div className="flex flex-col justify-between">
          <div className="space-y-6">
            
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 border border-amber-200/80 px-3.5 py-1 text-xs font-semibold text-amber-900">
                <Sparkles className="h-3.5 w-3.5 text-amber-600" />
                {product.category}
              </span>

              {product.isAvailable ? (
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700">
                  <CheckCircle2 className="h-4 w-4" />
                  متاحة وجاهزة للإهداء
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-rose-700">
                  <XCircle className="h-4 w-4" />
                  محجوزة حالياً
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 leading-snug">
              {product.title}
            </h1>

            <div className="flex items-baseline gap-2 border-y border-stone-200/80 py-4">
              <span className="text-xs text-stone-500 font-medium">القيمة المقدرة:</span>
              <span className="text-3xl font-extrabold text-stone-900">
                {product.price}{" "}
                <span className="text-sm font-normal text-stone-600">{product.currency}</span>
              </span>
            </div>

            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">عن هذه التحفة</h2>
              <p className="text-sm leading-relaxed text-stone-700 sm:text-base">
                {product.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 rounded-2xl border border-stone-200/80 bg-white p-4 text-xs">
              {product.material && (
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-stone-100 text-stone-700">
                    <Layers className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-stone-500 block">الخامة المصنوعة</span>
                    <span className="font-semibold text-stone-900">{product.material}</span>
                  </div>
                </div>
              )}

              {product.dimensions && (
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-stone-100 text-stone-700">
                    <Maximize2 className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-stone-500 block">الأبعاد التقريبية</span>
                    <span className="font-semibold text-stone-900">{product.dimensions}</span>
                  </div>
                </div>
              )}
            </div>

            {product.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg bg-stone-100 px-2.5 py-1 text-[11px] font-medium text-stone-600"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="mt-8 space-y-4 pt-6 border-t border-stone-200/80">
            {product.isAvailable ? (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-3 rounded-2xl bg-emerald-600 py-4 text-base font-bold text-white shadow-md transition duration-200 hover:bg-emerald-700 hover:shadow-lg active:scale-[0.99]"
              >
                <MessageCircle className="h-5 w-5" />
                طلب وحجز القطعة عبر واتساب
              </a>
            ) : (
              <div className="rounded-2xl bg-stone-200 py-4 text-center text-sm font-semibold text-stone-600">
                هذه القطعة غير متاحة حالياً للحجز
              </div>
            )}

            <div className="flex items-center justify-center gap-6 text-[11px] text-stone-500">
              <span className="flex items-center gap-1.5">
                <Package className="h-3.5 w-3.5 text-stone-600" />
                تغليف هدايا مجاني فاخر
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-stone-600" />
                معاينة القطعة قبل الاستلام
              </span>
            </div>
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <section className="mt-24 border-t border-stone-200 pt-16">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider">مقتنيات أخرى</span>
              <h3 className="mt-1 text-xl sm:text-2xl font-bold text-stone-900">قطع تناسب نفس الذوق</h3>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-1 text-xs font-semibold text-amber-800 hover:text-amber-900"
            >
              عرض الكل
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}