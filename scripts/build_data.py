import re, json, os

BASE = os.path.dirname(__file__)
OUT = os.path.join(BASE, "..", "src", "data", "products")

def slugify(name):
    s = name.lower()
    s = re.sub(r"[^a-z0-9]+", "-", s)
    s = re.sub(r"-+", "-", s).strip("-")
    return s

def load(fname):
    items = []
    with open(os.path.join(BASE, fname), encoding="utf-8") as f:
        for line in f:
            line = line.rstrip("\n")
            if not line.strip():
                continue
            name, desc = line.split("|", 1)
            items.append((name.strip(), desc.strip()))
    return items

def title_case_product(name):
    # Keep numbers/units as-is, title-case words, preserve existing mixed-case brand tokens
    words = name.split(" ")
    out = []
    for w in words:
        if any(c.isdigit() for c in w) or "&" in w or "-" in w and any(c.isdigit() for c in w):
            out.append(w)
        elif w.isupper() and len(w) > 1:
            out.append(w.capitalize() if w.isalpha() else w)
        else:
            out.append(w)
    return " ".join(out)

# ---------- BEVERAGES ----------
def categorize_beverage(name):
    n = name.upper()
    if any(k in n for k in ["MILK", "LACNOR", "NADEC"]):
        return "Milk & Dairy Drinks"
    if any(k in n for k in ["ICETEA", "ICE TEA"]):
        return "Iced Tea"
    if any(k in n for k in ["REDBUL", "STING", "POWER HORSE", "BOOM BOOM ENERGY", "CODE RED"]):
        return "Energy Drinks"
    if any(k in n for k in ["JUICE", "LACNOR JUICE", "MAZZA", "MELCO", "RANI", "STAR JUICE", "ROOHFSA", "YOOKA"]):
        return "Juices"
    if any(k in n for k in ["PERRIER", "SPARKING WATER", "SPARKLING WATER"]):
        return "Sparkling Water"
    if any(k in n for k in ["COLA", "PEPSI", "7UP", "DEW", "FANTA", "MIRINDA", "SPRITE", "RC COLA", "STAR CAN", "STAR SODA",
                             "STAR LEMON SODA", "STAR GINGER SODA", "STAR ZEERA", "KINZA", "SHANI", "VIMTO", "RITA",
                             "SCHWEPP", "THUMPS UP", "BARBICAN", "SUNTOP", "POCARI", "NELLON", "ORNAMIC"]):
        return "Soft Drinks"
    return "Other Beverages"

# ---------- CHOCOLATES / CONFECTIONERY ----------
def categorize_confectionery(name):
    n = name.upper()
    if any(k in n for k in ["JELLY", "JELAXY", "JELLOPY", "JELLIDO", "JELLIBOY", "JELLYBEE", "JOJO", "GUMMY", "GUMMI",
                             "BEBETO", "YUPI", "MAGICAL GUMMY", "YUMMY GUMMY", "JELLINIM"]):
        return "Gummies"
    if any(k in n for k in ["LOLLIPOP", "LOLLY", "POP ", " POP", "CHUPA", "DYNA", "MADHUR", "HAPPYPOP", "HAPPY POP",
                             "TEEKA LOLLIPOP", "PINPANG", "TRAFFIC LIGHT", "SWISS ASSORTED POP", "SWISS BIG POP",
                             "SWISS SOUR POP", "WINDMILL POP"]):
        return "Lollipops"
    if any(k in n for k in ["CHEWING GUM", "BUBBLE GUM", "BUBBLEGUM", "FUSEN GUM", "MASTIC GUM", "MONTI ROLLS",
                             "CRAZY ROLLS", "TEEKA GUM", "TEEKA AZUZA", "EXTRA-", "BATOOK", "MEGA BABOOL", "BIG BABOOL",
                             "SPAGHETTI BUBBLE GUM"]):
        return "Chewing Gum"
    if any(k in n for k in ["MARSHMALLOW", "MARSHMELLOW", "MALLOWS", "TWIST MARSHMALLOW", "MARSHZONE", "LECHAO",
                             "BIG MARSHMELLOW", "CANDYLAND PUFFS", "PALAZI HOTDOG"]):
        return "Marshmallows"
    if any(k in n for k in ["WAFER", "OREO", "LOCKER", "NADI CHOCOLATE WAFER", "NADI ORANGE WAFER", "ULKER BISCUIT",
                             "HELLO PANDA", "FLUTES"]):
        return "Wafers"
    if any(k in n for k in ["CASHEW", "PISTACHIO", "PEANUT", "BEST TIN", "BEST POUCH", "BEST PEANUTS"]):
        return "Nuts & Snack Confectionery"
    if any(k in n for k in ["KITKAT", "KIT KAT", "KINDER", "GALAXY", "MARS ", "MARS PACKET", "MARS LARGE", "TWIX",
                             "M&M", "MALTESER", "FERRERO", "DAIRY MILK", "HERSHEYS", "NUTELLA", "RAFFAELLO",
                             "REESES", "MILKA", "ROLLANA", "TOLA CHOCOLATE", "YONKERS", "WINERGY", "LATELLA",
                             "COKOKREAM", "COCOS ELVAN", "COCO CREAM", "FLAKE", "MILCO MILK TOFFEE", "TIME OUT",
                             "KOPIKO", "TOFFO", "NESTLE TOFFO", "MCLAIRS TOFFEE", "HAI THAI CHOCO", "KING EGG",
                             "SWISS FUNNY BEAN"]):
        return "Chocolate"
    return "Candy"

# ---------- CHIPS & SNACKS ----------
def categorize_chips(name):
    n = name.upper()
    if any(k in n for k in ["POPCORN"]):
        return "Popcorn"
    if any(k in n for k in ["CHEEZ", "CHEESE"]):
        return "Cheese Snacks"
    if any(k in n for k in ["BUGLES", "CHEETOS", "CHEETAH", "KURKURE", "SUPER RING", "MUDHISH RIPPLE", "MUDHISH BLACK RINGS",
                             "MR.KRISPS RINGS", "DORITOS DINAMITA"]):
        return "Corn Snacks"
    if any(k in n for k in ["CHILLI", "CHILLY", "FLAMIN", "FLAMING", "FIREY HOT", "SCORCHIN", "SAFARI CHILLI", "SPICY", "SPICEY"]):
        return "Spicy Snacks"
    if any(k in n for k in ["FAMILY"]):
        return "Family Packs"
    if any(k in n for k in ["LAYS", "PRINGLES", "FINNS", "TAKIS", "OMAN CHIPS", "SOHAR", "SALAD CHIPS", "SQUARE",
                             "ALADIN CHIPS", "ALIBABA CHIPS", "MAZOON", "RANNAN", "RINGO", "SARA CHIPS", "QARMOOSH",
                             "RAJA CHIPS", "HERO CHIPS", "HALA CHIPS", "HAPPY NERO", "MAJID CRISPY", "POFAK OMAN",
                             "EMIRATES POFAKI", "FIESTA", "ZAAKY", "SMITH STICK", "TAHA CHIPS", "PEARL CHIPS"]):
        return "Potato Chips"
    return "Other Snacks"

def build(fname, categorizer, source):
    items = load(fname)
    products = []
    seen = {}
    for name, desc in items:
        slug = slugify(name)
        if slug in seen:
            seen[slug] += 1
            slug = f"{slug}-{seen[slug]}"
        else:
            seen[slug] = 0
        category = categorizer(name)
        products.append({
            "slug": slug,
            "product_name": name,
            "category": source,
            "subcategory": category,
            "packaging": desc,
            "brand": None,
            "description": None,
            "image": None,
            "catalogue_source": source,
        })
    return products

os.makedirs(OUT, exist_ok=True)

bev = build("raw_beverages.txt", categorize_beverage, "Beverages")
choc = build("raw_chocolates.txt", categorize_confectionery, "Chocolates & Confectionery")
chips = build("raw_chips.txt", categorize_chips, "Chips & Snacks")

def write_ts(varname, data, path):
    with open(path, "w", encoding="utf-8") as f:
        f.write("import type { Product } from '../types';\n\n")
        f.write(f"export const {varname}: Product[] = ")
        f.write(json.dumps(data, indent=2))
        f.write(";\n")

write_ts("beverages", bev, os.path.join(OUT, "beverages.ts"))
write_ts("chocolates", choc, os.path.join(OUT, "chocolates.ts"))
write_ts("chips", chips, os.path.join(OUT, "chips.ts"))

# subcategory counts summary
from collections import Counter
for name, data in [("Beverages", bev), ("Chocolates", choc), ("Chips", chips)]:
    c = Counter(p["subcategory"] for p in data)
    print(name, len(data), dict(c))
