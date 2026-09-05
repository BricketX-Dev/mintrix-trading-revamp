
import FAQSection from "../components/sections/FAQSection";
import FeatureStrip from "../components/sections/FeatureStrip";
import Hero from "../components/sections/Hero";
import ProductsSection from "../components/sections/ProductsSection";
import ProcessSection from "../components/sections/ProcessSection";
import StatsBand from "../components/sections/StatsBand";
import WhyMintrix from "../components/sections/WhyMintrix";

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
    <ProcessSection />
    <FAQSection/>
    </main>
  );
}