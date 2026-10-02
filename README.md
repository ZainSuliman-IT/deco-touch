# 🏺 Deco Touch | منصة تحف ومقتنيات وهدايا راقية

<p align="center">
  <b>كتالوج رقمي ومعرض إلكتروني فاخر مبني بأحدث معايير الويب ومعمارية Next.js App Router.</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/React_Compiler-Enabled-orange?style=for-the-badge" alt="React Compiler" />
</p>

---

## 📖 نظرة عامة (Overview)

**Deco Touch** هو متجر وكتالوج رقمي حديث مصمم خصيصاً لعرض التحف الفنية النادرة، الديكورات المنزلية، والمصنوعات اليدوية. تم بناء المشروع لتقديم تجربة تصفح بصرية سلسة وفائقة السرعة دون تعقيدات سلة المشتريات التقليدية، مع تحويل العميل مباشرة للتواصل والحجز السريع عبر WhatsApp ونماذج الاستفسار المخصصة.

تم تطوير المشروع ليكون نموذجاً تطبيقياً لأفضل الممارسات الهندسية (Best Practices) في بناء تطبيقات الواجهة الأمامية بالاعتماد على معمارية **Next.js App Router**.

---

## ✨ أبرز الميزات التقنية (Key Features)

* **⚡ أداء فائق وسرعة تحميل لحظية:** استغلال توليد الصفحات الثابتة مسبقاً (**SSG**) لصفحات المنتجات عبر `generateStaticParams`.
* **🔍 إدارة الفلاتر والبحث عبر الـ URL (`useSearchParams`):** فلترة فورية حسب التصنيف، التوفر، والنص مع مزامنة الفلاتر مباشرة في رابط الصفحة لسهولة المشاركة وتوافق أفضل مع محركات البحث.
* **🖼️ معرض صور تفاعلي (Interactive Gallery):** استعراض متعدد الزوايا لصور القطعة مع انتقال ناعم وتكبير دقيق، بالاعتماد على مكون `next/image` المحسن.
* **🤖 React Compiler Enabled:** تفعيل المترجم التلقائي للـ Memoization لرفع كفاءة استهلاك الموارد وتفادي إعادة التصيير غير الضرورية.
* **📱 تصميم متجاوب وهادئ (Luxury Minimalist UI):** لوحة ألوان دافئة مستوحاة من الحجر الطبيعي والفخار، متجاوبة بالكامل مع شاشات الهواتف والأجهزة اللوحية والمكتبية.
* **💬 تكامل واتساب المخصص (Dynamic WhatsApp CTA):** توليد روابط ورسائل حجز مجهزة مسبقاً تحمل اسم القطعة، سعرها، ومعرفها لطلب فوري.
* **🌐 تهيئة محركات البحث (Dynamic SEO & OpenGraph):** توليد تلقائي للبيانات الوصفية (Metadata) لكل تحفة على حدة لدعم مشاركة الروابط على منصات التواصل.
* **뼈 واجهات تحميل هيكلية (Loading Skeletons):** تجربة تصفح خالية من الوميض عبر ملفات `loading.tsx` المخصصة.

---

## 🛠️ البنية التقنية (Tech Stack)

* **الإطار الأساسي:** [Next.js](https://nextjs.org/) (App Router & Server Components)
* **المكتبة الأساسية:** [React](https://react.dev/) مع تفعيل **React Compiler**
* **لغة البرمجة:** [TypeScript](https://www.typescriptlang.org/) لضمان الأمان البرمجي الكامل للأنواع
* **التنسيق والأنماط:** [Tailwind CSS](https://tailwindcss.com/)
* **الأيقونات:** [Lucide React](https://lucide.dev/)
* **إدارة وتوحيد الأصناف:** `clsx` و `tailwind-merge`

---

## 📂 هيكلة المشروع (Project Architecture)

```text
src/
├── app/
│   ├── layout.tsx                # التخطيط العام وتضمين النافبار والفوتر
│   ├── page.tsx                  # الصفحة الرئيسية (Hero, Featured, Values)
│   ├── not-found.tsx             # صفحة الخطأ 404 المخصصة
│   ├── contact/
│   │   └── page.tsx              # صفحة التواصل ونموذج الاستفسار
│   └── products/
│       ├── page.tsx              # كتالوج المنتجات وتطبيق الفلاتر (Dynamic Server Page)
│       ├── loading.tsx           # هيكل التحميل الهيكلي (Catalog Skeleton)
│       └── [slug]/
│           ├── page.tsx          # تفاصيل القطعة (SSG + Dynamic Metadata)
│           └── loading.tsx       # هيكل تحميل صفحة التفاصيل
├── components/
│   ├── contact/
│   │   └── ContactForm.tsx       # نموذج التواصل التفاعلي
│   ├── layout/
│   │   ├── Navbar.tsx            # شريط التنقل المتجاوب
│   │   └── Footer.tsx            # التذييل وروابط الوصول السريع
│   └── products/
│       ├── ProductCard.tsx       # بطاقة عرض التحفة وأزرار التفاعل
│       ├── ProductFilters.tsx    # حقول البحث والتصنيفات
│       └── ProductGallery.tsx    # معرض الصور التفاعلي
├── data/
│   └── products.ts               # البيانات التجريبية ودوال الاستعلام
├── lib/
│   └── utils.ts                  # دالة دمج الفئات (cn helper)
└── types/
    └── product.ts                # واجهات ونماذج بيانات المنتجات (TypeScript Interfaces)