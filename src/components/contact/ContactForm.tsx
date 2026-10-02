"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    inquiryType: "طلب قطعة خاصة",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border border-stone-200 bg-white p-10 text-center shadow-xs">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 mb-4">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="text-xl font-bold text-stone-900">وصلتنا رسالتك بنجاح</h3>
        <p className="mt-2 text-sm text-stone-600 max-w-sm">
          شكراً لتواصلك معنا يا {formData.name}. سيتواصل معك فريق الاستشارات الفنية في أقرب وقت.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-6 text-xs font-semibold text-amber-800 hover:underline"
        >
          إرسال استفسار آخر
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-3xl border border-stone-200/80 bg-white p-8 shadow-xs"
    >
      <div>
        <label className="block text-xs font-semibold text-stone-700 mb-2">
          الاسم الكريم
        </label>
        <input
          type="text"
          required
          placeholder="مثال: عبد الله الأحمد"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full rounded-xl border border-stone-200 bg-stone-50/50 px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:border-amber-400 focus:bg-white focus:outline-hidden"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-2">
            رقم الهاتف أو الواتساب
          </label>
          <input
            type="tel"
            required
            dir="ltr"
            placeholder="+966 50 000 0000"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full text-right rounded-xl border border-stone-200 bg-stone-50/50 px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:border-amber-400 focus:bg-white focus:outline-hidden"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-2">
            نوع الطلب أو الاستفسار
          </label>
          <select
            value={formData.inquiryType}
            onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
            className="w-full rounded-xl border border-stone-200 bg-stone-50/50 px-4 py-3 text-sm text-stone-900 focus:border-amber-400 focus:bg-white focus:outline-hidden"
          >
            <option value="طلب قطعة خاصة">تصميم أو حجز قطعة خاصة</option>
            <option value="تجهيز هدايا مناسبات">تجهيز هدايا زفاف أو مناسبات</option>
            <option value="استفسار عام">استفسار عام عن المعرض</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-stone-700 mb-2">
          تفاصيل الرسالة أو فكرة الهدية
        </label>
        <textarea
          rows={4}
          required
          placeholder="اكتب تفاصيل طلبك، الألوان أو الخامات المفضلة، أو تاريخ المناسبة..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full rounded-xl border border-stone-200 bg-stone-50/50 p-4 text-sm text-stone-900 placeholder:text-stone-400 focus:border-amber-400 focus:bg-white focus:outline-hidden resize-none"
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-stone-900 py-3.5 text-sm font-semibold text-amber-100 shadow-sm transition hover:bg-stone-800 active:scale-[0.99]"
      >
        <Send className="h-4 w-4" />
        إرسال الطلب
      </button>
    </form>
  );
}