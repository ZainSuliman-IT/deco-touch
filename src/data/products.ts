import { Product } from "@/types/product";

export const PRODUCTS: Product[] = [
  {
    id: "prod-01",
    slug: "classic-ceramic-vase",
    title: "مزهرية سيراميك كلاسيكية باللون الرملي",
    description: "مزهرية مصنوعة يدوياً من الفخار الطبيعي المعالج، بلمسة نهائية مطفية ولون ترابي يضفي دفئاً وهدوءاً على زوايا منزلك ومكاتب العمل.",
    price: 185,
    currency: "SYP",
    category: "عطور و سبلاشات",
    images: [
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: true,
    isAvailable: true,
    dimensions: "32 × 18 سم",
    material: "فخار طبيعي مصقول",
    tags: ["يدوي", "ديكور هادئ", "مزهريات", "هدية منزل جديد"],
  },

  {
    id: "prod-02",
    slug: "antique-brass-clock",
    title: "ساعة مكتبية أنتيك من النحاس المعتق",
    description: "قطعة أنتيك مستوحاة من التصاميم الفيكتورية، بقاعدة نحاسية ثقيلة وعقارب كلاسيكية دقيقة، مناسبة للمكاتب الفاخرة وغرف القراءة.",
    price: 340,
    currency: "SYP",
    category: "تحف وانتيك",
    images: [
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: true,
    isAvailable: true,
    dimensions: "22 × 14 سم",
    material: "نحاس خام معتق",
    tags: ["أنتيك", "كلاسيك", "فاخر", "هدية مكتبية"],
  },
  {
    id: "prod-03",
    slug: "marble-wooden-serving-tray",
    title: "صينية ضيافة من رخام وخشب الجوز",
    description: "تحفة مدمجة تجمع صلابة الرخام الطبيعي مع فخامة خشب الجوز الداكن ومقابض نحاسية متينة. صممت لتكون قطعة مركزية على طاولة القهوة.",
    price: 290,
    currency: "SYP",
    category: "ديكور منزلي",
    images: [
      "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: true,
    isAvailable: true,
    dimensions: "45 × 25 سم",
    material: "رخام طبيعي + خشب جوز",
    tags: ["رخام", "ضيافة", "أناقة", "هدية زفاف"],
  },
  {
    id: "prod-04",
    slug: "scented-soy-candle-set",
    title: "طقم شموع الصويا العطرية في أوانٍ فخارية",
    description: "مجموعة من ثلاث شموع صويا طبيعية 100% بروائح العود، الفانيليا المدخنة، وزهر البرتقال. مصبوبة داخل أوعية فخارية يمكن إعادة استخدامها كتحف.",
    price: 145,
    currency: "SYP",
    category: "إضاءة وشموع",
    images: [
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: false,
    isAvailable: true,
    dimensions: "8 × 7 سم (لكل شمعة)",
    material: "شمع صويا طبيعي + فخار",
    tags: ["شموع", "عطور", "استرخاء", "هدية راقية"],
  },
  {
    id: "prod-05",
    slug: "abstract-sculpture-stone",
    title: "مجسم فني تجريدي منحوت من الحجر الجيري",
    description: "تمثال فني يعبر عن التوازن والانسجام بخطوط انسيابية ناعمة. قطعة فنية استثنائية تناسب محبي الفن المعاصر والديكور المينيمالي.",
    price: 420,
    currency: "SYP",
    category: "تحف وانتيك",
    images: [
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: true,
    isAvailable: false,
    dimensions: "38 × 16 سم",
    material: "حجر جيري طبيعي",
    tags: ["فن معاصر", "مجسمات", "تجريدي", "مينيماليزم"],
  },
  {
    id: "prod-06",
    slug: "geometric-brass-lantern",
    title: "فانوس هندسي زجاجي بحواف نحاسية",
    description: "فانوس أنيق بزوايا هندسية مستوحاة من العمارة الأندلسية، مصمم لاحتضان الشموع أو إضاءات الـ LED لتوفير إضاءة خافتة ودافئة.",
    price: 210,
    currency: "SYP",
    category: "إضاءة وشموع",
    images: [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: false,
    isAvailable: true,
    dimensions: "28 × 15 سم",
    material: "زجاج مقسّى ونحاس مذهب",
    tags: ["إضاءة", "فوانيس", "هندسي", "رمضانيات"],
  },
];

export async function getAllProducts(): Promise<Product[]> {
  return PRODUCTS;
}

export async function getFeaturedProducts(): Promise<Product[]> {
  return PRODUCTS.filter((p) => p.featured);
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  return PRODUCTS.find((p) => p.slug === slug);
}