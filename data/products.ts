export interface ProductItem {
  name: string;
  image: string;
  latin?: string;
  subcategory?: string;
}

export interface ProductCategory {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  items: ProductItem[];
}

export const catalogData: ProductCategory[] = [
  {
    id: "01",
    title: "Grains & Cereals",
    subtitle: "Bulk Grains & Cereals Wholesale Supplier UAE",
    desc: "Rice and wheat flour form the backbone of most bulk food orders into the UAE. Mintrix Trading sources both from verified mills and growing regions, moisture-tests every batch, and packs to your specification — 25kg/50kg bags or full container loads.",
    items: [
      // Rice
      { name: "Basmati Rice", subcategory: "Rice", image: "/images/products/rice/basmati-rice.webp" },
      { name: "Non-Basmati / White Rice (IRRI)", subcategory: "Rice", image: "/images/products/rice/non-basmati-rice.webp" },
      { name: "Parboiled Rice (Sella)", subcategory: "Rice", image: "/images/products/rice/parboiled-rice.webp" },
      { name: "Jasmine Rice", subcategory: "Rice", image: "/images/products/rice/jasmine-rice.webp" },
      { name: "Sona Masoori", subcategory: "Rice", image: "/images/products/rice/sona-masoori.webp" },
      { name: "Brown Rice", subcategory: "Rice", image: "/images/products/rice/brown-rice.webp" },
      { name: "Glutinous / Sticky Rice", subcategory: "Rice", image: "/images/products/rice/glutinous-rice.webp" },
      { name: "Black Rice", subcategory: "Rice", image: "/images/products/rice/black-rice.webp" },
      // Wheat Flour
      { name: "All-Purpose Flour", subcategory: "Wheat Flour", image: "/images/products/wheat-flour/purpose-flour.webp" },
      { name: "Whole Wheat Flour", subcategory: "Wheat Flour", image: "/images/products/wheat-flour/whole-wheat-flour.webp" },
      { name: "Bread Flour (High Protein)", subcategory: "Wheat Flour", image: "/images/products/wheat-flour/bread-flour.webp" },
      { name: "Semolina (Suji/Rava)", subcategory: "Wheat Flour", image: "/images/products/wheat-flour/semolina.webp" },
    ],
  },
  {
    id: "02",
    title: "Spices & Seasonings",
    subtitle: "Bulk Spices Wholesale Supplier Dubai",
    desc: "From single-origin turmeric to blended seasoning mixes, Mintrix Trading supplies spices tested for purity, colour and pesticide residue before export, sourced from the growing regions best suited to each spice.",
    items: [
      { name: "Turmeric", subcategory: "Spices", image: "/images/products/spices/turmeric.webp" },
      { name: "Chili", subcategory: "Spices", image: "/images/products/spices/chili.webp" },
      { name: "Cumin", subcategory: "Spices", image: "/images/products/spices/cumin.webp" },
      { name: "Coriander", subcategory: "Spices", image: "/images/products/spices/coriander.webp" },
      { name: "Black Pepper", subcategory: "Spices", image: "/images/products/spices/black-pepper.webp" },
      { name: "Ginger", subcategory: "Spices", image: "/images/products/spices/ginger.webp" },
      { name: "Cardamom", subcategory: "Spices", image: "/images/products/spices/cardamom.webp" },
      { name: "Cinnamon", subcategory: "Spices", image: "/images/products/spices/cinnamon.webp" },
      { name: "Cloves", subcategory: "Spices", image: "/images/products/spices/cloves.webp" },
      { name: "Fennel Seeds", subcategory: "Spices", image: "/images/products/spices/fennel-seeds.webp" },
      { name: "Fenugreek", subcategory: "Spices", image: "/images/products/spices/fenugreek.webp" },
      { name: "Blended Spices", subcategory: "Spices", image: "/images/products/spices/blended-spices1.webp" },
    ],
  },
  {
    id: "03",
    title: "Pulses & Legumes",
    subtitle: "Pulses & Beans Importer UAE",
    desc: "Chickpeas, lentils and dal varieties alongside kidney, black, soy and navy beans — cleaned, graded and moisture-tested for bulk export, with consistent grading across every shipment.",
    items: [
      // Pulses
      { name: "Chickpeas", subcategory: "Pulses", image: "/images/products/pulses/chickpeas.webp" },
      { name: "Lentils (Masoor)", subcategory: "Pulses", image: "/images/products/pulses/lentils-masoor.webp" },
      { name: "Moong Dal", subcategory: "Pulses", image: "/images/products/pulses/moong-dal.webp" },
      { name: "Black Gram (Urad)", subcategory: "Pulses", image: "/images/products/pulses/black-gram-urad.webp" },
      { name: "Pigeon Peas (Toor)", subcategory: "Pulses", image: "/images/products/pulses/pigeon-peas-toor.webp" },
      { name: "Green/Yellow Peas", subcategory: "Pulses", image: "/images/products/pulses/green-yellow-peas.webp" },
      // Beans
      { name: "Kidney Beans", subcategory: "Beans", image: "/images/products/beans/kidney-beans.webp" },
      { name: "Black Beans", subcategory: "Beans", image: "/images/products/beans/black-beans.webp" },
      { name: "Soy Beans", subcategory: "Beans", image: "/images/products/beans/soy-beans.webp" },
      { name: "Navy Beans", subcategory: "Beans", image: "/images/products/beans/navy-beans.webp" },
      { name: "Pinto Beans", subcategory: "Beans", image: "/images/products/beans/pinto-beans.webp" },
      { name: "Butter/Lima Beans", subcategory: "Beans", image: "/images/products/beans/butter-lima-beans.webp" },
      { name: "Adzuki Beans", subcategory: "Beans", image: "/images/products/beans/adzuki-beans.webp" },
    ],
  },
  {
    id: "04",
    title: "Edible Oils & Oil Seeds",
    subtitle: "Cooking Oil & Oil Seeds Wholesale Dubai",
    desc: "Grade-1 refined cooking oils and cleaned, moisture-tested oil seeds, supplied in bulk drums, flexitanks or containers with FFA and colour verification on every batch.",
    items: [
      // Cooking Oil
      { name: "Sunflower Oil", subcategory: "Cooking Oil", image: "/images/products/cooking-oil/sunflower-oil.webp" },
      { name: "Palm Oil", subcategory: "Cooking Oil", image: "/images/products/cooking-oil/palm-oil.webp" },
      { name: "Soybean Oil", subcategory: "Cooking Oil", image: "/images/products/cooking-oil/soybean-oil.webp" },
      { name: "Corn Oil", subcategory: "Cooking Oil", image: "/images/products/cooking-oil/corn-oil.webp" },
      { name: "Canola/Rapeseed Oil", subcategory: "Cooking Oil", image: "/images/products/cooking-oil/canola-rapeseed-oil.webp" },
      { name: "Olive Oil", subcategory: "Cooking Oil", image: "/images/products/cooking-oil/olive-oil.webp" },
      { name: "Vegetable Oil (Blended)", subcategory: "Cooking Oil", image: "/images/products/cooking-oil/vegetable-oil-blended.webp" },
      { name: "Sesame Oil", subcategory: "Cooking Oil", image: "/images/products/cooking-oil/sesame-oil.webp" },
      // Oil Seeds
      { name: "Sesame Seeds", subcategory: "Oil Seeds", image: "/images/products/oil-seeds/sesame-seeds.webp" },
      { name: "Sunflower Seeds", subcategory: "Oil Seeds", image: "/images/products/oil-seeds/sunflower-seeds.webp" },
      { name: "Flaxseed", subcategory: "Oil Seeds", image: "/images/products/oil-seeds/flaxseed.webp" },
      { name: "Chia Seeds", subcategory: "Oil Seeds", image: "/images/products/oil-seeds/chia-seeds.webp" },
    ],
  },
  {
    id: "05",
    title: "Poultry & Protein",
    subtitle: "Halal Frozen Chicken Supplier UAE",
    desc: "Halal-certified frozen chicken sourced from verified export facilities, supplied as whole birds, parts or by-products in branded export cartons, dispatched in temperature-controlled reefer containers to protect the cold chain.",
    items: [
      { name: "Whole Chicken", subcategory: "Frozen Chicken", image: "/images/products/frozen-chicken/whole-chicken.webp" },
      { name: "Chicken Parts", subcategory: "Frozen Chicken", image: "/images/products/frozen-chicken/chicken-parts.webp" },
      { name: "Chicken By-products", subcategory: "Frozen Chicken", image: "/images/products/frozen-chicken/chicken-by-products.webp" },
    ],
  },
  {
    id: "06",
    title: "Nuts & Dry Fruits",
    subtitle: "Bulk Nuts & Dry Fruits Wholesale Dubai",
    desc: "Almonds, cashews, walnuts and more, graded by size and moisture-tested; dates, raisins, apricots and figs graded and SO2/microbial tested — all packed for bulk or retail-ready export.",
    items: [
      // Dry Nuts
      { name: "Almonds", subcategory: "Dry Nuts", image: "/images/products/dry-nuts/almonds.webp" },
      { name: "Cashews", subcategory: "Dry Nuts", image: "/images/products/dry-nuts/cashews.webp" },
      { name: "Walnuts", subcategory: "Dry Nuts", image: "/images/products/dry-nuts/walnuts.webp" },
      { name: "Pistachios", subcategory: "Dry Nuts", image: "/images/products/dry-nuts/pistachios.webp" },
      { name: "Peanuts", subcategory: "Dry Nuts", image: "/images/products/dry-nuts/peanuts.webp" },
      { name: "Hazelnuts", subcategory: "Dry Nuts", image: "/images/products/dry-nuts/hazelnuts.webp" },
      { name: "Pine Nuts", subcategory: "Dry Nuts", image: "/images/products/dry-nuts/pine-nuts.webp" },
      // Dry Fruits
      { name: "Dates", subcategory: "Dry Fruits", image: "/images/products/dry-fruits/dates.webp" },
      { name: "Raisins", subcategory: "Dry Fruits", image: "/images/products/dry-fruits/raisins.webp" },
      { name: "Apricots", subcategory: "Dry Fruits", image: "/images/products/dry-fruits/apricots.webp" },
      { name: "Figs", subcategory: "Dry Fruits", image: "/images/products/dry-fruits/figs.webp" },
      { name: "Prunes", subcategory: "Dry Fruits", image: "/images/products/dry-fruits/prunes.webp" },
    ],
  },
  {
    id: "07",
    title: "Processed & Canned Food",
    subtitle: "Canned Food Wholesale Supplier UAE",
    desc: "Canned vegetables, seafood, beans and fruit produced to food-safety standards and packed for bulk B2B distribution to distributors, retailers and foodservice buyers.",
    items: [
      { name: "Canned Vegetables", subcategory: "Canned Food", image: "/images/products/canned-food/canned-vegetables.webp" },
      { name: "Canned Fish/Seafood", subcategory: "Canned Food", image: "/images/products/canned-food/canned-fish-seafood.webp" },
      { name: "Canned Beans", subcategory: "Canned Food", image: "/images/products/canned-food/canned-beans.webp" },
      { name: "Canned Fruit", subcategory: "Canned Food", image: "/images/products/canned-food/canned-fruit.webp" },
    ],
  },
  {
    id: "08",
    title: "Fresh Exotic Fruits",
    subtitle: "Direct Air & Sea Freight Exotic Produce Dubai",
    desc: "Rare, tropical and high-demand exotic fruits sourced directly from primary growers across Latin America, Africa, and Southeast Asia. Dispatched under stringently monitored cold chains.",
    items: [
      { name: "Granadilla", latin: "Passiflora ligularis", subcategory: "Exotic Fruits", image: "/images/products/granadilla.webp" },
      { name: "Dragon Fruit", latin: "Selenicereus megalanthus", subcategory: "Exotic Fruits", image: "/images/products/dragonfruit.webp" },
      { name: "Lulo", latin: "Solanum quitoense", subcategory: "Exotic Fruits", image: "/images/products/lulosolanum.webp" },
      { name: "Baby Banana", latin: "Musa acuminata", subcategory: "Exotic Fruits", image: "/images/products/Babybanana.webp" },
      { name: "Fig", latin: "Ficus carica", subcategory: "Exotic Fruits", image: "/images/products/Figficus.webp" },
      { name: "Purple Passion Fruit", latin: "Passiflora edulis f. edulis", subcategory: "Exotic Fruits", image: "/images/products/Purplepassionfruit.webp" },
      { name: "Passion Fruit", latin: "Passiflora edulis", subcategory: "Exotic Fruits", image: "/images/products/Passionfruit.webp" },
      { name: "Tommy Mango", latin: "Mangifera indica 'Tommy Atkins'", subcategory: "Exotic Fruits", image: "/images/products/tomymango.webp" },
      { name: "Soursop", latin: "Annona muricata", subcategory: "Exotic Fruits", image: "/images/products/soursop.webp" },
      { name: "Golden Berries", latin: "Physalis peruviana", subcategory: "Exotic Fruits", image: "/images/products/goldenberries.webp" },
      { name: "Mangosteen", latin: "Garcinia mangostana", subcategory: "Exotic Fruits", image: "/images/products/mangostine.webp" },
      { name: "Tamarillo", latin: "Solanum betaceum", subcategory: "Exotic Fruits", image: "/images/products/tamarallio.webp" },
      { name: "Hass Avocado", latin: "Persea americana", subcategory: "Exotic Fruits", image: "/images/products/hassavacado.webp" },
      { name: "Tahiti Lemon", latin: "Citrus x latifolia", subcategory: "Exotic Fruits", image: "/images/products/tahitilemon.webp" },
      { name: "Golden Pineapple", latin: "Ananas comosus", subcategory: "Exotic Fruits", image: "/images/products/goldenpineapple.webp" },
      { name: "Cavendish Banana", latin: "Musa acuminata", subcategory: "Exotic Fruits", image: "/images/products/cavendishbanana.webp" },
      { name: "Harton Banana", latin: "Musa paradisiaca", subcategory: "Exotic Fruits", image: "/images/products/hartonbanana.webp" },
      { name: "Cocoa", latin: "Theobroma cacao", subcategory: "Exotic Fruits", image: "/images/products/cocoa.webp" },
      { name: "Valencia Orange", latin: "Citrus x sinensis", subcategory: "Exotic Fruits", image: "/images/products/valenciaorange.webp" },
    ],
  },
  {
    id: "09",
    title: "Fresh Common Fruits",
    subtitle: "Commercial Grade Wholesale Fresh Fruit Importer UAE",
    desc: "High-turnover commercial fresh fruits imported continuously from verified orchards globally. Graded for brix content, size, and shelf-life firmness.",
    items: [
      { name: "Kiwi", subcategory: "Common Fruits", image: "/images/products/kiwi.webp" },
      { name: "Strawberry", subcategory: "Common Fruits", image: "/images/products/strawberry.webp" },
      { name: "Blueberry", subcategory: "Common Fruits", image: "/images/products/blueberry.webp" },
      { name: "Nectarine", subcategory: "Common Fruits", image: "/images/products/nectarine.webp" },
      { name: "Plum", subcategory: "Common Fruits", image: "/images/products/plum.webp" },
      { name: "Damascus", subcategory: "Common Fruits", image: "/images/products/damascus.webp" },
      { name: "Grape", latin: "Flame | Red Globe | Thompson", subcategory: "Common Fruits", image: "/images/products/grape.webp" },
      { name: "Cherry", subcategory: "Common Fruits", image: "/images/products/cherry.webp" },
    ],
  },
  {
    id: "10",
    title: "Dehydrated & Frozen Produce",
    subtitle: "IQF Frozen & Dehydrated Fruit Supplier Dubai",
    desc: "Individual Quick Frozen (IQF) berries and fruit cuts alongside clean dehydrated produce for food service, manufacturers, and bulk distribution.",
    items: [
      { name: "Frozen Strawberries", subcategory: "Frozen Fruit", image: "/images/products/frozen strawberries copy.webp" },
      { name: "Frozen Blueberries", subcategory: "Frozen Fruit", image: "/images/products/frozen blueberries copy.webp" },
      { name: "Frozen Cherries", subcategory: "Frozen Fruit", image: "/images/products/frozen cherries copy.webp" },
      { name: "Frozen Kiwi", latin: "Slices | Cubes | Cut in half", subcategory: "Frozen Fruit", image: "/images/products/frozen kiwi copy.webp" },
    ],
  },
];

export const faqsData = [
  { q: "What food products can be imported in bulk to the UAE?", a: "Bulk food products imported to the UAE span grains and cereals, spices, pulses and beans, edible oils and oil seeds, frozen poultry, dry nuts and dry fruits, canned food, and fresh exotic/common produce — all sourced globally and delivered in bulk." },
  { q: "What is the minimum order quantity for bulk food in Dubai?", a: "Minimum order quantities vary by product and packing format, often starting at one pallet or a full container load. Mintrix Trading confirms the exact MOQ per item in its 24-hour quotation, alongside packing format and pricing." },
  { q: "Can I order products from more than one category in a single shipment?", a: "Yes. Mintrix Trading regularly consolidates multiple categories — for example rice, spices and dry fruits — into a single container to reduce freight cost, provided packing and handling requirements are compatible." },
  { q: "Do you supply restaurants, supermarkets and hotels directly?", a: "Yes. Mintrix Trading supplies restaurants, supermarkets, hotels, catering companies and distributors directly, in addition to importers and wholesalers, with volumes and packing formats matched to each buyer type." },
];