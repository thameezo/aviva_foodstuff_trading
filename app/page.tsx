import Link from "next/link";
import { CategoryCard } from "@/components/CategoryCard";
import { ProductCard } from "@/components/ProductCard";
import { EnquiryButtons } from "@/components/EnquiryButtons";
import { company } from "@/data/company";
import { getFeatured, getProductsByCategory } from "@/lib/products";

export default function HomePage() {
  const beverages = getProductsByCategory("Beverages");
  const chips = getProductsByCategory("Chips & Snacks");
  const chocolates = getProductsByCategory("Chocolates & Confectionery");

  const featuredBeverages = getFeatured("Beverages", 4);
  const featuredSnacks = getFeatured("Chips & Snacks", 4);
  const featuredChocolates = getFeatured("Chocolates & Confectionery", 4);

  return (
    <>
      {/* HERO */}
      <section className="border-b border-line">
        <div className="container-page py-20 md:py-28 grid md:grid-cols-5 gap-10 items-end">
          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-wide text-wheat font-medium mb-4">
              Foodstuff Trading &middot; Ajman, UAE
            </p>
            <h1 className="font-serif text-4xl md:text-6xl font-semibold text-ink leading-[1.05]">
              Reliable Foodstuff Trading for UAE Businesses
            </h1>
            <p className="mt-6 text-lg text-ink-soft max-w-xl">
              AVIVA Foodstuff Trading supplies a broad range of beverages, chips &amp; snacks, and
              chocolates &amp; confectionery to supermarkets, retailers, cafes, hotels and wholesale
              buyers across the UAE.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="px-6 py-3 bg-ink text-paper text-sm font-medium hover:bg-ink-soft transition-colors"
              >
                Explore Products
              </Link>
              <Link
                href="/quote"
                className="px-6 py-3 border border-ink text-ink text-sm font-medium hover:bg-wheat hover:border-wheat transition-colors"
              >
                Request a Quote
              </Link>
            </div>
          </div>
          <div className="md:col-span-2 border border-line bg-white p-6">
            <div className="text-xs uppercase tracking-wide text-ink-soft/70 mb-4">Catalogue at a glance</div>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between border-b border-line pb-3">
                <span className="text-ink-soft">Beverages</span>
                <span className="manifest-number font-medium">{beverages.length} lines</span>
              </li>
              <li className="flex justify-between border-b border-line pb-3">
                <span className="text-ink-soft">Chips &amp; Snacks</span>
                <span className="manifest-number font-medium">{chips.length} lines</span>
              </li>
              <li className="flex justify-between">
                <span className="text-ink-soft">Chocolates &amp; Confectionery</span>
                <span className="manifest-number font-medium">{chocolates.length} lines</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* WHAT WE SUPPLY */}
      <section className="container-page py-20">
        <h2 className="font-serif text-3xl font-semibold text-ink mb-2">What We Supply</h2>
        <p className="text-ink-soft mb-10 max-w-2xl">
          Three core categories, sourced and supplied through AVIVA&apos;s trading and distribution
          network for the UAE market.
        </p>
        <div className="grid md:grid-cols-3 gap-5">
          <CategoryCard
            index={1}
            name="Beverages"
            tagline="Soft drinks, juices, energy drinks, dairy drinks, iced tea and sparkling water."
            href="/products/beverages"
            count={beverages.length}
          />
          <CategoryCard
            index={2}
            name="Chips & Snacks"
            tagline="Potato chips, corn snacks, cheese snacks, popcorn and family packs."
            href="/products/chips-snacks"
            count={chips.length}
          />
          <CategoryCard
            index={3}
            name="Chocolates & Confectionery"
            tagline="Chocolate, candy, gummies, lollipops, chewing gum, marshmallows and wafers."
            href="/products/chocolates-confectionery"
            count={chocolates.length}
          />
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="border-y border-line bg-sky">
        <div className="container-page py-16">
          <h2 className="font-serif text-3xl font-semibold text-ink mb-8">Who We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4 text-ink-soft text-sm">
            {[
              "Retailers",
              "Supermarkets & Groceries",
              "Restaurants & Cafes",
              "Hotels & Hospitality",
              "Wholesale Buyers",
              "FMCG Distributors",
              "Catering Companies",
              "Corporate Buyers"
            ].map((seg) => (
              <div key={seg} className="ledger-rule pt-3">{seg}</div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY WORK WITH US */}
      <section className="container-page py-20">
        <h2 className="font-serif text-3xl font-semibold text-ink mb-10">Why Work With AVIVA</h2>
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
          {[
            {
              title: "Wide Product Selection",
              body: "A catalogue spanning beverages, chips & snacks, and chocolates & confectionery, organized for easy browsing by category."
            },
            {
              title: "Business-Focused Supply",
              body: "A trading and supply model built around retailers, hospitality businesses and wholesale buyers, not individual consumers."
            },
            {
              title: "Convenient Product Enquiries",
              body: "Browse the full catalogue online and send a quotation request or WhatsApp enquiry in a few clicks."
            },
            {
              title: "Dedicated Customer Communication",
              body: "Direct phone, WhatsApp and email lines to AVIVA's sales team for quotations and product information."
            }
          ].map((item) => (
            <div key={item.title} className="ledger-rule pt-6">
              <h3 className="font-serif text-xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-ink-soft text-sm max-w-md">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCT RANGE SHOWCASE */}
      <section className="bg-sky border-y border-line">
        <div className="container-page py-20">
          <h2 className="font-serif text-3xl font-semibold text-ink mb-2">Featured Beverages</h2>
          <p className="text-ink-soft mb-8">A sample of what&apos;s available in the beverages category.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-14">
            {featuredBeverages.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>

          <h2 className="font-serif text-3xl font-semibold text-ink mb-2">Popular Snacks</h2>
          <p className="text-ink-soft mb-8">A sample of what&apos;s available in the chips &amp; snacks category.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-14">
            {featuredSnacks.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>

          <h2 className="font-serif text-3xl font-semibold text-ink mb-2">Featured Confectionery</h2>
          <p className="text-ink-soft mb-8">A sample of what&apos;s available in the chocolates &amp; confectionery category.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-8">
            {featuredChocolates.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/products"
              className="inline-block px-6 py-3 bg-ink text-paper text-sm font-medium hover:bg-ink-soft transition-colors"
            >
              View Full Product Catalogue
            </Link>
          </div>
        </div>
      </section>

      {/* HOW TO ORDER */}
      <section className="container-page py-20">
        <h2 className="font-serif text-3xl font-semibold text-ink mb-10">How to Enquire</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            "Browse Products",
            "Send Your Enquiry",
            "Discuss Requirements",
            "Receive Product Information / Quotation"
          ].map((step, i) => (
            <div key={step} className="border border-line bg-white p-6">
              <span className="text-xs manifest-number font-medium">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-3 text-ink font-medium text-sm">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BUSINESS ENQUIRY CTA */}
      <section className="border-y border-line bg-ink text-paper">
        <div className="container-page py-16 text-center">
          <h2 className="font-serif text-3xl font-semibold">Looking for a Reliable Foodstuff Supplier?</h2>
          <p className="mt-3 text-paper/70 max-w-xl mx-auto">
            Request product information or contact AVIVA&apos;s sales team directly.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              href="/quote"
              className="px-6 py-3 bg-wheat text-ink text-sm font-medium hover:bg-wheat-light transition-colors"
            >
              Request a Quote
            </Link>
            <a
              href={company.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-paper/40 text-paper text-sm font-medium hover:bg-paper hover:text-ink transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT SUMMARY */}
      <section className="container-page py-20">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-serif text-3xl font-semibold text-ink mb-4">Contact AVIVA</h2>
            <p className="text-ink-soft mb-6 max-w-md">
              {company.legalName} is based in {company.addressShort}.
            </p>
            <EnquiryButtons />
          </div>
          <div className="border border-line bg-white p-6 text-sm space-y-3">
            <div>
              <div className="text-xs uppercase tracking-wide text-ink-soft/70">Address</div>
              <div className="text-ink">{company.addressLine}</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wide text-ink-soft/70">Phone</div>
              <a href={company.phoneHref} className="text-ink hover:text-wheat">{company.phone}</a>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wide text-ink-soft/70">WhatsApp</div>
              <a href={company.whatsappHref} className="text-ink hover:text-wheat">{company.whatsapp}</a>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wide text-ink-soft/70">Email</div>
              <a href={company.emailHref} className="text-ink hover:text-wheat">{company.email}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
