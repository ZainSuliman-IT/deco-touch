import { Product } from "@/types/product";

export const PRODUCTS: Product[] = [
  {
    id: "prod-01",
    slug: "kandy-fruity-body-splash-women",
    title: "سبلاش معطر للجسم كاندي (Kandy) – انتعاش الفواكه والحلوى",
    description: "امنحي بشرتك جرعة من الحيوية والانتعاش مع سبلاش الجسم كاندي (Kandy). تركيبة عطرية صيفية خفيفة تجمع بين نفحات الفواكه اللذيذة ولمسات الحلوى المنعشة لتدوم معكِ طوال اليوم، مثالية للاستخدام اليومي بعد الاستحمام أو أثناء النزهات الصيفية وأجواء الاسترخاء.",
    price: 185,
    currency: "SYP",
    category: "عطور و سبلاشات",
    images: [
      "/products/kandy.jpg"
    ],
    featured: true,
    isAvailable: true,
    dimensions: "30 × 10 سم",
    material: "خلاصات عطرية فواكهية وزيوت ترطيب خفيفة للبشرة.",
    tags: ["سبلاش", "معطر جسم", "كاندي", "عطور صيفية"],
  },

  {
    id: "prod-03",
    slug: "woven-rope-bathroom-organizer-tissue-box-set",
    title: "طقم منظمات وسلال حمام منسوجة مع غطاء علبة مناديل – لمسة ديكور ريفية عصرية",
    description: "ارتقِ بترتيب وأناقة حمامك أو طاولة الزينة مع هذا الطقم المنسوج الفاخر. يجمع الطقم بين المظهر البوهيمي الحديث والعملية العالية، حيث يتضمن علبة مناديل بتصميم أنيق مزينة بفيونكة قماشية وسلال تنظيم متعددة الاستخدامات لحفظ المناشف، أدوات العناية، أو الإكسسوارات الصغيرة. يضفي إحساساً بالترتيب والدفء على أي ركن يوضع فيه.",
    price: 290,
    currency: "SYP",
    category: "ديكور منزلي",
    images: [
      "/products/woven-rope-bathroom-organizer.jpg"
    ],
    featured: true,
    isAvailable: true,
    dimensions: "45 × 25 سم",
    material: "حبال قطنية منسوجة سميكة (Braided Cotton Rope) بلون رمادي داكن أو فحم متين يمنح متانة وملمساً طبيعياً.",
    tags: ["طقم منظمات", "سلال حمام", "ديكور حمامات", "سلال قماش"],
  },
  {
    id: "prod-04",
    slug: "cute-puppy-crown-silicone-night-light",
    title: "مصباح ليلي مكتبي",
    description: "أضف لمسة من الدفء والبهجة لغرفة نومك أو غرفة طفلك مع هذا المصباح الليلي المبتكر. يتميز بإضاءة ناعمة ومريحة للعين تساعد على الاسترخاء والنوم الهادئ، مع تصميم مجسم أنيق على شكل جرو كرتوني لطيف يعلوه تاج أصفر وقاعدة باللون السماوي الجذاب. خيار رائع كديكور لطيف لطاولة السرير وجانباً أساسياً في روتين النوم.",
    price: 145,
    currency: "SYP",
    category: "إضاءة وشموع",
    images: [
      "/products/cute-puppy.jpg"
    ],
    featured: false,
    isAvailable: true,
    dimensions: "",
    material: "سيليكون غذائي مرن ومقاوم للصدمات (BPA-Free Soft Silicone) أو بلاستيك ABS",
    tags: ["مصباح ليلي", "ديكور غرف نوم", "إضاءة مكتبية", "هدايا أطفال"],
  },

  {
    id: "prod-07",
    slug: "lor-perfume",
    title: "عطر لور",
    description: "عطر أنيق يعكس الروح الفنية والأنوثة. مكون من مزيج من العطور الطبيعية التي تخلق شعوراً بالراحة والجمال.",
    price: 210,
    currency: "SYP",
    category: "عطور و سبلاشات",
    images: [
      "/products/perfume-1.jpg"
    ],
    featured: false,
    isAvailable: true,
    dimensions: "28 × 15 سم",
    material: "عطورات فرنسية فاخرة",
    tags: ["عطور", "سبلاشات", "أنوثة", "فن"],
  },

  {
    id: "prod-08",
    slug: "sol-splash",
    title: "عطر سول",
    description: "عطر أنيق يعكس الروح الفنية والأنوثة. مكون من مزيج من العطور الطبيعية التي تخلق شعوراً بالراحة والجمال.",
    price: 210,
    currency: "SYP",
    category: "عطور و سبلاشات",
    images: [
      "/products/sol.jpg"
    ],
    featured: false,
    isAvailable: true,
    dimensions: "28 × 15 سم",
    material: "عطورات فرنسية فاخرة",
    tags: ["عطور", "سبلاشات", "أنوثة", "فن"],
  },

  {
    id: "prod-09",
    slug: "silicon-bottle",
    title: "عبوة ماء قابلة للانضغاط",
    description: "عطر أنيق يعكس الروح الفنية والأنوثة. مكون من مزيج من العطور الطبيعية التي تخلق شعوراً بالراحة والجمال.",
    price: 210,
    currency: "SYP",
    category: "ديكور منزلي",
    images: [
      "/products/silicon.jpg"
    ],
    featured: false,
    isAvailable: true,
    dimensions: "28 × 15 سم",
    material: "سيلكون و بلاستيك",
    tags: ["عطور", "سبلاشات", "أنوثة", "فن"],
  },

  {
    id: "prod-10",
    slug: "floria-summer-breeze-body-splash",
    title: "سبلاش معطر للجسم فلوريا (FLORIA) – لمسة أنثوية وانتعاش صيفي ساحر",
    description: "استمتعي بنسيم الصيف المنعش مع معطر الجسم فلوريا (FLORIA). تركيبة عطرية رقيقة تمزج بين عبير الزهور الناعمة والنفحات المنعشة لتمنح بشرتك إحساساً بالنقاء والحيوية يدوم طوال اليوم. خيارك المثالي بعد الاستحمام ولإطلالة يومية مفعمة بالأنوثة والجاذبية.   ",
    price: 185,
    currency: "SYP",
    category: "عطور و سبلاشات",
    images: [
      "/products/floria.jpg"
    ],
    featured: true,
    isAvailable: true,
    dimensions: "30 × 10 سم",
    material: "معززة بزيوت عطرية زهرية ومنعشة ومواد مرطبة للبشرة مثل الجلسرين.",
    tags: ["سبلاش", "معطر جسم", "فلوريا", "عطور صيفية"],
  },

  {
    id: "prod-11",
    slug: "lor-imperial-luxury-summer-perfume-men",
    title: "عطر لور إمبريال (L'OR Impérial) للرجال – فخامة صيفية بلمسة ملكية ذهبية",
    description: "تجسيد حقيقي للفخامة والجاذبية في قارورة استثنائية. يجمع عطر لور إمبريال (L'OR Impérial) بين الانتعاش الصيفي الراقي وعمق الروائح الخشبية والشرقية المتوازنة ليمنحك حضوراً واثقاً وأناقة لا تُنسى طوال اليوم. خيار النخبة للإطلالات الصيفية المميزة والمناسبات الخاصة.",
    price: 185,
    currency: "SYP",
    category: "عطور و سبلاشات",
    images: [
      "/products/lor-imperial.jpg"
    ],
    featured: true,
    isAvailable: true,
    dimensions: "20 × 15 سم",
    material: "زجاج ثقيل مصنفر عالي الجودة (Heavy Frosted Crystal Glass) يمنح ملمساً مخملياً فخماً ويعكس درجات السائل الذهبي بداخله.",
    tags: ["عطور رجالية", "perfume", "lor imperial", "عطور صيفية"],
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