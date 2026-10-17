import { Metadata } from 'next';
import FAQSection from "../components/sections/FAQSection";
import FeatureStrip from "../components/sections/FeatureStrip";
import Hero from "../components/sections/Hero";
import ProductsSection from "../components/sections/ProductsSection";
import ProcessSection from "../components/sections/ProcessSection";
import StatsBand from "../components/sections/StatsBand";
import WhyMintrix from "../components/sections/WhyMintrix";

// INJECTED SEO META TAGS
export const metadata: Metadata = {
  title: "Food Trading Company Dubai | Wholesale Supplier | Mintrix",
  description: "Mintrix Trading is a Dubai-based global food trading company. We source agricultural commodities worldwide and deliver bulk orders in 24h. Get a quote.",
  keywords: [
    "food trading company Dubai", 
    "foodstuff trading company Dubai", 
    "wholesale food supplier UAE", 
    "bulk food supplier Dubai", 
    "global food sourcing company UAE", 
    "agricultural commodity trader Dubai"
  ],
};

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Section 2: Hero */}
      <Hero/>

      {/* Section 3: End-to-End Procurement Strip */}
      <FeatureStrip /> 

      {/* Section 6: Featured Categories / Products */}
      <ProductsSection/>

      {/* Section 4: Proof Stats */}
      <StatsBand />

      {/* Section 5: Why Mintrix */}
      <WhyMintrix />
      
      {/* Section 8: How it Works */}
      <ProcessSection />
      
      {/* Section 9: FAQ */}
      <FAQSection/>
    </main>
  );
}