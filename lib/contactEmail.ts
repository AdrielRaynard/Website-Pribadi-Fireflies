import { services, site } from "@/data/site";

/** Data yang dikirim customer lewat Contact Form (sudah dibersihkan). */
export type Lead = { name: string; email: string; type: string; budget: string; message: string };

export const LIMITS = { name: 100, email: 254, budget: 100, message: 5000 } as const;

/**
 * Pilihan "Jenis website" yang valid. Diambil dari data/site.ts (sumber yang sama
 * dengan dropdown di ContactForm) + opsi "Belum yakin" yang ada di form.
 */
const ALLOWED_TYPES: readonly string[] = [...services.map((s) => s.title), "Belum yakin"];

const EMAIL_RE = /^[^\s@<>"',;:()\\]+@[^\s@<>"',;:()\\]+\.[^\s@<>"',;:()\\]{2,}$/;

// Karakter kontrol (kecuali \n dan \t) dibuang agar tidak bisa dipakai untuk memanipulasi email.
// eslint-disable-next-line no-control-regex
const CONTROL_CHARS = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g;

const oneLine = (v: string) => v.replace(CONTROL_CHARS, "").replace(/\s+/g, " ").trim();
const multiLine = (v: string) => v.replace(/\r\n?/g, "\n").replace(CONTROL_CHARS, "").trim();
const asString = (v: unknown) => (typeof v === "string" ? v : "");

export type ValidationResult = { ok: true; lead: Lead } | { ok: false; error: string };

/** Validasi di sisi server. Jangan hanya mengandalkan validasi HTML di browser. */
export function validateLead(raw: unknown): ValidationResult {
  if (typeof raw !== "object" || raw === null) return { ok: false, error: "Data yang dikirim tidak valid." };
  const input = raw as Record<string, unknown>;

  const lead: Lead = {
    name: oneLine(asString(input.name)),
    email: oneLine(asString(input.email)),
    type: oneLine(asString(input.type)),
    budget: oneLine(asString(input.budget)),
    message: multiLine(asString(input.message)),
  };

  if (!lead.name) return { ok: false, error: "Nama wajib diisi." };
  if (lead.name.length > LIMITS.name) return { ok: false, error: `Nama terlalu panjang (maksimal ${LIMITS.name} karakter).` };

  if (!lead.email || lead.email.length > LIMITS.email || !EMAIL_RE.test(lead.email)) {
    return { ok: false, error: "Format email tidak valid. Periksa kembali alamat email Anda." };
  }

  if (!ALLOWED_TYPES.includes(lead.type)) return { ok: false, error: "Silakan pilih jenis website." };

  if (lead.budget.length > LIMITS.budget) return { ok: false, error: `Budget terlalu panjang (maksimal ${LIMITS.budget} karakter).` };

  if (!lead.message) return { ok: false, error: "Deskripsi kebutuhan wajib diisi." };
  if (lead.message.length > LIMITS.message) {
    return { ok: false, error: `Deskripsi kebutuhan terlalu panjang (maksimal ${LIMITS.message.toLocaleString("id-ID")} karakter).` };
  }

  return { ok: true, lead };
}

const escapeHtml = (v: string) =>
  v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

function formatReceivedAt(date: Date): string {
  const formatted = new Intl.DateTimeFormat("id-ID", { dateStyle: "full", timeStyle: "short", timeZone: "Asia/Jakarta" }).format(date);
  return `${formatted} WIB`;
}

/** Membuat subject, versi HTML, dan versi teks polos dari email inquiry untuk owner. */
export function buildInquiryEmail(lead: Lead, receivedAt: Date = new Date()): { subject: string; html: string; text: string } {
  const subject = `New Website Inquiry - ${lead.name}`;
  const when = formatReceivedAt(receivedAt);
  const budget = lead.budget || "Tidak diisi";

  const rows: { label: string; html: string }[] = [
    { label: "Nama", html: escapeHtml(lead.name) },
    { label: "Email", html: `<a href="mailto:${escapeHtml(lead.email)}" style="color:#b4361f">${escapeHtml(lead.email)}</a>` },
    { label: "Jenis website", html: escapeHtml(lead.type) },
    { label: "Budget", html: escapeHtml(budget) },
    { label: "Deskripsi kebutuhan", html: `<div style="white-space:pre-wrap">${escapeHtml(lead.message)}</div>` },
  ];

  const rowsHtml = rows
    .map(
      (r) => `<tr>
  <td style="padding:12px 16px 12px 0;width:150px;vertical-align:top;border-bottom:1px solid #e6e2dc;font-size:13px;color:#6b6660">${r.label}</td>
  <td style="padding:12px 0;vertical-align:top;border-bottom:1px solid #e6e2dc;font-size:15px;line-height:1.5">${r.html}</td>
</tr>`,
    )
    .join("\n");

  const html = `<!doctype html>
<html lang="id">
<body style="margin:0;padding:24px;background:#f6f4f1;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1a1a1a">
  <div style="max-width:620px;margin:0 auto;background:#ffffff;border-radius:12px;padding:28px 32px">
    <h1 style="margin:0 0 4px;font-size:20px">New Website Inquiry</h1>
    <p style="margin:0 0 20px;font-size:13px;color:#6b6660">Diterima ${escapeHtml(when)} lewat formulir kontak ${escapeHtml(site.name)}.</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse">
${rowsHtml}
    </table>
    <p style="margin:20px 0 0;font-size:13px;color:#6b6660">Tekan <strong>Reply</strong> pada email ini untuk langsung membalas ke ${escapeHtml(lead.email)}.</p>
  </div>
</body>
</html>`;

  const text = [
    "NEW WEBSITE INQUIRY",
    `Diterima ${when} lewat formulir kontak ${site.name}.`,
    "",
    `Nama          : ${lead.name}`,
    `Email         : ${lead.email}`,
    `Jenis website : ${lead.type}`,
    `Budget        : ${budget}`,
    "",
    "Deskripsi kebutuhan:",
    lead.message,
    "",
    "---",
    `Balas email ini untuk langsung membalas ke ${lead.email}.`,
  ].join("\n");

  return { subject, html, text };
}
