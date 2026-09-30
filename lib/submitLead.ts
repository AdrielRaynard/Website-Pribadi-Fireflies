export type LeadPayload = {
  name: string;
  email: string;
  type: string;
  budget: string;
  message: string;
  /** Honeypot anti-spam. Selalu kosong untuk pengunjung asli. */
  _gotcha?: string;
};

const NETWORK_ERROR_MESSAGE = "Permintaan belum terkirim. Periksa koneksi Anda lalu coba lagi, atau hubungi lewat WhatsApp.";

/**
 * Mengirim data Contact Form ke API route `/api/contact`, yang mengirim email ke owner
 * secara server-side. Melempar Error dengan pesan yang aman ditampilkan ke customer jika gagal.
 */
export async function submitLead(payload: LeadPayload): Promise<void> {
  let res: Response;
  try {
    res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch {
    throw new Error(NETWORK_ERROR_MESSAGE);
  }

  if (!res.ok) {
    let message = NETWORK_ERROR_MESSAGE;
    try {
      const data: unknown = await res.json();
      const serverMessage = (data as { error?: unknown } | null)?.error;
      if (typeof serverMessage === "string" && serverMessage) message = serverMessage;
    } catch {
      // body bukan JSON: pakai pesan default
    }
    throw new Error(message);
  }
}
