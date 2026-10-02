import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import { MessageCircle, ArrowLeft } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const whatsappMessage = encodeURIComponent(
    `مرحباً، أود الاستفسار عن تفاصيل وحجز قطعة: "${product.title}" (السعر: ${product.price} ${product.currency})`
  );
  const whatsappUrl = `https://wa.me/?text=${whatsappMessage}`;

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-stone-200/70 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link href={`/products/${product.slug}`} className="relative aspect-4/3 w-full overflow-hidden bg-stone-100">
        <Image
          src={product.images[0]}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        
        <div className="absolute top-3 right-3 flex flex-wrap gap-1.5">
          <span className="rounded-full bg-stone-900/75 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-md">
            {product.category}
          </span>
        </div>

        {!product.isAvailable && (
          <div className="absolute inset-0 flex items-center justify-center bg-stone-950/40 backdrop-blur-[2px]">
            <span className="rounded-md bg-white/90 px-3 py-1.5 text-xs font-semibold text-stone-800 shadow">
              تم حجزها / غير متوفرة
            </span>
          </div>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex-1">
          <Link href={`/products/${product.slug}`}>
            <h3 className="line-clamp-1 text-base font-bold text-stone-900 transition hover:text-amber-800">
              {product.title}
            </h3>
          </Link>
          <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-stone-600">
            {product.description}
          </p>
        </div>

        {product.material && (
          <div className="mt-3 text-[11px] text-stone-600 font-medium">
            الخامة: <span className="text-stone-700">{product.material}</span>
          </div>
        )}

        <div className="mt-4 flex items-center justify-between border-t border-stone-100 pt-3">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-wider text-stone-600">القيمة المقدرة</span>
            <span className="text-lg font-bold text-stone-900">
              {product.price}{" "}
              <span className="text-xs font-normal text-stone-600">{product.currency}</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            {product.isAvailable && (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="استفسر أو احجز عبر واتساب"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 transition hover:bg-emerald-600 hover:text-white"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            )}
            <Link
              href={`/products/${product.slug}`}
              className="flex h-9 items-center gap-1 rounded-full bg-stone-100 px-3 text-xs font-medium text-stone-700 transition hover:bg-stone-900 hover:text-white"
            >
              <span>التفاصيل</span>
              <ArrowLeft className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}