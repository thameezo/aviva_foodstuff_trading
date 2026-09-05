import Link from "next/link";
import Image from "next/image";
import { company } from "@/data/company";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/products/beverages", label: "Beverages" },
  { href: "/products/chips-snacks", label: "Chips & Snacks" },
  { href: "/products/chocolates-confectionery", label: "Chocolates" },
  { href: "/contact", label: "Contact" }
];

export function SiteHeader() {
  return (
    <header className="border-b border-line bg-paper/95 backdrop-blur sticky top-0 z-40">
      <div className="container-page flex items-center justify-between h-20 gap-6">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image src="/logo.svg" alt="AVIVA Foodstuff Trading" width={44} height={44} />
          <div className="leading-tight">
            <div className="font-serif font-semibold text-ink text-lg">AVIVA</div>
            <div className="text-[11px] tracking-wide text-ink-soft uppercase">Foodstuff Trading</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 text-sm text-ink-soft">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-ink transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={company.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-2 border border-ink text-ink hover:bg-ink hover:text-paper transition-colors"
          >
            WhatsApp Us
          </a>
          <Link
            href="/quote"
            className="text-sm px-4 py-2 bg-wheat text-ink font-medium hover:bg-wheat-light transition-colors"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
