import Link from "next/link";
import Image from "next/image";
import { company } from "@/data/company";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/products/beverages", label: "Beverages" },
  { href: "/products/chips-snacks", label: "Snacks" },
  { href: "/products/chocolates-confectionery", label: "Chocolates" },
  { href: "/contact", label: "Contact" }
];

export function SiteHeader() {
  return (
    <header className="bg-paper/80 backdrop-blur-xl sticky top-0 z-40 border-b border-line/70">
      <div className="container-page flex items-center justify-between h-14 gap-6">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Image src="/logo.png" alt="AVIVA Foodstuff Trading" width={30} height={29} />
          <span className="font-sans tracking-tight font-semibold text-ink text-[15px]">AVIVA</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-[13px] text-ink-soft">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-ink transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={company.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex text-[13px] px-4 py-1.5 rounded-pill text-ink-soft hover:text-ink hover:bg-sky transition-colors"
          >
            WhatsApp
          </a>
          <Link
            href="/quote"
            className="text-[13px] px-4 py-1.5 rounded-pill bg-accent text-white font-medium hover:bg-accent-light transition-colors"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
