import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Wholesale Foodstuff Supplier Dubai | Bulk Food UAE",
  description: "8 bulk food categories — grains, spices, pulses, oils, frozen poultry, nuts, canned food & fresh produce. Sourced globally, delivered worldwide.",
  keywords: "wholesale foodstuff supplier Dubai, bulk food products UAE, agro commodities supplier Dubai, B2B food supplier Dubai, food supplier for restaurants and supermarkets Dubai",
};

export default function ProductsPage() {
  // Generate FAQ Schema for Google Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What food products can be imported in bulk to the UAE?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bulk food products imported to the UAE span grains and cereals, spices, pulses and beans, edible oils and oil seeds, frozen poultry, dry nuts and dry fruits, canned food, and fresh produce — all sourced globally and delivered in bulk."
        }
      },
      {
        "@type": "Question",
        "name": "What is the minimum order quantity for bulk food in Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Minimum order quantities vary by product and packing format, often starting at one pallet or a full container load. Mintrix Trading confirms the exact MOQ per item in its 24-hour quotation, alongside packing format and pricing."
        }
      },
      {
        "@type": "Question",
        "name": "Can I order products from more than one category in a single shipment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Mintrix Trading regularly consolidates multiple categories — for example rice, spices and dry fruits — into a single container to reduce freight cost, provided packing and handling requirements are compatible."
        }
      },
      {
        "@type": "Question",
        "name": "Do you supply restaurants, supermarkets and hotels directly?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Mintrix Trading supplies restaurants, supermarkets, hotels, catering companies and distributors directly, in addition to importers and wholesalers, with volumes and packing formats matched to each buyer type."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ProductsClient />
    </>
  );
}