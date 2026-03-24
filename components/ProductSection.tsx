"use client";

import React from "react";
import ProductCard from "./ProductCard";
import Title from "./Title";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Product } from "@/sanity.types";

const ProductSection = ({ title, products }: { title: string, products: Product[] }) => {
  if (!products || products.length === 0) return null;
  
  return (
    <div className="py-12">
      <div className="flex items-center justify-between mb-10">
        <div className="space-y-1">
          <Title className="text-3xl md:text-4xl font-black text-shop_dark_green tracking-tight">
            {title}
          </Title>
          <div className="w-12 h-1.5 bg-shop_orange rounded-full" />
        </div>
        
        <Link 
          href="/shop" 
          className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-shop_orange transition-colors group"
        >
          View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8">
        {products.map((product) => (
          <ProductCard key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
