import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  area?: string;
  message?: string;
  contactMethod?: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();

  // Required fields per spec: Name, Email, Area, Contact method.
  if (!name || !email || !body.area || !body.contactMethod) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 }
    );
  }

  const fields: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Phone", body.phone?.trim() || "—"],
    ["Area of legal matter", body.area],
    ["Preferred contact", body.contactMethod],
    ["Message", body.message?.trim() || "—"],
  ];

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONSULTATION_TO_EMAIL;
  const from = process.env.CONSULTATION_FROM_EMAIL;

  // Graceful fallback: with no key configured the form still succeeds so the
  // page can be demoed; the lead is logged server-side instead of emailed.
  if (!apiKey || !to || !from) {
    console.info("[consultation] (email not configured) New request:", fields);
    return NextResponse.json({ ok: true, delivered: false });
  }

  const html = `
    <div style="font-family:Arial,sans-serif;color:#2E1A2E">
      <h2 style="font-weight:normal">New consultation request</h2>
      <table cellpadding="6" style="border-collapse:collapse">
        ${fields
          .map(
            ([k, v]) =>
              `<tr><td style="vertical-align:top;color:#6B4765"><strong>${k}</strong></td><td>${escapeHtml(
                v
              ).replace(/\n/g, "<br/>")}</td></tr>`
          )
          .join("")}
      </table>
    </div>`;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: `AMJ Law Consultations <${from}>`,
      to: [to],
      replyTo: email,
      subject: `New consultation request — ${name}`,
      html,
    });
    if (error) throw new Error(error.message);
    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[consultation] send failed:", err);
    return NextResponse.json(
      { error: "Failed to send. Please try again." },
      { status: 502 }
    );
  }
}
