export type LeadPayload = { name: string; email: string; type: string; budget: string; message: string };

/**
 * MOCK handler. Ganti isi fungsi ini dengan request ke backend Anda, contoh:
 *   const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
 *   if (!res.ok) throw new Error("Gagal mengirim");
 */
export async function submitLead(payload: LeadPayload): Promise<void> {
  void payload;
  await new Promise((resolve) => setTimeout(resolve, 700));
}
