import Image from "next/image";
import logo from "@/data/logo.json";

// Logo asli (hanya di-crop dari ruang kosong). Ganti file di public/images/brand/ untuk memperbarui.
export default function Logo({ className = "h-9 w-auto", priority = false }: { className?: string; priority?: boolean }) {
  return <Image src="/images/brand/logo.png" alt="" width={logo.w} height={logo.h} className={className} priority={priority} />;
}
