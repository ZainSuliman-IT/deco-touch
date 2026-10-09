"use client";

import { useState } from "react";
import { Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "طلب قطعة خاصة",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "تعذر إرسال الرسالة، يرجى المحاولة لاحقاً.");
      }

      setIsSubmitted(true);
    } catch (err: unknown) {
  if (err instanceof Error) {
    setErrorMessage(err.message);
  } else {
    setErrorMessage("حدث خطأ غير متوقع أثناء إرسال الرسالة.");
  }
} finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      inquiryType: "طلب قطعة خاصة",
      message: "",
    });
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border border-stone-200 bg-white p-10 text-center shadow-xs">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 mb-4">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="text-xl font-bold text-stone-900">وصلتنا رسالتك بنجاح</h3>
        <p className="mt-2 text-sm text-stone-600 max-w-sm">
          شكراً لتواصلك معنا يا {formData.name}. تم إرسال تفاصيل طلبك إلى بريدنا وسيتواصل معك فريقنا في أقرب وقت.
        </p>
        <button
          onClick={handleReset}
          className="mt-6 text-xs font-semibold text-amber-800 hover:underline cursor-pointer"
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
      {errorMessage && (
        <div className="flex items-center gap-2 rounded-xl bg-red-50 p-4 text-xs font-medium text-red-700 border border-red-200">
          <AlertCircle className="h-4 w-4 shrink-0 text-red-500" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div>
        <label className="block text-xs font-semibold text-stone-700 mb-2">
          الاسم الكريم <span className="text-red-500">*</span>
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
            البريد الإلكتروني <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            required
            dir="ltr"
            placeholder="example@mail.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full text-right rounded-xl border border-stone-200 bg-stone-50/50 px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:border-amber-400 focus:bg-white focus:outline-hidden"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-2">
            رقم الهاتف أو الواتساب
          </label>
          <input
            type="tel"
            dir="ltr"
            placeholder="+963 995 000 000"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full text-right rounded-xl border border-stone-200 bg-stone-50/50 px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:border-amber-400 focus:bg-white focus:outline-hidden"
          />
        </div>
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

      <div>
        <label className="block text-xs font-semibold text-stone-700 mb-2">
          تفاصيل الرسالة أو فكرة الهدية <span className="text-red-500">*</span>
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
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-stone-900 py-3.5 text-sm font-semibold text-amber-100 shadow-sm transition hover:bg-stone-800 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin text-amber-200" />
            جاري إرسال الطلب...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            إرسال الطلب
          </>
        )}
      </button>
    </form>
  );
}