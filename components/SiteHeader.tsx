import Link from "next/link";
import { studioInfo } from "@/data/studio";

const socialLinks = [
  {
    label: "FB",
    href: "#",
  },
  {
    label: "IG",
    href: "#",
  },
  {
    label: "SC",
    href: "#",
  },
  {
    label: "IN",
    href: "#",
  },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black">
      <div className="mx-auto grid max-w-7xl grid-cols-3 items-center px-8 py-6">
        <div className="flex justify-start">
          <a
            href="#studio-info"
            className="text-xs font-bold uppercase tracking-[0.3em] text-white/80 hover:text-white"
          >
            Who We Are
          </a>
        </div>

        <div className="flex justify-center">
          <Link href="/" aria-label="Go to homepage">
            <img
              src={studioInfo.logoImage}
              alt={studioInfo.name}
              className="h-12 w-auto object-contain"
            />
          </Link>
        </div>

        <nav className="flex justify-end gap-5">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-bold uppercase tracking-widest text-white/80 hover:text-white"
              aria-label={link.label}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}