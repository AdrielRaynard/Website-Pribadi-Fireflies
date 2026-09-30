"use client";
import { useState, type FormEvent } from "react";
import { services, waLink } from "@/data/site";
import { submitLead } from "@/lib/submitLead";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const d = new FormData(form);
    const get = (k: string) => String(d.get(k) ?? "").trim();
    setStatus("sending");
    try {
      await submitLead({ name: get("name"), email: get("email"), type: get("type"), budget: get("budget"), message: get("message") });
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="card space-y-5 p-6 sm:p-8" aria-describedby="form-status">
      <div>
        <label htmlFor="name" className="text-sm font-semibold">Nama</label>
        <input id="name" name="name" required autoComplete="name" className="field" />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-semibold">Email</label>
        <input id="email" name="email" type="email" required autoComplete="email" className="field" />
      </div>
      <div>
        <label htmlFor="type" className="text-sm font-semibold">Jenis website</label>
        <select id="type" name="type" required defaultValue="" className="field">
          <option value="" disabled>Pilih jenis website</option>
          {services.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
          <option value="Belum yakin">Belum yakin, ingin berdiskusi</option>
        </select>
      </div>
      <div>
        <label htmlFor="budget" className="text-sm font-semibold">Budget <span className="font-normal text-ink/60">(opsional)</span></label>
        <input id="budget" name="budget" className="field" placeholder="Kisaran anggaran, jika sudah ada" />
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-semibold">Deskripsi kebutuhan</label>
        <textarea id="message" name="message" required rows={5} className="field" placeholder="Ceritakan tujuan website, target pengunjung, dan referensi yang Anda suka." />
      </div>
      <button type="submit" disabled={status === "sending"} className="btn btn-primary w-full disabled:opacity-60">
        {status === "sending" ? "Mengirim..." : "Kirim Permintaan"}
      </button>
      <div id="form-status" aria-live="polite">
        {status === "success" && (
          <p role="status" className="rounded-xl border border-ink/15 bg-ink/5 p-4 text-sm">
            Terima kasih, permintaan Anda sudah diterima. Untuk respons lebih cepat, Anda juga bisa{" "}
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="font-semibold text-accent underline">chat via WhatsApp</a>.
          </p>
        )}
        {status === "error" && (
          <p role="alert" className="rounded-xl border border-accent/40 bg-accent/5 p-4 text-sm text-accent">
            Permintaan belum terkirim. Periksa koneksi Anda lalu coba lagi, atau hubungi lewat WhatsApp.
          </p>
        )}
      </div>
    </form>
  );
}
