import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(200),
  subject: z.string().trim().min(5).max(200),
  message: z.string().trim().min(10).max(5000),
});

/**
 * Optional server proxy for the contact form.
 * Primary path is client → FormSubmit (no API key).
 * Kept so older clients hitting /api/contact still work.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Please check your form and try again." },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = parsed.data;
    const to =
      process.env.CONTACT_TO_EMAIL || "muhammadalighias@gmail.com";

    const res = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(to)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
          _subject: `[Portfolio] ${subject}`,
          _template: "table",
          _captcha: "false",
        }),
      }
    );

    const result = (await res.json().catch(() => null)) as {
      success?: string | boolean;
      message?: string;
    } | null;

    if (!res.ok || result?.success === "false" || result?.success === false) {
      console.error("FormSubmit error:", result);
      return NextResponse.json(
        { error: result?.message || "Failed to send message. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
