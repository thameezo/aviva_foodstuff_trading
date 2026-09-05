# AVIVA Foodstuff Trading — Website

A production-ready B2B catalogue website for **AVIVA FOODSTUFF TRADING S.P.S-LLC**, built with
Next.js 14 (App Router), TypeScript, and Tailwind CSS.

This is a trading/wholesale catalogue site, not an e-commerce store: there is no cart, checkout,
or published pricing. Every product page and category page ends in a quote/enquiry action
(WhatsApp, phone, or the Request a Quote form).

## 1. Strategy summary (as requested before implementation)

- **Business understanding**: AVIVA is a UAE (Ajman-based) foodstuff/FMCG trading and distribution
  company. Its actual catalogue — drawn from the three brochures supplied — spans three
  categories: Beverages, Chips & Snacks, and Chocolates & Confectionery, covering ~700 individual
  SKUs across dozens of international and regional brands.
- **Positioning**: presented as an established B2B trading business serving supermarkets,
  groceries, hospitality, and wholesale buyers — not a shop. No invented history, certifications,
  fleet size, or years-in-business claims are made anywhere on the site; only what the source
  material supports.
- **Information architecture**: Home → About → Products (searchable full catalogue) → 3 category
  pages → product detail template → Request a Quote / Contact, plus Privacy Policy, Terms of Use,
  and a Product Disclaimer page (clarifying AVIVA trades in third-party brands without claiming
  ownership or official authorization from each one).
- **SEO strategy**: per-page metadata and canonical tags, Organization/LocalBusiness/Product/
  BreadcrumbList JSON-LD, a dynamic sitemap covering every product page, and copy built around
  commercial search intent ("FMCG supplier UAE", "wholesale snacks UAE", etc.) without guaranteeing
  rankings. Ajman is stated as the actual base; UAE-wide reach is described as "serving business
  enquiries across the UAE" rather than an unverified delivery/coverage claim.
- **Product catalogue strategy**: all product data lives in `src/data/products/*.ts`, generated
  from the brochures (see `scripts/`). Adding, editing, or removing products means editing these
  data files — no page code needs to change. See §5.

## 2. Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to the real production domain
once one is chosen — it drives canonical URLs, the sitemap, and JSON-LD.

## 3. Important — things to finish before launch

1. **Replace the logo.** `public/logo.svg` is a placeholder redrawn from the brand's visual
   description (navy/light-blue circular badge, wheat sheaf, "AVIVA / FOODSTUFF TRADING LLC").
   The real exported logo file was not retrievable in the environment this project was built in
   — export it from the original source and drop it in as `public/logo.png` (and update the
   `<Image>` reference in `src/components/SiteHeader.tsx` and the `logo` field in
   `app/layout.tsx`'s JSON-LD).
2. **Product photography.** Every product card and detail page currently shows a placeholder tile
   with the product name instead of a photo. Add real images to `public/products/` and set the
   `image` field in the relevant entry in `src/data/products/*.ts` (currently `null` for all
   products, since no product photo files were available to place in this project).
3. **Wire up the quote form.** `app/api/quote/route.ts` currently only logs submissions to the
   server console. Connect it to a real email service (Resend, SendGrid, Postmark, etc.) or a
   CRM webhook — see the commented example in that file.
4. **Google Maps.** The contact page has a placeholder where a Google Maps embed should go once
   an API key is available.
5. **Confirm every product line.** The brochures contained a few numbering gaps and one likely
   typo product number; none of that affects the generated catalogue, but it's worth a human
   pass over `src/data/products/*.ts` before launch to confirm categorization (the subcategory for
   each item was assigned by keyword matching, not manually reviewed line-by-line).
6. **Google Business Profile** (not built here, per the brief): once live, create/claim a Google
   Business Profile for AVIVA with the same name, Ajman address, phone, and website URL used on
   this site, and keep them in sync — this materially helps local UAE search visibility.

## 4. Architecture

```
app/                          Next.js App Router pages
  layout.tsx                  Root layout, fonts, Organization/LocalBusiness JSON-LD
  page.tsx                    Homepage
  about/                      About page
  products/
    page.tsx                  Full catalogue (search + filter)
    [category]/page.tsx       Category page (beverages / chips-snacks / chocolates-confectionery)
    [category]/[slug]/page.tsx  Product detail template
  quote/                      Request a Quote page + form
  contact/                    Contact page
  privacy-policy/, terms-of-use/, product-disclaimer/
  api/quote/route.ts          Form submission endpoint (stub — see §3.3)
  sitemap.ts, robots.ts

src/
  components/                 SiteHeader, SiteFooter, ProductCard, CategoryCard,
                               ProductBrowser (client-side search/filter), QuoteForm,
                               EnquiryButtons, Breadcrumbs
  data/
    company.ts                Single source of truth for verified contact facts
    types.ts                  Product type
    products/
      beverages.ts            148 products
      chips.ts                134 products
      chocolates.ts            412 products
  lib/products.ts              Query helpers (by category, subcategory, slug, search)

scripts/                       One-time brochure → data conversion (kept for future re-imports)
```

## 5. Adding or editing products

Each product in `src/data/products/*.ts` follows this shape:

```ts
{
  slug: "245ml-7up-can",
  product_name: "245ML 7UP CAN",
  category: "Beverages",
  subcategory: "Soft Drinks",
  packaging: "ctn of 24 pcs",
  brand: null,
  description: null,
  image: null,
  catalogue_source: "Beverages"
}
```

To add a product: append an object to the relevant array (or add a new category array and wire it
into `src/lib/products.ts`). To re-run the brochure import against updated source text, edit the
`scripts/raw_*.txt` files and re-run `python3 scripts/build_data.py`.

## 6. Deployment

This is a standard Next.js app — deploy to Vercel, or any Node hosting that supports Next.js
(`npm run build && npm run start`). No database is required; all product data is static at build
time, so `output: "export"` (fully static hosting) is also possible if the quote form is instead
pointed at an external form service.

## 7. Design notes

The visual language draws from the source material itself — AVIVA's brochures are literally
numbered product manifests — so product listings use numbered rows, hairline rules, and a
navy/wheat-gold palette taken from the logo, set in Source Serif 4 (headings) and IBM Plex Sans
(body/UI). Deliberately avoided: shopping-cart UI, published prices, stock imagery of generic
"happy shoppers," and unverified claims of scale.
