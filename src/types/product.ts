export type ProductCategory = 
  | "تحف وانتيك" 
  | "ديكور منزلي" 
  | "هدايا مناسبات" 
  | "عطور و سبلاشات"
  | "إضاءة وشموع";

export interface Product {
  id: string;
  slug: string;                 // معرف فريد للرابط URL (SEO Friendly)
  title: string;
  description: string;
  price: number;
  currency: string;
  category: ProductCategory;
  images: string[];             // روابط الصور
  featured?: boolean;           // لعرضها في الصفحة الرئيسية
  isAvailable: boolean;         // حالة التوفر
  dimensions?: string;          // أبعاد التحفة (مثل: 25x15 سم)
  material?: string;            // الخامة (رخام، نحاس، خشب جوز، فخار...)
  tags: string[];               // كلمات مفتاحية وفلاتر (فاخر، هدية زفاف، تراثي...)
}