import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { catalogData } from "@/data/products";
import { slugify } from "@/utils/slugify";
import Link from "next/link";
import Image from "next/image";

// Generate SEO Metadata dynamically based on the URL
export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const category = catalogData.find((c) => slugify(c.title) === params.category);
  if (!category) return { title: "Category Not Found | Mintrix Trading" };

  return {
    title: `${category.title} Wholesale Supplier Dubai | Mintrix Trading`,
    description: category.desc,
  };
}

// Generate static routes at build time for ultimate performance
export async function generateStaticParams() {
  return catalogData.map((category) => ({
    category: slugify(category.title),
  }));
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = catalogData.find((c) => slugify(c.title) === params.category);
  
  if (!category) {
    notFound(); // Triggers the Next.js 404 page if URL is invalid
  }

  return (
    <div className="bg-[#0b0b0a] text-white pt-32 pb-24 min-h-screen">
      <div className="max-w-[1240px] mx-auto px-[5%]">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#a89f8b] mb-12">
          <Link href="/products" className="hover:text-[#cea945] transition-colors">Products</Link>
          <span className="text-[#cea945]">&gt;</span>
          <span className="text-white">{category.title}</span>
        </div>

        {/* Category Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6 text-white tracking-tight">
            {category.title}
          </h1>
          <p className="text-[#cfc8ba] leading-relaxed text-lg font-light">
            {category.desc}
          </p>
        </div>

        {/* Dynamic Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {category.items.map((item, i) => {
            const productSlug = slugify(item.name);
            return (
              <Link 
                href={`/products/${params.category}/${productSlug}`} 
                key={i} 
                className="group relative flex flex-col h-[260px] bg-[#16221c] border border-white/5 rounded-xl overflow-hidden transition-all duration-500 hover:border-[#cea945]/40 hover:-translate-y-1.5"
              >
                <div className="absolute inset-0 w-full h-full bg-[#0b0b0a]">
                  <Image src={item.image} alt={item.name} fill sizes="(max-width: 640px) 50vw, 25vw" className="object-cover opacity-80 group-hover:opacity-100 transition-transform duration-[1200ms] group-hover:scale-105" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0a]/95 via-[#0b0b0a]/40 to-transparent" />
                <div className="relative z-10 p-5 flex flex-col h-full justify-end">
                  <h4 className="text-[18px] font-bold text-white font-serif group-hover:text-[#cea945] transition-colors">{item.name}</h4>
                  <span className="text-[#cea945] text-xs font-bold mt-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                    View Specifications &rarr;
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </div>
  );
}