import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/data/site";
import { buildInquiryEmail, validateLead } from "@/lib/contactEmail";

// Resend SDK butuh runtime Node.js, dan route ini tidak boleh di-cache.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_BODY_CHARS = 64_000;

// Pesan ke customer sengaja generik: detail teknis (dan apa pun yang sensitif) hanya masuk ke log server.
const SERVER_ERROR_MESSAGE =
  "Permintaan belum terkirim karena ada kendala di server kami. Silakan coba lagi beberapa saat lagi, atau hubungi kami lewat WhatsApp.";

const fail = (status: number, error: string) => NextResponse.json({ ok: false, error }, { status });

export async function POST(request: Request) {
  // 1. Baca & parse body
  let body: unknown;
  try {
    const raw = await request.text();
    if (raw.length > MAX_BODY_CHARS) return fail(413, "Data yang dikirim terlalu besar.");
    body = JSON.parse(raw);
  } catch {
    return fail(400, "Data yang dikirim tidak valid.");
  }

  // 2. Honeypot anti-spam: field tersembunyi yang tidak pernah diisi manusia.
  //    Bot dibuat "merasa berhasil" supaya tidak mencoba lagi, tapi email tidak dikirim.
  const honeypot = (body as { _gotcha?: unknown } | null)?._gotcha;
  if (typeof honeypot === "string" && honeypot.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  // 3. Validasi di server
  const result = validateLead(body);
  if (!result.ok) return fail(400, result.error);

  // 4. Konfigurasi (dari environment variable, tidak pernah hardcode)
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY belum diatur. Isi di .env.local (lokal) atau Environment Variables (hosting).");
    return fail(500, SERVER_ERROR_MESSAGE);
  }
  const to = process.env.CONTACT_TO_EMAIL?.trim() || site.email;
  const from = process.env.CONTACT_FROM_EMAIL?.trim() || `${site.name} Website <onboarding@resend.dev>`;

  // 5. Kirim email ke owner
  const { subject, html, text } = buildInquiryEmail(result.lead);
  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: result.lead.email, // owner tinggal klik Reply untuk membalas customer
      subject,
      html,
      text,
    });
    if (error) {
      console.error(`[contact] Resend menolak pengiriman email (${error.name}): ${error.message}`);
      return fail(502, SERVER_ERROR_MESSAGE);
    }
  } catch (err) {
    console.error("[contact] Gagal menghubungi Resend:", err instanceof Error ? err.message : "unknown error");
    return fail(502, SERVER_ERROR_MESSAGE);
  }

  return NextResponse.json({ ok: true });
}
