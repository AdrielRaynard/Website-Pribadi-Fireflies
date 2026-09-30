// Semua konten utama ada di file ini. Edit di sini, bukan di komponen.
export const site = {
  name: "Nama Anda", // TODO: ganti dengan nama/brand Anda
  title: "Independent Web Developer",
  url: "https://example.com", // TODO: ganti dengan domain asli
  description:
    "Jasa pembuatan website yang profesional, responsive, dan sesuai kebutuhan untuk bisnis, UMKM, profesional, agency, dan organisasi.",
  email: "halo@example.com", // TODO
  whatsapp: "6281234567890", // TODO: format internasional tanpa + atau spasi
  whatsappText: "Halo, saya ingin konsultasi pembuatan website.",
};
export const waLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappText)}`;

export const nav = [
  { href: "/", label: "Beranda" },
  { href: "/about", label: "Tentang" },
  { href: "/services", label: "Layanan" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Kontak" },
];

export type Service = { slug: string; icon: string; title: string; description: string };
export const services: Service[] = [
  { slug: "landing-page", icon: "landing", title: "Landing Page", description: "Website satu halaman untuk campaign, produk, jasa, personal brand, dan kebutuhan promosi." },
  { slug: "company-profile", icon: "company", title: "Company Profile", description: "Website profesional untuk bisnis yang membutuhkan online presence dan kredibilitas." },
  { slug: "portfolio", icon: "portfolio", title: "Portfolio", description: "Etalase karya untuk freelancer, designer, developer, fotografer, kreator, dan profesional." },
  { slug: "blog", icon: "blog", title: "Blog", description: "Website berbasis konten untuk personal brand, bisnis, media, dan kebutuhan SEO atau content marketing." },
  { slug: "event-agency", icon: "event", title: "Event / Agency", description: "Website untuk event organizer, creative agency, wedding organizer, dan bisnis sejenis." },
  { slug: "custom", icon: "custom", title: "Custom Website", description: "Kebutuhan Anda tidak masuk kategori di atas? Konsultasikan, lalu kita cari solusi yang paling pas." },
];

export const why = [
  { title: "Responsive", desc: "Nyaman digunakan di mobile, tablet, maupun desktop." },
  { title: "Performance", desc: "Dibangun dengan perhatian pada kecepatan loading dan efisiensi." },
  { title: "SEO Friendly", desc: "Struktur HTML dan metadata yang mendukung SEO dasar." },
  { title: "Clean Development", desc: "Struktur kode dibuat agar mudah dirawat dan dikembangkan." },
  { title: "Custom Solution", desc: "Disesuaikan dengan kebutuhan Anda, bukan sekadar template generik." },
  { title: "Post-Launch Support", desc: "Dukungan setelah website selesai, sesuai ketentuan project." },
];

export type Project = {
  slug: string; name: string; category: string; description: string;
  stack: string[]; colors: [string, string]; url?: string; // isi url jika demo sudah online
};
export const projects: Project[] = [
  { slug: "kopi-senja", name: "Kopi Senja", category: "Coffee Shop / Landing Page", description: "Landing page untuk kedai kopi lokal: menu, lokasi, jam buka, dan tombol pesan lewat WhatsApp.", stack: ["Next.js", "Tailwind CSS"], colors: ["#3b2a20", "#c8814a"] },
  { slug: "arunika-creative", name: "Arunika Creative", category: "Creative Agency / Company Profile", description: "Company profile untuk agensi kreatif: layanan, studi kasus, tim, dan formulir kontak.", stack: ["Next.js", "TypeScript", "Tailwind CSS"], colors: ["#15294d", "#8e1b2b"] },
  { slug: "lumora-studio", name: "Lumora Studio", category: "Personal Portfolio", description: "Portfolio personal untuk fotografer: galeri karya, tentang, dan ajakan untuk memesan sesi.", stack: ["React", "Tailwind CSS"], colors: ["#2b2f42", "#9aa5d1"] },
];

export const process = [
  { title: "Consultation", desc: "Diskusi kebutuhan dan tujuan website." },
  { title: "Requirement", desc: "Pengumpulan konten, informasi, dan kebutuhan fitur." },
  { title: "Design & Development", desc: "Proses desain dan pembangunan website." },
  { title: "Review & Testing", desc: "Review bersama, revisi sesuai scope, dan testing." },
  { title: "Deployment", desc: "Website dipublish dan siap digunakan." },
];

export const approach = [
  { title: "Understand", desc: "Memahami bisnis, audiens, dan tujuan sebelum menyentuh kode." },
  { title: "Plan", desc: "Menyusun struktur halaman, konten, dan fitur yang benar-benar dibutuhkan." },
  { title: "Build", desc: "Membangun dengan HTML semantik, komponen reusable, dan kode yang rapi." },
  { title: "Test", desc: "Menguji di berbagai ukuran layar, browser, dan navigasi keyboard." },
  { title: "Improve", desc: "Menyempurnakan berdasarkan masukan, lalu siap dikembangkan lebih lanjut." },
];

export const techGroups = [
  { title: "Frontend", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"] },
  { title: "Backend", items: ["PHP", "Laravel", "Node.js"] },
  { title: "Database", items: ["MySQL", "PostgreSQL", "SQLite", "MongoDB"] },
  { title: "UI", items: ["Tailwind CSS", "Bootstrap"] },
  { title: "Integration", items: ["REST API", "Payment Gateway", "WhatsApp API", "AI/API integration"] },
];

export const faqs = [
  { q: "Berapa lama pembuatan website?", a: "Estimasi disesuaikan dengan scope dan kompleksitas project. Setelah konsultasi awal, saya akan memberikan perkiraan waktu yang jelas." },
  { q: "Apakah bisa request desain?", a: "Bisa. Anda dapat membawa referensi atau brand guideline sendiri, atau saya bantu merancang tampilan yang sesuai dengan identitas bisnis Anda." },
  { q: "Apakah domain dan hosting termasuk?", a: "Hal ini dibahas di awal. Domain dan hosting bisa Anda siapkan sendiri atau dibantu sesuai kesepakatan project." },
  { q: "Apakah website responsive?", a: "Ya. Setiap website dirancang agar nyaman digunakan di mobile, tablet, dan desktop." },
  { q: "Apakah bisa revisi?", a: "Bisa. Revisi dilakukan pada tahap review sesuai scope yang disepakati di awal." },
  { q: "Apakah ada maintenance?", a: "Tersedia dukungan setelah website selesai sesuai ketentuan project. Detailnya dibahas sebelum project dimulai." },
  { q: "Bagaimana proses pembayaran?", a: "Skema pembayaran disepakati sebelum project dimulai, menyesuaikan scope dan tahapan pengerjaan." },
  { q: "Apakah bisa request fitur custom?", a: "Bisa. Ceritakan kebutuhannya, lalu kita lihat solusi dan estimasinya bersama. Estimasi disesuaikan dengan scope dan kompleksitas project." },
];
