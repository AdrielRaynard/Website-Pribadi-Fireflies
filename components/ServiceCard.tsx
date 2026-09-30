import Link from "next/link";
import { Icon } from "./ui";
import type { Service } from "@/data/site";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <li className="reveal group grid items-center gap-4 py-7 md:grid-cols-[auto_1fr_1.5fr_auto] md:gap-8">
      <span className="grid h-12 w-12 place-items-center rounded-xl border border-ink/15 text-accent transition group-hover:border-accent group-hover:bg-accent group-hover:text-white">
        <Icon name={service.icon} />
      </span>
      <h3 className="font-display text-2xl">{service.title}</h3>
      <p className="max-w-md text-ink/70">{service.description}</p>
      <Link href="/contact" className="inline-flex min-h-11 items-center text-sm font-semibold text-accent underline-offset-4 hover:underline">
        Diskusikan <span className="sr-only">{service.title}</span>
      </Link>
    </li>
  );
}
