// Single source of truth for verified company facts.
// Every figure here is taken directly from AVIVA's supplied brochures and
// business card. Do not add claims (years of experience, certifications,
// fleet size, etc.) that are not present in the source material.

export const company = {
  legalName: "AVIVA FOODSTUFF TRADING S.P.S-LLC",
  shortName: "AVIVA Foodstuff Trading",
  addressLine: "Shop No. 2, Industrial Area-1, Ajman Medical Center Building, Al Muwaihat, Ajman, United Arab Emirates",
  addressShort: "Industrial Area-1, Ajman, United Arab Emirates",
  city: "Ajman",
  country: "United Arab Emirates",
  phone: "+971 6 716 0259",
  phoneHref: "tel:+97167160259",
  whatsapp: "+971 58 132 9107",
  whatsappHref: "https://wa.me/971581329107",
  additionalPhones: ["+971 58 132 9108", "+971 58 132 9104"],
  email: "avivafoodstuff@gmail.com",
  emailHref: "mailto:avivafoodstuff@gmail.com",
  siteUrl: "https://www.avivafoodstuff.ae", // placeholder — set NEXT_PUBLIC_SITE_URL in production
  categories: [
    {
      slug: "beverages",
      name: "Beverages",
      tagline: "Soft drinks, juices, energy drinks, dairy drinks and more",
    },
    {
      slug: "chips-snacks",
      name: "Chips & Snacks",
      tagline: "Potato chips, corn snacks, cheese snacks and popcorn",
    },
    {
      slug: "chocolates-confectionery",
      name: "Chocolates & Confectionery",
      tagline: "Chocolate, candy, gummies, lollipops, chewing gum and more",
    },
  ],
};

export const categorySlugToName: Record<string, string> = {
  "beverages": "Beverages",
  "chips-snacks": "Chips & Snacks",
  "chocolates-confectionery": "Chocolates & Confectionery",
};

export const categoryNameToSlug: Record<string, string> = {
  "Beverages": "beverages",
  "Chips & Snacks": "chips-snacks",
  "Chocolates & Confectionery": "chocolates-confectionery",
};
