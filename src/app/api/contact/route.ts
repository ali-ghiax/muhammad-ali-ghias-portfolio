import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(200),
  subject: z.string().trim().min(5).max(200),
  message: z.string().trim().min(10).max(5000),
});

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 503 }
      );
    }

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
    const from =
      process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: [
        `New message from your portfolio contact form`,
        ``,
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        ``,
        `Message:`,
        message,
      ].join("\n"),
      html: `
        <div style="font-family: system-ui, sans-serif; line-height: 1.5; color: #111;">
          <h2 style="margin: 0 0 16px;">New portfolio message</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
          <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
          <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 20px 0;" />
          <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again." },
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

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
