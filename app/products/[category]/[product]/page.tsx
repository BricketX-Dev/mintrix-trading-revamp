import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { catalogData } from "@/data/products";
import { slugify } from "@/utils/slugify";
import ProductClientView from "./ProductClientView";

// Define the Next.js 15 async params type
type Props = {
  params: Promise<{ category: string; product: string }>;
};

export async function generateStaticParams() {
  const paths: { category: string; product: string }[] = [];
  
  catalogData.forEach((category) => {
    category.items.forEach((item) => {
      paths.push({
        category: slugify(category.title),
        product: slugify(item.name),
      });
    });
  });

  return paths;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Await the params Promise (Next.js 15 requirement)
  const resolvedParams = await params;
  
  const category = catalogData.find((c) => slugify(c.title) === resolvedParams.category);
  const product = category?.items.find((i) => slugify(i.name) === resolvedParams.product);

  if (!category || !product) return { title: "Product Not Found | Mintrix Trading" };

  return {
    title: `Wholesale ${product.name} Supplier Dubai | Mintrix Trading`,
    description: `Import bulk ${product.name} from Mintrix Trading. Verified origin, premium export grade, and complete documentation for global shipping.`,
  };
}

export default async function ProductPage({ params }: Props) {
  // Await the params Promise (Next.js 15 requirement)
  const resolvedParams = await params;

  const category = catalogData.find((c) => slugify(c.title) === resolvedParams.category);
  const product = category?.items.find((i) => slugify(i.name) === resolvedParams.product);

  if (!category || !product) {
    notFound();
  }

  return (
    <ProductClientView 
      product={product} 
      categoryTitle={category.title} 
      categorySlug={resolvedParams.category} 
    />
  );
}