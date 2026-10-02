import { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { 
  Sparkles, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowLeft 
} from "lucide-react";

export const metadata: Metadata = {
  title: "تواصل معنا | Deco Touch",
  description: "نسعد باستقبال استفساراتكم وحجوزاتكم للقطع الفنية وهدايا المناسبات الخاصة.",
};

export default function ContactPage() {
  const whatsappUrl = "https://wa.me/?text=مرحباً،%20أود%20الاستفسار%20عن%20خدمات%20وحجوزات%20Deco%20Touch";

  return (
    <div className="relative mx-auto max-w-7xl px-6 py-14 sm:px-8 overflow-hidden">
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-10 -left-20 h-72 w-72 rounded-full bg-amber-100/50 blur-3xl -z-10" 
      />

      <div className="max-w-2xl">
        <ScrollReveal delay={0.1} yOffset={14}>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-800 tracking-wider uppercase mb-2">
            <Sparkles className="h-3.5 w-3.5 text-amber-600 animate-pulse" />
            <span>خدمة العملاء والاستشارات الفنية</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2} yOffset={16}>
          <h1 className="text-3xl font-extrabold text-stone-900 sm:text-4xl tracking-tight">
            نسعد بمشاركتكم تفاصيل هداياكم
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.3} yOffset={16}>
          <p className="mt-3 text-sm leading-relaxed text-stone-600 sm:text-base">
            سواء كنت تبحث عن تحفة بمواصفات معينة لمساحتك، أو ترغب بتجهيز باقة هدايا لمناسبة زفاف أو تكريم، فريقنا مستعد لمساعدتك في كل خطوة.
          </p>
        </ScrollReveal>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5 space-y-6">
          <ScrollReveal delay={0.35} yOffset={20}>
            <div className="relative overflow-hidden rounded-3xl border border-emerald-200/90 bg-emerald-50/60 p-7 text-stone-900 shadow-xs backdrop-blur-xs transition-all duration-300 hover:shadow-md">
              <div className="flex items-center gap-3.5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-md shadow-emerald-600/20">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-stone-900">محادثة واتساب فورية</h2>
                  <p className="text-xs text-stone-600 font-medium">الرد السريع خلال ساعات العمل</p>
                </div>
              </div>

              <p className="mt-4 text-xs leading-relaxed text-stone-600">
                للاستفسارات العاجلة، التحقق من توفر قطعة في المعرض، أو إرسال صور لأفكار مخصصة ترغب بتنفيذها.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-600 py-3.5 text-xs font-bold text-white shadow-sm transition-all duration-200 hover:bg-emerald-700 hover:shadow-md active:scale-[0.99]"
              >
                <span>بدء المحادثة الآن</span>
                <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.45} yOffset={20}>
            <div className="rounded-3xl border border-stone-200/80 bg-white/90 p-7 space-y-6 text-xs text-stone-600 shadow-xs backdrop-blur-xs">
              
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-stone-100 text-stone-700">
                  <MapPin className="h-4 w-4 text-amber-800" />
                </div>
                <div>
                  <span className="font-semibold text-stone-900 text-sm block">عنوان صالة العرض</span>
                  <p className="mt-1 leading-relaxed">شارع التحلية، حي الأندلس، الرياض، المملكة العربية السعودية</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-stone-100 text-stone-700">
                  <Clock className="h-4 w-4 text-amber-800" />
                </div>
                <div>
                  <span className="font-semibold text-stone-900 text-sm block">ساعات العمل والاستقبال</span>
                  <p className="mt-1">السبت - الخميس: 10:00 صباحاً - 10:00 مساءً</p>
                  <p className="mt-0.5">الجمعة: 4:00 عصراً - 10:00 مساءً</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-stone-100 text-stone-700">
                  <Mail className="h-4 w-4 text-amber-800" />
                </div>
                <div>
                  <span className="font-semibold text-stone-900 text-sm block">البريد الإلكتروني</span>
                  <p className="mt-1 font-mono text-stone-800" dir="ltr">support@decotouch.art</p>
                </div>
              </div>

            </div>
          </ScrollReveal>

        </div>

        <div className="lg:col-span-7">
          <ScrollReveal delay={0.4} yOffset={24}>
            <ContactForm />
          </ScrollReveal>
        </div>

      </div>
    </div>
  );
}