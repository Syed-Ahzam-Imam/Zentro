import React from "react";
import Title from "./Title";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";

interface Category {
  _id: string;
  title?: string;
  slug?: {
    current: string;
  };
  image?: unknown;
  productCount?: number;
}

// Helper: get image URL whether it's a Sanity ref or a plain URL string
function getCategoryImageUrl(image: unknown): string | null {
  if (!image) return null;
  const img = image as { asset?: { url?: string } };
  if (img?.asset?.url) return img.asset.url;
  try {
    return urlFor(image as { asset?: { _ref: string } }).url();
  } catch {
    return null;
  }
}

const HomeCategories = ({ categories }: { categories: Category[] }) => {
  return (
    <section className="relative py-8 md:py-12 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="space-y-1">
            <h4 className="text-gray-400 font-bold tracking-wider uppercase text-xs">Essentials</h4>
            <Title className="text-2xl md:text-3xl font-bold text-shop_dark_green leading-tight">
              Popular Categories
            </Title>
          </div>
          <Link 
            href="/categories" 
            className="inline-flex items-center gap-1 text-sm text-shop_dark_green font-semibold hover:text-gray-600 transition-colors group"
          >
            Explore All <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {categories?.slice(0, 6).map((category) => {
            const imgUrl = getCategoryImageUrl(category?.image);
            return (
              <Link
                key={category?._id}
                href={`/category/${category?.slug?.current}`}
                className="group relative bg-white rounded-xl p-3 border border-gray-100 transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="relative w-full aspect-square mb-3 overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center p-4">
                  {imgUrl ? (
                    <Image
                      src={imgUrl}
                      alt={category?.title ?? "category"}
                      width={200}
                      height={200}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  ) : (
                    <div className="text-gray-300 text-xs opacity-50">No Image</div>
                  )}
                </div>

                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-shop_dark_green group-hover:text-gray-600 transition-colors line-clamp-1">
                    {category?.title}
                  </h3>
                  <p className="text-[10px] text-gray-400 font-medium">
                    {category?.productCount ?? 0} Items
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeCategories;
