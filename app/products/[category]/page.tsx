import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { categoryDetailedData } from "@/data/categoryContent";
import CategoryClientView from "./CategoryClientView";

type Props = {
  // 1. Changed categorySlug to category to match the [category] folder name
  params: Promise<{ category: string }>;
};

// Optional but recommended: Generate static routes for your categories
export async function generateStaticParams() {
  return Object.keys(categoryDetailedData).map((key) => ({
    category: key,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  
  // 2. Read from resolvedParams.category
  const data = categoryDetailedData[resolvedParams.category];

  if (!data) return { title: "Category Not Found | Mintrix Trading" };

  return {
    title: data.meta.title,
    description: data.meta.description,
    keywords: data.meta.keywords,
  };
}

export default async function CategoryPage({ params }: Props) {
  const resolvedParams = await params;
  
  // 3. Read from resolvedParams.category
  const data = categoryDetailedData[resolvedParams.category];

  if (!data) {
    // If the URL doesn't match a key in categoryDetailedData, show 404
    notFound(); 
  }

  return <CategoryClientView content={data} />;
}