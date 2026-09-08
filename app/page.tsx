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
      <section className="glow-panel">
        <div className="container-page pt-24 pb-20 md:pt-36 md:pb-28 text-center">
          <p className="text-[13px] uppercase tracking-[0.14em] text-accent font-medium mb-5">
            Foodstuff Trading &middot; Ajman, UAE
          </p>
          <h1 className="font-sans tracking-tight font-semibold text-ink text-[2.75rem] leading-[1.05] md:text-[5.25rem] md:leading-[1.02] max-w-4xl mx-auto">
            Reliable Foodstuff
            <br />
            Trading for UAE Businesses
          </h1>
          <p className="mt-7 text-lg md:text-xl text-ink-soft max-w-xl mx-auto font-normal">
            Beverages, chips &amp; snacks, and chocolates &amp; confectionery &mdash; supplied to
            supermarkets, retailers, cafes, hotels and wholesale buyers across the UAE.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link
              href="/products"
              className="px-7 py-3 rounded-pill bg-accent text-white text-[15px] font-medium hover:bg-accent-light transition-colors"
            >
              Explore Products
            </Link>
            <Link
              href="/quote"
              className="px-7 py-3 rounded-pill bg-sky text-ink text-[15px] font-medium hover:bg-line/60 transition-colors"
            >
              Request a Quote
            </Link>
          </div>

          <div className="mt-20 max-w-2xl mx-auto grid grid-cols-3 divide-x divide-line">
            <div className="px-4">
              <div className="font-sans tracking-tight text-3xl md:text-4xl font-semibold text-ink">{beverages.length}</div>
              <div className="mt-1 text-[13px] text-ink-soft">Beverage lines</div>
            </div>
            <div className="px-4">
              <div className="font-sans tracking-tight text-3xl md:text-4xl font-semibold text-ink">{chips.length}</div>
              <div className="mt-1 text-[13px] text-ink-soft">Snack lines</div>
            </div>
            <div className="px-4">
              <div className="font-sans tracking-tight text-3xl md:text-4xl font-semibold text-ink">{chocolates.length}</div>
              <div className="mt-1 text-[13px] text-ink-soft">Confectionery lines</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE SUPPLY */}
      <section className="container-page py-24 md:py-32">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-sans tracking-tight text-3xl md:text-5xl font-semibold text-ink">What We Supply</h2>
          <p className="mt-4 text-ink-soft text-lg">
            Three core categories, sourced and supplied through AVIVA&apos;s trading and
            distribution network for the UAE market.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
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
      <section className="bg-sky">
        <div className="container-page py-24 md:py-28 text-center">
          <h2 className="font-sans tracking-tight text-3xl md:text-5xl font-semibold text-ink mb-14">Who We Serve</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
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
              <span
                key={seg}
                className="px-5 py-2.5 rounded-pill bg-white text-ink text-sm shadow-card"
              >
                {seg}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WHY WORK WITH US */}
      <section className="container-page py-24 md:py-32">
        <h2 className="font-sans tracking-tight text-3xl md:text-5xl font-semibold text-ink text-center mb-14">
          Why Work With AVIVA
        </h2>
        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
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
            <div key={item.title} className="rounded-card bg-white shadow-card p-8">
              <h3 className="font-sans tracking-tight text-xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-2.5 text-ink-soft text-[15px] leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCT RANGE SHOWCASE */}
      <section className="bg-sky">
        <div className="container-page py-24 md:py-32">
          <div className="text-center mb-16">
            <h2 className="font-sans tracking-tight text-3xl md:text-5xl font-semibold text-ink">Product Catalogue</h2>
            <p className="mt-4 text-ink-soft text-lg">A sample of what&apos;s available across every category.</p>
          </div>

          <h3 className="font-sans tracking-tight text-2xl font-semibold text-ink mb-6">Featured Beverages</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16">
            {featuredBeverages.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>

          <h3 className="font-sans tracking-tight text-2xl font-semibold text-ink mb-6">Popular Snacks</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16">
            {featuredSnacks.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>

          <h3 className="font-sans tracking-tight text-2xl font-semibold text-ink mb-6">Featured Confectionery</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-14">
            {featuredChocolates.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/products"
              className="inline-block px-7 py-3 rounded-pill bg-accent text-white text-[15px] font-medium hover:bg-accent-light transition-colors"
            >
              View Full Product Catalogue
            </Link>
          </div>
        </div>
      </section>

      {/* HOW TO ORDER */}
      <section className="container-page py-24 md:py-32">
        <h2 className="font-sans tracking-tight text-3xl md:text-5xl font-semibold text-ink text-center mb-14">
          How to Enquire
        </h2>
        <div className="grid md:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {[
            "Browse Products",
            "Send Your Enquiry",
            "Discuss Requirements",
            "Receive Product Information / Quotation"
          ].map((step, i) => (
            <div key={step} className="rounded-card bg-sky p-7 text-center">
              <span className="text-sm manifest-number font-semibold">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-3 text-ink font-medium text-[15px]">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BUSINESS ENQUIRY CTA */}
      <section className="container-page pb-24 md:pb-32">
        <div className="glow-panel rounded-card bg-ink text-white py-20 px-8 text-center">
          <h2 className="font-sans tracking-tight text-3xl md:text-5xl font-semibold">
            Looking for a Reliable
            <br />
            Foodstuff Supplier?
          </h2>
          <p className="mt-5 text-white/60 text-lg max-w-xl mx-auto">
            Request product information or contact AVIVA&apos;s sales team directly.
          </p>
          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <Link
              href="/quote"
              className="px-7 py-3 rounded-pill bg-accent text-white text-[15px] font-medium hover:bg-accent-light transition-colors"
            >
              Request a Quote
            </Link>
            <a
              href={company.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-pill bg-white/10 text-white text-[15px] font-medium hover:bg-white/20 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT SUMMARY */}
      <section className="container-page pb-24 md:pb-32">
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <div>
            <h2 className="font-sans tracking-tight text-3xl font-semibold text-ink mb-4">Contact AVIVA</h2>
            <p className="text-ink-soft mb-6 max-w-md">
              {company.legalName} is based in {company.addressShort}.
            </p>
            <EnquiryButtons />
          </div>
          <div className="rounded-card bg-sky p-6 text-sm space-y-3">
            <div>
              <div className="text-xs uppercase tracking-wide text-ink-soft/70">Address</div>
              <div className="text-ink">{company.addressLine}</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wide text-ink-soft/70">Phone</div>
              <a href={company.phoneHref} className="text-ink hover:text-accent">{company.phone}</a>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wide text-ink-soft/70">WhatsApp</div>
              <a href={company.whatsappHref} className="text-ink hover:text-accent">{company.whatsapp}</a>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wide text-ink-soft/70">Email</div>
              <a href={company.emailHref} className="text-ink hover:text-accent">{company.email}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
