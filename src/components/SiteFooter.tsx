import Link from "next/link";
import { company } from "@/data/company";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line bg-ink text-paper">
      <div className="container-page py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="font-serif text-lg font-semibold">AVIVA Foodstuff Trading</div>
          <p className="mt-3 text-sm text-paper/70 max-w-xs">
            {company.legalName} supplies beverages, chips &amp; snacks, and chocolates &amp; confectionery to
            businesses across the UAE.
          </p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-wide text-paper/50 mb-3">Products</div>
          <ul className="space-y-2 text-sm text-paper/80">
            <li><Link href="/products/beverages" className="hover:text-wheat-light">Beverages</Link></li>
            <li><Link href="/products/chips-snacks" className="hover:text-wheat-light">Chips &amp; Snacks</Link></li>
            <li><Link href="/products/chocolates-confectionery" className="hover:text-wheat-light">Chocolates &amp; Confectionery</Link></li>
            <li><Link href="/products" className="hover:text-wheat-light">Full Catalogue</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-wide text-paper/50 mb-3">Company</div>
          <ul className="space-y-2 text-sm text-paper/80">
            <li><Link href="/about" className="hover:text-wheat-light">About AVIVA</Link></li>
            <li><Link href="/quote" className="hover:text-wheat-light">Request a Quote</Link></li>
            <li><Link href="/contact" className="hover:text-wheat-light">Contact Us</Link></li>
            <li><Link href="/product-disclaimer" className="hover:text-wheat-light">Product Disclaimer</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-wheat-light">Privacy Policy</Link></li>
            <li><Link href="/terms-of-use" className="hover:text-wheat-light">Terms of Use</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-wide text-paper/50 mb-3">Contact</div>
          <ul className="space-y-2 text-sm text-paper/80">
            <li>{company.addressShort}</li>
            <li><a href={company.phoneHref} className="hover:text-wheat-light">{company.phone}</a></li>
            <li><a href={company.whatsappHref} className="hover:text-wheat-light">WhatsApp: {company.whatsapp}</a></li>
            <li><a href={company.emailHref} className="hover:text-wheat-light">{company.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <div className="container-page py-5 text-xs text-paper/50 flex flex-col sm:flex-row justify-between gap-2">
          <span>&copy; {new Date().getFullYear()} {company.legalName}. All rights reserved.</span>
          <span>Ajman, United Arab Emirates</span>
        </div>
      </div>
    </footer>
  );
}
