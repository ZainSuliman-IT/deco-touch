import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, inquiryType, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "يرجى تعبئة الحقول الإجبارية (الاسم، البريد، وتفاصيل الرسالة)." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Deco Touch <onboarding@resend.dev>",
      to: [process.env.CONTACT_MY_EMAIL || "zainsuliman041@gmail.com"],
      subject: `📩 [${inquiryType}] استفسار جديد من: ${name}`,
      replyTo: email,
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif; padding: 24px; color: #292524; line-height: 1.6; background-color: #fafaf9;">
          <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e7e5e4; padding: 24px;">
            <h2 style="color: #78350f; margin-top: 0; border-bottom: 2px solid #fef3c7; padding-bottom: 12px;">طلب استفسار جديد عبر الموقع</h2>
            <p><strong>نوع الطلب:</strong> <span style="background: #fef3c7; color: #92400e; padding: 2px 8px; border-radius: 6px;">${inquiryType}</span></p>
            <p><strong>اسم العميل:</strong> ${name}</p>
            <p><strong>البريد الإلكتروني:</strong> <a href="mailto:${email}" style="color: #b45309;">${email}</a></p>
            <p><strong>رقم الهاتف / واتساب:</strong> ${phone || "غير محدد"}</p>
            <hr style="border: none; border-top: 1px solid #f5f5f4; margin: 20px 0;" />
            <p><strong>تفاصيل الرسالة:</strong></p>
            <div style="background-color: #f5f5f4; padding: 16px; border-radius: 12px; color: #1c1917; font-size: 14px;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    return NextResponse.json(
      { error: "حدث خطأ غير متوقع أثناء إرسال الرسالة." },
      { status: 500 }
    );
  }
}