// data/categoryContent.ts

export interface CategorySpec {
  product: string;
  packing: string;
  notes: string;
}

export interface CategoryProductType {
  title: string;
  description: string;
  q: string;
  a: string;
}

export interface CategoryContent {
  slug: string;
  meta: {
    title: string;
    description: string;
    keywords: string;
  };
  hero: {
    breadcrumb: string;
    headline: string;
    intro: string;
  };
  benefits: string[];
  productTypes: CategoryProductType[];
  packingTable: CategorySpec[];
  faqs: { q: string; a: string }[];
  cta: {
    header: string;
    text: string;
    buttonText: string;
  };
}

export const categoryDetailedData: Record<string, CategoryContent> = {
  "dehydrated-and-frozen-produce": { // Matches the slugified category title
    slug: "dehydrated-and-frozen-produce",
    meta: {
      title: "Frozen & Dehydrated Produce Supplier UAE | Mintrix Trading",
      description: "Frozen and dehydrated produce supplier in the UAE — frozen vegetables, IQF fruit and dehydrated onion/garlic, extended shelf life. Quote in 24h.",
      keywords: "frozen produce supplier UAE, frozen vegetables bulk supplier UAE, dehydrated onion supplier UAE, IQF frozen fruit importer Dubai, frozen potato products supplier UAE"
    },
    hero: {
      breadcrumb: "Home / Products / Fresh Produce / Fruits & Veg / Dehydrated/Frozen Produce",
      headline: "Frozen and dehydrated produce supplier in the UAE — extended shelf life, sourced worldwide",
      intro: "Mintrix Trading supplies frozen and dehydrated fruit and vegetables in bulk to food-manufacturing and foodservice buyers across the UAE and internationally — frozen vegetables, IQF frozen fruit, dehydrated onion and garlic, and frozen potato products, all processed to extend shelf life without relying on a continuous fresh cold chain."
    },
    benefits: [
      "Processed and frozen or dehydrated to extend shelf life for planned, longer-term supply",
      "Packing formats matched to your channel — retail bags, catering packs or bulk cartons",
      "Frozen goods shipped in temperature-controlled reefer/freezer containers",
      "Halal, FDA, Certificate of Origin and phytosanitary documentation prepared for every order",
      "A dedicated trade manager and a full quotation within 24 hours"
    ],
    productTypes: [
      {
        title: "1. Frozen Mixed Vegetables bulk supplier UAE",
        description: "Blanched and quick-frozen vegetable mixes supplied to foodservice and food-manufacturing buyers as a convenient, extended-shelf-life alternative to fresh produce.",
        q: "Where can I buy frozen mixed vegetables in bulk in the UAE?",
        a: "You can buy frozen mixed vegetables in bulk in the UAE from a supplier blanching and quick-freezing produce. Mintrix Trading supplies frozen mixed vegetables in bulk cartons, shipped in freezer containers, with worldwide delivery."
      },
      {
        title: "2. Frozen Peas bulk supplier UAE",
        description: "Quick-frozen green peas supplied in bulk to foodservice and food-manufacturing buyers, offering consistent quality year-round.",
        q: "Where can I buy frozen peas in bulk in the UAE?",
        a: "You can buy frozen peas in bulk in the UAE from a supplier quick-freezing produce for consistent year-round quality. Mintrix Trading supplies frozen peas in bulk cartons, shipped in freezer containers, with worldwide delivery."
      },
      {
        title: "3. Frozen Corn bulk supplier UAE",
        description: "Quick-frozen sweetcorn kernels supplied to foodservice, retail and food-manufacturing buyers as a convenient year-round ingredient.",
        q: "Where can I buy frozen corn in bulk in the UAE?",
        a: "You can buy frozen corn in bulk in the UAE from a supplier quick-freezing sweetcorn kernels. Mintrix Trading supplies frozen corn in bulk cartons, shipped in freezer containers, with worldwide delivery."
      },
      {
        title: "4. IQF Frozen Fruit importer Dubai",
        description: "Individually quick-frozen (IQF) fruit pieces, supplied loose-frozen for easy portioning by food-manufacturing, beverage and foodservice buyers.",
        q: "Where can I buy IQF frozen fruit in bulk in Dubai?",
        a: "You can buy IQF frozen fruit in bulk in Dubai from a supplier individually quick-freezing fruit pieces. Mintrix Trading supplies IQF frozen fruit in bulk cartons, shipped in freezer containers, with worldwide delivery."
      },
      {
        title: "5. Frozen Potato Products supplier UAE",
        description: "French fries and other processed potato products, par-fried and frozen for foodservice buyers needing a quick-prep menu item.",
        q: "Where can I buy frozen potato products in bulk in the UAE?",
        a: "You can buy frozen potato products in bulk in the UAE from a supplier offering par-fried, frozen formats. Mintrix Trading supplies frozen potato products in bulk cartons, shipped in freezer containers, with worldwide delivery."
      },
      {
        title: "6. Dehydrated Onion supplier UAE",
        description: "Dried onion flakes, granules or powder, supplied to food-manufacturing and foodservice buyers as a shelf-stable alternative to fresh onion.",
        q: "Where can I buy dehydrated onion in bulk in the UAE?",
        a: "You can buy dehydrated onion in bulk in the UAE from a supplier drying onion into flakes, granules or powder. Mintrix Trading supplies dehydrated onion packed for bulk distribution, with worldwide delivery."
      },
      {
        title: "7. Dehydrated Garlic supplier UAE",
        description: "Dried garlic flakes, granules or powder, supplied to food-manufacturing and foodservice buyers as a shelf-stable alternative to fresh garlic.",
        q: "Where can I buy dehydrated garlic in bulk in the UAE?",
        a: "You can buy dehydrated garlic in bulk in the UAE from a supplier drying garlic into flakes, granules or powder. Mintrix Trading supplies dehydrated garlic packed for bulk distribution, with worldwide delivery."
      }
    ],
    packingTable: [
      { product: "Frozen Mixed Vegetables", packing: "Bulk cartons, freezer container", notes: "Blanched and quick-frozen" },
      { product: "Frozen Peas", packing: "Bulk cartons, freezer container", notes: "Quick-frozen, year-round" },
      { product: "Frozen Corn", packing: "Bulk cartons, freezer container", notes: "Quick-frozen kernels" },
      { product: "IQF Frozen Fruit", packing: "Bulk cartons, freezer container", notes: "Loose-frozen, easy portioning" },
      { product: "Frozen Potato Products", packing: "Bulk cartons, freezer container", notes: "Par-fried, quick-prep" },
      { product: "Dehydrated Onion", packing: "Bags, drums, bulk container", notes: "Flakes, granules or powder" },
      { product: "Dehydrated Garlic", packing: "Bags, drums, bulk container", notes: "Flakes, granules or powder" }
    ],
    faqs: [
      {
        q: "What frozen and dehydrated products does Mintrix Trading supply?",
        a: "Mintrix Trading supplies frozen mixed vegetables, frozen peas and corn, IQF frozen fruit, frozen potato products, and dehydrated onion and garlic, all processed to extend shelf life for bulk B2B distribution."
      },
      {
        q: "What's the difference between frozen and dehydrated produce?",
        a: "Frozen produce is blanched or IQF-frozen and requires freezer storage, while dehydrated produce has moisture removed and is shelf-stable at room temperature. Mintrix Trading supplies both, matched to your storage and handling capability."
      },
      {
        q: "What is the minimum order quantity for frozen or dehydrated produce?",
        a: "Minimum order quantities vary by product and typically start at a full freezer container or bulk pallet load. Mintrix Trading confirms the exact MOQ in its 24-hour quotation."
      }
    ],
    cta: {
      header: "Need a frozen or dehydrated produce spec sheet?",
      text: "Tell us the product, volume and destination port, and Mintrix Trading will confirm within the hour and return a full quotation within 24 hours.",
      buttonText: "Request a Quote"
    }
  },


  "edible-oils-and-oil-seeds": {
    slug: "edible-oils-and-oil-seeds",
    meta: {
      title: "Edible Oils & Oil Seeds Wholesale Dubai | Mintrix Trading",
      description: "Bulk cooking oil and oil seeds wholesale in Dubai — sunflower, palm, sesame and more. Refined, tested, delivered worldwide. Quote in 24h.",
      keywords: "edible oils and oil seeds supplier UAE, cooking oil wholesale Dubai, edible oil importer UAE, oil seeds bulk supplier UAE, sunflower oil bulk supplier UAE"
    },
    hero: {
      breadcrumb: "Home / Products / Edible Oils & Oil Seeds",
      headline: "Edible Oils & Oil Seeds supplier in the UAE — bulk cooking oil and oil seeds, sourced worldwide",
      intro: "Mintrix Trading is a bulk edible oils and oil seeds wholesale supplier serving the UAE and international buyers. Within this category we source two families — cooking oil and oil seeds — each refined or cleaned to specification, tested at origin, and packed in bulk drums, flexitanks or containers."
    },
    benefits: [
      "FFA, colour and moisture verification before every shipment leaves origin",
      "Packing formats matched to buyer type — drums, flexitanks, bulk containers or retail-ready bags",
      "One quotation covering both cooking oil and oil seeds if you're ordering across the category",
      "Halal, FDA, Certificate of Origin and phytosanitary documentation prepared for every order",
      "A dedicated trade manager and a full quotation within 24 hours"
    ],
    productTypes: [
      {
        title: "1. Cooking Oil Wholesale Dubai",
        description: "Grade-1 refined cooking oils, FFA and colour verified, supplied in bulk drums, flexitanks or containers — sunflower oil is Mintrix Trading's highest-volume cooking oil order, with seven further oil types available.",
        q: "Where can I buy edible oil in bulk in Dubai?",
        a: "You can buy edible oil in bulk in Dubai from a wholesale supplier offering sunflower, palm and soybean oil. Mintrix Trading supplies Grade-1 refined oils in container volume, FFA and colour verified, with worldwide delivery."
      },
      {
        title: "2. Oil Seeds Bulk Supplier UAE",
        description: "Cleaned, graded and moisture-tested oil seeds — sesame seeds are Mintrix Trading's highest-volume order in this family, with sunflower seeds, flaxseed and chia seeds available for specialty and health-food buyers.",
        q: "Where can I buy sesame seeds in bulk in the UAE?",
        a: "You can buy sesame seeds in bulk in the UAE from a supplier cleaning and grading before export. Mintrix Trading supplies moisture-tested sesame seeds packed in bulk or retail-ready bags, with worldwide delivery."
      }
    ],
    packingTable: [
      { 
        product: "Cooking Oil (Bulk)", 
        packing: "Bulk drums, flexitanks, ISO tank containers", 
        notes: "Grade-1 refined, FFA & colour verified" 
      },
      { 
        product: "Cooking Oil (Retail)", 
        packing: "Retail-ready bottles or jerrycans", 
        notes: "Available for smaller volume orders" 
      },
      { 
        product: "Oil Seeds", 
        packing: "Bulk or retail-ready bags", 
        notes: "Cleaned, graded, and moisture-tested" 
      }
    ],
    faqs: [
      {
        q: "What edible oils and oil seeds does Mintrix Trading supply?",
        a: "Mintrix Trading supplies cooking oils — including sunflower, palm, soybean, corn, canola, olive, blended vegetable and sesame oil — and oil seeds, including sesame, sunflower, flaxseed and chia seeds, all sourced globally and delivered in bulk."
      },
      {
        q: "What packing formats are available for edible oils?",
        a: "Edible oils are available in bulk drums, flexitanks or ISO tank containers for large orders, and in retail-ready bottles or jerrycans for smaller volumes. Packing format is confirmed in your 24-hour quotation."
      },
      {
        q: "Are cooking oils tested before shipment?",
        a: "Yes. Every cooking oil shipment is tested for free fatty acid (FFA) content and colour at origin before packing, as part of Mintrix Trading's standard quality-verification process."
      }
    ],
    cta: {
      header: "Need an oil or oil-seed spec sheet?",
      text: "Tell us the product, grade, volume and destination, and Mintrix Trading will confirm within the hour and return a full quotation within 24 hours.",
      buttonText: "Request a Quote"
    }
  },


  "fresh-common-fruits": {
    slug: "fresh-common-fruits",
    meta: {
      title: "Fresh Fruit Wholesale Supplier UAE | Mintrix",
      description: "Fresh common fruit wholesale supplier in the UAE — apples, oranges, bananas and more, handled under a controlled cold chain. Quote in 24h.",
      keywords: "fresh fruit wholesale supplier UAE, bulk apples supplier UAE, oranges importer Dubai, bananas wholesale UAE, fresh fruit importer Dubai"
    },
    hero: {
      breadcrumb: "Home / Products / Fresh Produce / Fruits & Veg / Fresh Common Fruits",
      headline: "Fresh fruit wholesale supplier in the UAE — apples, oranges, bananas and more",
      intro: "Mintrix Trading supplies fresh, everyday fruit in bulk to buyers across the UAE and internationally — apples, oranges, bananas and a wider range of common varieties, graded to consistent size and quality and shipped under a controlled cold chain."
    },
    benefits: [
      "Controlled cold chain maintained from origin to destination port",
      "Graded to consistent size and quality specification, batch to batch",
      "Packing formats matched to your channel — cartons, pallets or reefer container loads",
      "Halal, FDA, Certificate of Origin and phytosanitary documentation prepared for every order",
      "A dedicated trade manager and a full quotation within 24 hours"
    ],
    productTypes: [
      {
        title: "1. Apples supplier UAE",
        description: "Sourced across multiple varieties and origins to maintain year-round supply, apples are Mintrix Trading's highest-demand common fruit, graded by size and colour.",
        q: "Where can I buy apples in bulk in the UAE?",
        a: "You can buy apples in bulk in the UAE from a supplier sourcing across multiple origins for year-round supply. Mintrix Trading supplies apples graded by size and colour, packed in cartons under a cold chain, with worldwide delivery."
      },
      {
        title: "2. Oranges importer Dubai",
        description: "Sourced by season across multiple growing regions, oranges are supplied for retail, foodservice and juicing buyers, graded by size and brix level.",
        q: "Where can I buy oranges in bulk in Dubai?",
        a: "You can buy oranges in bulk in Dubai from a supplier sourcing by season across multiple regions. Mintrix Trading supplies oranges graded by size and brix level, packed under a cold chain, with worldwide delivery."
      },
      {
        title: "3. Bananas wholesale UAE",
        description: "Sourced at controlled ripeness stages to match distribution timelines, bananas are supplied to retail and foodservice buyers year-round.",
        q: "Where can I buy bananas in bulk in the UAE?",
        a: "You can buy bananas in bulk in the UAE from a supplier sourcing at controlled ripeness stages. Mintrix Trading supplies bananas packed in cartons under a cold chain, with worldwide delivery."
      },
      {
        title: "4. Grapes bulk supplier UAE",
        description: "Sourced across seedless and seeded varieties by season, grapes are supplied to retail and foodservice buyers, graded by bunch size and colour.",
        q: "Where can I buy grapes in bulk in the UAE?",
        a: "You can buy grapes in bulk in the UAE from a supplier sourcing seedless and seeded varieties by season. Mintrix Trading supplies grapes packed in cartons under a cold chain, with worldwide delivery."
      },
      {
        title: "5. Watermelon bulk supplier UAE",
        description: "Sourced by season and graded by weight, watermelon is supplied to retail and foodservice buyers in whole or half-cut formats.",
        q: "Where can I buy watermelon in bulk in the UAE?",
        a: "You can buy watermelon in bulk in the UAE from a supplier grading by weight and season. Mintrix Trading supplies watermelon packed in cartons or bins under a cold chain, with worldwide delivery."
      },
      {
        title: "6. Lemons importer UAE",
        description: "Sourced across multiple origins for year-round supply, lemons are supplied to retail, foodservice and food-manufacturing buyers, graded by size.",
        q: "Where can I buy lemons in bulk in the UAE?",
        a: "You can buy lemons in bulk in the UAE from a supplier sourcing across multiple origins for year-round supply. Mintrix Trading supplies lemons graded by size, packed under a cold chain, with worldwide delivery."
      },
      {
        title: "7. Pears wholesale supplier UAE",
        description: "Sourced by season across multiple varieties, pears are supplied to retail and foodservice buyers, graded by size and ripeness stage.",
        q: "Where can I buy pears in bulk in the UAE?",
        a: "You can buy pears in bulk in the UAE from a supplier sourcing by season and grading by ripeness stage. Mintrix Trading supplies pears packed in cartons under a cold chain, with worldwide delivery."
      }
    ],
    packingTable: [
      { product: "Apples", packing: "Cartons, pallets, reefer container", notes: "Multiple origins, year-round" },
      { product: "Oranges", packing: "Cartons, pallets, reefer container", notes: "Graded by size and brix level" },
      { product: "Bananas", packing: "Cartons, pallets, reefer container", notes: "Controlled ripeness stage" },
      { product: "Grapes", packing: "Cartons, reefer container", notes: "Seedless and seeded varieties" },
      { product: "Watermelon", packing: "Bins, cartons, reefer container", notes: "Graded by weight, seasonal" },
      { product: "Lemons", packing: "Cartons, pallets, reefer container", notes: "Multiple origins, year-round" },
      { product: "Pears", packing: "Cartons, pallets, reefer container", notes: "Seasonal, graded by ripeness" }
    ],
    faqs: [
      {
        q: "What common fruits does Mintrix Trading supply?",
        a: "Mintrix Trading supplies everyday fruit including apples, oranges, bananas, grapes, watermelon, lemons and pears, graded to consistent size and quality and shipped under a controlled cold chain."
      },
      {
        q: "Is fresh fruit available year-round?",
        a: "Availability depends on the fruit — apples and lemons are sourced across multiple origins for year-round supply, while others like watermelon and pears follow seasonal windows. Mintrix Trading confirms current availability at the time of quotation."
      },
      {
        q: "What is the minimum order quantity for fresh fruit?",
        a: "Minimum order quantities for fresh fruit vary by product and typically start at a full reefer container or carton pallet load. Mintrix Trading confirms the exact MOQ in its 24-hour quotation."
      }
    ],
    cta: {
      header: "Need current fruit availability or a spec sheet?",
      text: "Tell us the fruit, volume and destination port, and Mintrix Trading will confirm within the hour and return a full quotation within 24 hours.",
      buttonText: "Request a Quote"
    }
  },


  "fresh-exotic-fruits": {
    slug: "fresh-exotic-fruits",
    meta: {
      title: "Exotic Fruit Importer Dubai | Mintrix",
      description: "Fresh exotic fruit importer in Dubai — mango, avocado, dragon fruit and more, handled under a controlled cold chain from origin. Quote in 24h.",
      keywords: "exotic fruit importer Dubai, bulk mango supplier UAE, avocado importer Dubai, dragon fruit wholesale UAE, exotic fruit wholesale supplier UAE"
    },
    hero: {
      breadcrumb: "Home / Products / Fresh Produce / Fruits & Veg / Fresh Exotic Fruits",
      headline: "Exotic fruit importer in Dubai — mango, avocado, dragon fruit and more",
      intro: "Mintrix Trading imports fresh exotic fruit in bulk to buyers across the UAE and internationally — mango, avocado, dragon fruit and a wider range of specialty varieties, sourced from origin markets and shipped under a controlled cold chain to preserve quality on arrival."
    },
    benefits: [
      "Controlled cold chain maintained from origin to destination port",
      "Sourced from origin markets matched to each fruit's peak season",
      "Packing formats matched to your channel — cartons, pallets or reefer container loads",
      "Halal, FDA, Certificate of Origin and phytosanitary documentation prepared for every order",
      "A dedicated trade manager and a full quotation within 24 hours"
    ],
    productTypes: [
      {
        title: "1. Mango supplier UAE",
        description: "Available across multiple varieties sourced by season, mango is Mintrix Trading's highest-demand exotic fruit, supplied to retail, foodservice and food-manufacturing buyers.",
        q: "Where can I buy mango in bulk in the UAE?",
        a: "You can buy mango in bulk in the UAE from a supplier sourcing by season and shipping under a controlled cold chain. Mintrix Trading supplies mango packed in cartons or pallets, with worldwide delivery."
      },
      {
        title: "2. Avocado importer Dubai",
        description: "Sourced at varying ripeness stages to match distribution timelines, avocado is supplied to retail and foodservice buyers with growing UAE demand.",
        q: "Where can I buy avocado in bulk in Dubai?",
        a: "You can buy avocado in bulk in Dubai from a supplier sourcing at controlled ripeness stages. Mintrix Trading supplies avocado packed in cartons or pallets under a cold chain, with worldwide delivery."
      },
      {
        title: "3. Dragon Fruit wholesale UAE",
        description: "A visually distinctive specialty fruit sourced from Southeast Asian and Central American growing regions, supplied to retail and specialty foodservice buyers.",
        q: "Where can I buy dragon fruit in bulk in the UAE?",
        a: "You can buy dragon fruit in bulk in the UAE from a supplier sourcing from Southeast Asian and Central American growers. Mintrix Trading supplies dragon fruit packed in cartons under a cold chain, with worldwide delivery."
      },
      {
        title: "4. Passion Fruit bulk supplier UAE",
        description: "Sourced whole or as pulp for food-manufacturing buyers, passion fruit is supplied to retail, foodservice and beverage-industry customers.",
        q: "Where can I buy passion fruit in bulk in the UAE?",
        a: "You can buy passion fruit in bulk in the UAE from a supplier offering whole fruit or pulp formats. Mintrix Trading supplies passion fruit packed under a controlled cold chain, with worldwide delivery."
      },
      {
        title: "5. Rambutan importer UAE",
        description: "A Southeast Asian specialty fruit with a short shelf life, sourced by season and shipped under tight cold-chain control to preserve freshness.",
        q: "Where can I buy rambutan in bulk in the UAE?",
        a: "You can buy rambutan in bulk in the UAE from a supplier sourcing by season with tight cold-chain control. Mintrix Trading supplies rambutan packed in cartons, with worldwide delivery."
      },
      {
        title: "6. Lychee wholesale supplier UAE",
        description: "A fragrant, short-season specialty fruit sourced from Southeast and East Asian growing regions for retail and specialty foodservice buyers.",
        q: "Where can I buy lychee in bulk in the UAE?",
        a: "You can buy lychee in bulk in the UAE from a supplier sourcing from Southeast and East Asian growers. Mintrix Trading supplies lychee packed under a controlled cold chain, with worldwide delivery."
      },
      {
        title: "7. Kiwi fruit bulk supplier UAE",
        description: "Sourced from multiple hemispheres to extend the supply season, kiwi is supplied to retail and foodservice buyers year-round.",
        q: "Where can I buy kiwi in bulk in the UAE?",
        a: "You can buy kiwi in bulk in the UAE from a supplier sourcing across hemispheres for year-round supply. Mintrix Trading supplies kiwi packed in cartons under a cold chain, with worldwide delivery."
      },
      {
        title: "8. Pomegranate bulk supplier UAE",
        description: "Sourced by season and graded by size, pomegranate is supplied whole or as arils for retail and food-manufacturing buyers.",
        q: "Where can I buy pomegranate in bulk in the UAE?",
        a: "You can buy pomegranate in bulk in the UAE from a supplier grading by size and season. Mintrix Trading supplies whole pomegranate packed under a controlled cold chain, with worldwide delivery."
      }
    ],
    packingTable: [
      { product: "Mango", packing: "Cartons, pallets, reefer container", notes: "Multiple varieties, seasonal" },
      { product: "Avocado", packing: "Cartons, pallets, reefer container", notes: "Controlled ripeness stage" },
      { product: "Dragon Fruit", packing: "Cartons, reefer container", notes: "Southeast Asia / Central America origin" },
      { product: "Passion Fruit", packing: "Cartons or pulp packs, reefer container", notes: "Whole fruit or pulp format" },
      { product: "Rambutan", packing: "Cartons, reefer container", notes: "Short shelf life, seasonal" },
      { product: "Lychee", packing: "Cartons, reefer container", notes: "Short season, Southeast/East Asia origin" },
      { product: "Kiwi", packing: "Cartons, pallets, reefer container", notes: "Cross-hemisphere sourcing, year-round" },
      { product: "Pomegranate", packing: "Cartons, pallets, reefer container", notes: "Whole or arils, seasonal" }
    ],
    faqs: [
      {
        q: "What exotic fruits does Mintrix Trading supply?",
        a: "Mintrix Trading supplies exotic fruit including mango, avocado, dragon fruit, passion fruit, rambutan, lychee, kiwi and pomegranate, sourced from origin markets and shipped under a controlled cold chain."
      },
      {
        q: "Is exotic fruit available year-round?",
        a: "Availability depends on the fruit — some varieties like mango and pomegranate are seasonal, while others such as kiwi are sourced across hemispheres to extend supply. Mintrix Trading confirms current availability at the time of quotation."
      },
      {
        q: "What is the minimum order quantity for exotic fruit?",
        a: "Minimum order quantities for exotic fruit vary by fruit and typically start at a full reefer container or carton pallet load. Mintrix Trading confirms the exact MOQ in its 24-hour quotation."
      }
    ],
    cta: {
      header: "Need current exotic fruit availability or a spec sheet?",
      text: "Tell us the fruit, volume and destination port, and Mintrix Trading will confirm within the hour and return a full quotation within 24 hours.",
      buttonText: "Request a Quote"
    }
  },


  "grains-and-cereals": {
    slug: "grains-and-cereals",
    meta: {
      title: "Grains & Cereals Wholesale Dubai | Rice & Flour",
      description: "Bulk rice and wheat flour wholesale supplier in Dubai. Sourced globally, moisture-tested and delivered worldwide. Quote in 24h.",
      keywords: "grains & cereals supplier UAE, bulk grains and cereals wholesale Dubai, grains and cereals exporter Dubai, bulk rice supplier Dubai, wheat flour bulk supplier UAE"
    },
    hero: {
      breadcrumb: "Home / Products / Grains & Cereals",
      headline: "Grains & Cereals supplier in Dubai — bulk rice and wheat flour, sourced worldwide",
      intro: "Mintrix Trading is a bulk grains and cereals wholesale supplier serving the UAE and international buyers. Within this category we source two families — rice and wheat flour — each from the growing regions and mills best suited to that grade, moisture-tested and packed to your specification before export."
    },
    benefits: [
      "Moisture-tested and graded before every shipment leaves origin",
      "Packing formats matched to buyer type — retail-ready bags or bulk container loads",
      "One quotation covering both rice and wheat flour if you're ordering across the category",
      "Halal, FDA, Certificate of Origin and phytosanitary documentation prepared for every order",
      "A dedicated trade manager and a full quotation within 24 hours"
    ],
    productTypes: [
      {
        title: "1. Bulk Rice Supplier Dubai",
        description: "Rice is Mintrix Trading's highest-volume grain — sourced from premium growing regions, moisture-tested and packed in 25kg/50kg bags or bulk containers. Eight varieties are available, from everyday long-grain to specialty sticky and black rice.",
        q: "Where can I buy basmati rice in bulk in the UAE?",
        a: "You can buy basmati rice in bulk in the UAE from a global food trading company that sources, tests and exports on your behalf. Mintrix Trading supplies basmati rice that is moisture-tested, sourced from verified growing regions and packed in 25kg/50kg bags or bulk containers, with worldwide delivery."
      },
      {
        title: "2. Wheat Flour Wholesale Supplier UAE",
        description: "Wheat flour is milled to consistent protein and ash specifications and packed for bulk or retail-ready supply — from everyday all-purpose flour to high-protein bread flour and semolina for specialty baking.",
        q: "Where can I buy wheat flour in bulk in the UAE?",
        a: "You can buy wheat flour in bulk in the UAE from a supplier that mills or sources to consistent protein and ash specifications. Mintrix Trading supplies all-purpose, whole wheat, bread flour and semolina, packed for bulk or retail-ready supply, with worldwide delivery."
      }
    ],
    packingTable: [
      { 
        product: "Rice (All Varieties)", 
        packing: "25kg/50kg bags, bulk containers", 
        notes: "Moisture-tested, graded at origin" 
      },
      { 
        product: "Wheat Flour", 
        packing: "25kg/50kg bags, bulk containers", 
        notes: "Consistent protein and ash specifications" 
      }
    ],
    faqs: [
      {
        q: "What grains and cereals does Mintrix Trading supply?",
        a: "Mintrix Trading supplies rice — including basmati, jasmine, parboiled, brown and specialty varieties — and wheat flour, including all-purpose, whole wheat, bread flour and semolina, all sourced globally and delivered in bulk."
      },
      {
        q: "What packing formats are available for rice and flour?",
        a: "Rice and wheat flour are available in 25kg or 50kg bags, or loaded loose or palletised into 20ft/40ft containers for larger orders. Packing format is confirmed in your 24-hour quotation."
      },
      {
        q: "Is the rice tested before shipment?",
        a: "Yes. Every rice shipment is moisture-tested and graded at origin before packing, with batch-label review as part of Mintrix Trading's standard quality-verification process."
      }
    ],
    cta: {
      header: "Need a rice or wheat flour spec sheet?",
      text: "Tell us the variety, grade, volume and destination, and Mintrix Trading will confirm within the hour and return a full quotation within 24 hours.",
      buttonText: "Request a Quote"
    }
  },


  "nuts-and-dry-fruits": {
    slug: "nuts-and-dry-fruits",
    meta: {
      title: "Bulk Nuts & Dry Fruits Wholesale Dubai | Mintrix",
      description: "Bulk dry nuts and dry fruits wholesale supplier in Dubai — almonds, cashews, dates, raisins and more, sourced globally. Quote in 24h.",
      keywords: "nuts and dry fruits supplier UAE, bulk almonds supplier UAE, dry fruits wholesale Dubai, dry nuts exporter UAE, dates bulk supplier UAE"
    },
    hero: {
      breadcrumb: "Home / Products / Nuts & Dry Fruits",
      headline: "Nuts & Dry Fruits supplier in Dubai — bulk dry nuts and dry fruits, sourced worldwide",
      intro: "Mintrix Trading is a bulk nuts and dry fruits wholesale supplier serving the UAE and international buyers. Within this category we source two families — dry nuts and dry fruits — each graded and tested before export, and packed for bulk or retail-ready supply."
    },
    benefits: [
      "Graded and moisture/microbial tested before every shipment leaves origin",
      "Packing formats matched to buyer type — retail-ready bags or bulk container loads",
      "One quotation covering both nuts and dry fruits if you're ordering across the category",
      "Halal, FDA, Certificate of Origin and phytosanitary documentation prepared for every order",
      "A dedicated trade manager and a full quotation within 24 hours"
    ],
    productTypes: [
      {
        title: "1. Dry Nuts Supplier UAE",
        description: "Almonds, cashews, walnuts and more, graded by size, moisture-tested and packed for bulk or retail-ready export — almonds and cashews are Mintrix Trading's highest-volume nut orders.",
        q: "Where can I buy almonds in bulk in the UAE?",
        a: "You can buy almonds in bulk in the UAE from a global food trading company that grades and moisture-tests before export. Mintrix Trading supplies almonds packed in bulk or retail-ready formats, with worldwide delivery."
      },
      {
        title: "2. Dry Fruits Wholesale Dubai",
        description: "Dates, raisins, apricots and figs, SO2 and microbial tested, graded and packed for bulk export — dates are Mintrix Trading's highest-volume dry fruit order, with the wider range available for retail and foodservice buyers.",
        q: "Where can I buy dates in bulk in the UAE?",
        a: "You can buy dates in bulk in the UAE from a supplier grading and SO2/microbial-testing before export. Mintrix Trading supplies dates packed in bulk or retail-ready formats, with worldwide delivery."
      }
    ],
    packingTable: [
      { 
        product: "Dry Nuts", 
        packing: "Retail-ready bags, 20ft/40ft containers", 
        notes: "Graded by size, moisture-tested" 
      },
      { 
        product: "Dry Fruits", 
        packing: "Retail-ready bags, 20ft/40ft containers", 
        notes: "Graded, SO2 & microbial tested" 
      }
    ],
    faqs: [
      {
        q: "What nuts and dry fruits does Mintrix Trading supply?",
        a: "Mintrix Trading supplies dry nuts — including almonds, cashews, walnuts, pistachios, peanuts, hazelnuts and pine nuts — and dry fruits, including dates, raisins, apricots, figs and prunes, all sourced globally and delivered in bulk."
      },
      {
        q: "What packing formats are available for nuts and dry fruits?",
        a: "Nuts and dry fruits are available in retail-ready bags or loaded loose or palletised into 20ft/40ft containers for larger orders. Packing format is confirmed in your 24-hour quotation."
      },
      {
        q: "Are dry fruits tested before shipment?",
        a: "Yes. Every dry fruit shipment is graded and tested for SO2 residue and microbial content at origin before packing, as part of Mintrix Trading's standard quality-verification process."
      }
    ],
    cta: {
      header: "Need a nuts or dry fruits spec sheet?",
      text: "Tell us the variety, grade, volume and destination, and Mintrix Trading will confirm within the hour and return a full quotation within 24 hours.",
      buttonText: "Request a Quote"
    }
  },



  "poultry-and-protein": {
    slug: "poultry-and-protein",
    meta: {
      title: "Halal Frozen Chicken Supplier UAE | Mintrix",
      description: "Halal-certified frozen chicken wholesale in Dubai — whole birds, parts and by-products, reefer-shipped worldwide. Quote in 24h.",
      keywords: "poultry and protein supplier UAE, halal frozen chicken supplier UAE, frozen chicken wholesale Dubai, frozen chicken exporter UAE, frozen chicken importer Dubai"
    },
    hero: {
      breadcrumb: "Home / Products / Poultry & Protein",
      headline: "Poultry & Protein supplier in the UAE — halal frozen chicken, sourced worldwide",
      intro: "Mintrix Trading is a bulk poultry and protein wholesale supplier serving the UAE and international buyers. Within this category we source frozen chicken — halal-certified, from verified export facilities — supplied as whole birds, parts or by-products in temperature-controlled reefer containers."
    },
    benefits: [
      "Sourced exclusively from halal-certified export facilities",
      "Cold chain maintained end to end in temperature-controlled reefer containers",
      "Whole, parts or by-product formats packed to your specification",
      "Halal, FDA, Certificate of Origin and phytosanitary documentation prepared for every order",
      "A dedicated trade manager and a full quotation within 24 hours"
    ],
    productTypes: [
      {
        title: "1. Frozen Chicken Supplier UAE",
        description: "Halal-certified frozen chicken sourced from verified export facilities, supplied as whole birds, cut parts or by-products — dispatched in temperature-controlled reefer containers to protect the cold chain from origin to your destination port.",
        q: "Is Mintrix Trading's frozen chicken halal certified?",
        a: "Yes. Mintrix Trading's frozen chicken is sourced from halal-certified export facilities and shipped in temperature-controlled reefer containers to maintain the cold chain from origin to destination."
      }
    ],
    packingTable: [
      { 
        product: "Frozen Chicken (Whole, Parts, By-products)", 
        packing: "Temperature-controlled reefer containers", 
        notes: "Halal-certified, cold chain maintained end-to-end" 
      }
    ],
    faqs: [
      {
        q: "What poultry products does Mintrix Trading supply?",
        a: "Mintrix Trading supplies halal-certified frozen chicken — whole birds, cut parts and by-products — sourced from verified export facilities and shipped in temperature-controlled reefer containers."
      },
      {
        q: "How is the cold chain maintained during shipping?",
        a: "Frozen chicken is loaded into temperature-controlled reefer containers at origin, with continuous monitoring throughout transit to maintain the required frozen temperature until it reaches your destination port."
      },
      {
        q: "What is the minimum order quantity for frozen chicken?",
        a: "Minimum order quantities for frozen chicken vary by product form and typically start at a full reefer container load. Mintrix Trading confirms the exact MOQ in its 24-hour quotation."
      }
    ],
    cta: {
      header: "Need a frozen chicken spec sheet or halal certificate?",
      text: "Tell us the product form, volume and destination port, and Mintrix Trading will confirm within the hour and return a full quotation within 24 hours.",
      buttonText: "Request a Quote"
    }
  },

  "processed-and-canned-food": {
    slug: "processed-and-canned-food",
    meta: {
      title: "Canned Food Wholesale Supplier UAE | Mintrix",
      description: "Bulk canned food wholesale supplier in the UAE — vegetables, seafood, beans and fruit, packed to food-safety standards. Quote in 24h.",
      keywords: "processed and canned food supplier UAE, canned food wholesale supplier UAE, canned seafood importer Dubai, canned vegetables bulk supplier UAE, canned goods exporter UAE"
    },
    hero: {
      breadcrumb: "Home / Products / Processed & Canned Food",
      headline: "Processed & Canned Food supplier in the UAE — bulk canned goods, sourced worldwide",
      intro: "Mintrix Trading is a bulk processed and canned food wholesale supplier serving the UAE and international buyers. Within this category we source canned food — vegetables, seafood, beans and fruit — produced to food-safety standards and packed for bulk B2B distribution."
    },
    benefits: [
      "Produced to food-safety standards and packed for bulk B2B distribution",
      "Packing formats matched to buyer type — case packs, pallets or full container loads",
      "One quotation covering multiple canned food lines if you're ordering across the range",
      "Halal, FDA, Certificate of Origin and phytosanitary documentation prepared for every order",
      "A dedicated trade manager and a full quotation within 24 hours"
    ],
    productTypes: [
      {
        title: "1. Canned Food Wholesale Supplier UAE",
        description: "Canned vegetables, seafood, beans and fruit produced to food-safety standards and packed for bulk B2B distribution to distributors, retailers and foodservice buyers — canned seafood is Mintrix Trading's highest-volume canned food order.",
        q: "Where can I buy canned seafood in bulk in the UAE?",
        a: "You can buy canned seafood in bulk in the UAE from a supplier producing to food-safety standards and packing for B2B distribution. Mintrix Trading supplies canned seafood packed for bulk or retail-ready distribution, with worldwide delivery."
      }
    ],
    packingTable: [
      { 
        product: "Canned Food (All Varieties)", 
        packing: "Case packs, pallets, full container loads", 
        notes: "Produced to food-safety standards, private-label available" 
      }
    ],
    faqs: [
      {
        q: "What canned food does Mintrix Trading supply?",
        a: "Mintrix Trading supplies canned vegetables, canned fish and seafood, canned beans and canned fruit, all produced to food-safety standards and packed for bulk B2B distribution."
      },
      {
        q: "Can you supply private-label canned food?",
        a: "Yes. Mintrix Trading can arrange private-label packaging for canned food orders on request, confirmed alongside product specification at the time of quotation."
      },
      {
        q: "What is the minimum order quantity for canned food?",
        a: "Minimum order quantities for canned food vary by product and case-pack format, typically starting at one pallet or a full container load. Mintrix Trading confirms the exact MOQ in its 24-hour quotation."
      }
    ],
    cta: {
      header: "Need a canned food spec sheet or sample?",
      text: "Tell us the product, case-pack format, volume and destination, and Mintrix Trading will confirm within the hour and return a full quotation within 24 hours.",
      buttonText: "Request a Quote"
    }
  },


  "pulses-and-legumes": {
    slug: "pulses-and-legumes",
    meta: {
      title: "Pulses & Beans Wholesale Supplier UAE | Mintrix Trading",
      description: "Bulk pulses and beans wholesale supplier in the UAE — chickpeas, lentils, kidney beans and more, graded and export-ready. Quote in 24h.",
      keywords: "pulses and legumes supplier UAE, pulses importer UAE, beans wholesale supplier UAE, legumes exporter Dubai, chickpeas bulk supplier UAE"
    },
    hero: {
      breadcrumb: "Home / Products / Pulses & Legumes",
      headline: "Pulses & Legumes supplier in the UAE — bulk pulses and beans, sourced worldwide",
      intro: "Mintrix Trading is a bulk pulses and legumes wholesale supplier serving the UAE and international buyers. Within this category we source two families — pulses and beans — each cleaned, graded and moisture-tested before export, and packed to your specification."
    },
    benefits: [
      "Cleaned, graded and moisture-tested before every shipment leaves origin",
      "Packing formats matched to buyer type — retail-ready bags or bulk container loads",
      "One quotation covering both pulses and beans if you're ordering across the category",
      "Halal, FDA, Certificate of Origin and phytosanitary documentation prepared for every order",
      "A dedicated trade manager and a full quotation within 24 hours"
    ],
    productTypes: [
      {
        title: "1. Pulses Importer UAE",
        description: "Chickpeas, lentils and dal varieties, cleaned, graded and moisture-tested for bulk export — Mintrix Trading's highest-volume pulse orders are chickpeas and masoor lentils, with the full dal range available on request.",
        q: "Where can I buy chickpeas in bulk in the UAE?",
        a: "You can buy chickpeas in bulk in the UAE from a global food trading company that cleans, grades and moisture-tests before export. Mintrix Trading supplies chickpeas packed in bulk or retail-ready bags, with worldwide delivery."
      },
      {
        title: "2. Beans Wholesale Supplier UAE",
        description: "Kidney, black, soy and navy beans sorted, graded and packed to buyer specification for bulk export — with pinto, butter/lima and adzuki beans available for specialty or smaller-volume orders.",
        q: "Where can I buy kidney beans in bulk in the UAE?",
        a: "You can buy kidney beans in bulk in the UAE from a supplier sorting and grading beans to buyer specification. Mintrix Trading supplies kidney beans packed in bulk or retail-ready bags, with worldwide delivery."
      }
    ],
    packingTable: [
      { 
        product: "Pulses (Chickpeas, Lentils, Dal)", 
        packing: "25kg/50kg bags, bulk containers", 
        notes: "Cleaned, graded, moisture-tested" 
      },
      { 
        product: "Beans (Kidney, Black, Soy, Navy)", 
        packing: "25kg/50kg bags, bulk containers", 
        notes: "Sorted, graded to buyer specification" 
      }
    ],
    faqs: [
      {
        q: "What pulses and legumes does Mintrix Trading supply?",
        a: "Mintrix Trading supplies pulses — including chickpeas, masoor lentils, moong dal, urad, toor and yellow peas — and beans, including kidney, black, soy, navy, pinto, lima and adzuki beans, all sourced globally and delivered in bulk."
      },
      {
        q: "What packing formats are available for pulses and beans?",
        a: "Pulses and beans are available in 25kg or 50kg bags, or loaded loose or palletised into 20ft/40ft containers for larger orders. Packing format is confirmed in your 24-hour quotation."
      },
      {
        q: "Are pulses and beans tested before shipment?",
        a: "Yes. Every pulse and bean shipment is cleaned, graded and moisture-tested at origin before packing, as part of Mintrix Trading's standard quality-verification process."
      }
    ],
    cta: {
      header: "Need a pulses or beans spec sheet?",
      text: "Tell us the variety, grade, volume and destination, and Mintrix Trading will confirm within the hour and return a full quotation within 24 hours.",
      buttonText: "Request a Quote"
    }
  },


  "spices-and-seasonings": {
    slug: "spices-and-seasonings",
    meta: {
      title: "Bulk Spices Wholesale Supplier Dubai | Mintrix Trading",
      description: "Bulk spices wholesale supplier in Dubai — turmeric, chili, cumin and more. Purity-tested, sourced globally, delivered worldwide. Quote in 24h.",
      keywords: "spices wholesale supplier Dubai, bulk turmeric supplier UAE, cumin wholesale Dubai, bulk spices supplier Dubai, spices exporter Dubai"
    },
    hero: {
      breadcrumb: "Home / Products / Spices & Seasonings",
      headline: "Bulk spices wholesale supplier in Dubai",
      intro: "Mintrix Trading supplies spices in bulk to buyers across the UAE and internationally — from high-volume staples like turmeric and cumin to whole spices such as cardamom, cinnamon and cloves. Every spice is sourced from the growing region best suited to it, tested for purity, colour and pesticide residue, and packed to your specification before export."
    },
    benefits: [
      "Direct relationships with growers and processors — no unnecessary middlemen",
      "Purity, colour and pesticide-residue testing at origin before every shipment",
      "Whole, ground or blended formats packed to your specification",
      "Halal, FDA, Certificate of Origin and phytosanitary documentation prepared for every order",
      "A dedicated trade manager and a full quotation within 24 hours"
    ],
    productTypes: [
      {
        title: "1. Turmeric supplier UAE",
        description: "A bright-yellow rhizome spice valued for its colour, flavour and curcumin content, widely used across South Asian and Middle Eastern cooking as well as food-colouring applications.",
        q: "Where can I buy turmeric in bulk in the UAE?",
        a: "You can buy turmeric in bulk in the UAE from a supplier sourcing directly from growing regions and testing for curcumin content and purity. Mintrix Trading supplies whole and ground turmeric packed in bulk or retail-ready bags, with worldwide delivery."
      },
      {
        title: "2. Chili supplier Dubai",
        description: "Dried whole, crushed or powdered chili in a range of heat levels and colours, sourced to match different regional cuisines and food-manufacturing specifications.",
        q: "Where can I buy chili in bulk in Dubai?",
        a: "You can buy chili in bulk in Dubai from a supplier sourcing whole, crushed or powdered formats. Mintrix Trading supplies chili tested for colour and heat consistency, packed in bulk or retail-ready bags, with worldwide delivery."
      },
      {
        title: "3. Cumin wholesale Dubai",
        description: "An earthy, warm-flavoured seed spice, one of the most widely traded spices in the region, used whole or ground across savoury cooking and spice blends.",
        q: "Where can I buy cumin in bulk in Dubai?",
        a: "You can buy cumin in bulk in Dubai from a supplier sourcing whole or ground cumin seed. Mintrix Trading supplies purity-tested cumin packed in bulk or retail-ready bags, with worldwide delivery."
      },
      {
        title: "4. Coriander seed supplier UAE",
        description: "Citrusy, mild seed spice used whole or ground across curries, spice blends and pickling — typically sourced alongside cumin for combined orders.",
        q: "Where can I buy coriander seed in bulk in the UAE?",
        a: "You can buy coriander seed in bulk in the UAE from a supplier sourcing whole or ground coriander. Mintrix Trading supplies purity-tested coriander packed in bulk or retail-ready bags, with worldwide delivery."
      },
      {
        title: "5. Black Pepper supplier Dubai",
        description: "One of the most widely used spices globally, sourced as whole peppercorns or ground, graded by size and density for consistent pungency.",
        q: "Where can I buy black pepper in bulk in Dubai?",
        a: "You can buy black pepper in bulk in Dubai from a supplier grading whole peppercorns by size and density. Mintrix Trading supplies whole or ground black pepper packed in bulk or retail-ready bags, with worldwide delivery."
      },
      {
        title: "6. Ginger supplier UAE",
        description: "Dried or powdered ginger root with a warm, pungent flavour, sourced for both culinary use and food-manufacturing applications.",
        q: "Where can I buy dried ginger in bulk in the UAE?",
        a: "You can buy dried ginger in bulk in the UAE from a supplier sourcing dried or powdered ginger root. Mintrix Trading supplies quality-tested ginger packed in bulk or retail-ready bags, with worldwide delivery."
      },
      {
        title: "7. Cardamom supplier Dubai",
        description: "A premium aromatic pod spice used in both sweet and savoury dishes as well as tea and coffee blends, graded by pod size and colour.",
        q: "Where can I buy cardamom in bulk in Dubai?",
        a: "You can buy cardamom in bulk in Dubai from a supplier grading whole pods by size and colour. Mintrix Trading supplies quality-tested cardamom packed in bulk or retail-ready bags, with worldwide delivery."
      },
      {
        title: "8. Cinnamon supplier UAE",
        description: "Sweet, woody bark spice sold as whole quills or ground, used across baking, beverages and savoury spice blends.",
        q: "Where can I buy cinnamon in bulk in the UAE?",
        a: "You can buy cinnamon in bulk in the UAE from a supplier sourcing whole quills or ground cinnamon. Mintrix Trading supplies quality-tested cinnamon packed in bulk or retail-ready bags, with worldwide delivery."
      },
      {
        title: "9. Cloves supplier Dubai",
        description: "A pungent, aromatic flower bud spice used whole or ground in both sweet and savoury cooking, as well as traditional remedies.",
        q: "Where can I buy cloves in bulk in Dubai?",
        a: "You can buy cloves in bulk in Dubai from a supplier sourcing whole or ground cloves. Mintrix Trading supplies quality-tested cloves packed in bulk or retail-ready bags, with worldwide delivery."
      },
      {
        title: "10. Fennel Seeds supplier UAE",
        description: "A sweet, anise-flavoured seed spice used in spice blends, baking and as a digestive aid across South Asian and Middle Eastern cuisine.",
        q: "Where can I buy fennel seeds in bulk in the UAE?",
        a: "You can buy fennel seeds in bulk in the UAE from a supplier sourcing whole fennel seed. Mintrix Trading supplies purity-tested fennel seeds packed in bulk or retail-ready bags, with worldwide delivery."
      },
      {
        title: "11. Fenugreek supplier Dubai",
        description: "A slightly bitter seed spice used in spice blends and traditional dishes, also sourced in leaf form for certain regional cuisines.",
        q: "Where can I buy fenugreek in bulk in Dubai?",
        a: "You can buy fenugreek in bulk in Dubai from a supplier sourcing whole fenugreek seed. Mintrix Trading supplies purity-tested fenugreek packed in bulk or retail-ready bags, with worldwide delivery."
      },
      {
        title: "12. Blended Spices blends supplier UAE",
        description: "Custom or standard spice blends formulated to a specific recipe or regional profile, mixed and packed to buyer specification.",
        q: "Can Mintrix Trading supply custom spice blends in bulk?",
        a: "Yes. Mintrix Trading formulates and packs custom or standard spice blends to buyer specification, in bulk or retail-ready formats, with the same purity and quality testing applied to single-origin spices."
      }
    ],
    packingTable: [
      { product: "Turmeric", packing: "Whole finger / powder, 25kg bags, bulk", notes: "Curcumin content and colour tested" },
      { product: "Chili", packing: "Whole / crushed / powder, 25kg bags, bulk", notes: "Graded by heat level and colour" },
      { product: "Cumin", packing: "Whole seed / powder, 25kg bags, bulk", notes: "Purity tested" },
      { product: "Coriander", packing: "Whole seed / powder, 25kg bags, bulk", notes: "Purity tested" },
      { product: "Black Pepper", packing: "Whole peppercorn / powder, 25kg bags, bulk", notes: "Graded by size and density" },
      { product: "Ginger", packing: "Dried / powder, 25kg bags, bulk", notes: "Quality tested" },
      { product: "Cardamom", packing: "Whole pod, 5/10/25kg bags", notes: "Graded by pod size and colour" },
      { product: "Cinnamon", packing: "Whole quill / powder, 25kg bags, bulk", notes: "Quality tested" },
      { product: "Cloves", packing: "Whole / powder, 25kg bags, bulk", notes: "Quality tested" },
      { product: "Fennel Seeds", packing: "Whole seed, 25kg bags, bulk", notes: "Purity tested" },
      { product: "Fenugreek", packing: "Whole seed, 25kg bags, bulk", notes: "Purity tested" },
      { product: "Blended Spices", packing: "Custom formulation, bulk or retail-ready", notes: "Mixed and packed to buyer spec" }
    ],
    faqs: [
      {
        q: "What spices does Mintrix Trading supply?",
        a: "Mintrix Trading supplies turmeric, chili, cumin, coriander, black pepper, ginger, cardamom, cinnamon, cloves, fennel seeds and fenugreek, plus custom blended spice mixes, all sourced globally and tested for purity."
      },
      {
        q: "Can you supply a custom spice blend?",
        a: "Yes. Mintrix Trading formulates and packs custom spice blends to a buyer's own recipe or regional profile, applying the same purity and quality testing used for single-origin spices."
      },
      {
        q: "What is the minimum order quantity for bulk spices?",
        a: "Minimum order quantities for spices vary by product and packing format, typically starting at one pallet or a full container load. Mintrix Trading confirms the exact MOQ in its 24-hour quotation."
      }
    ],
    cta: {
      header: "Need a spice specification sheet or sample?",
      text: "Tell us the spice, format, volume and destination port, and Mintrix Trading will confirm within the hour and return a full quotation within 24 hours.",
      buttonText: "Request a Quote"
    }
  },
};