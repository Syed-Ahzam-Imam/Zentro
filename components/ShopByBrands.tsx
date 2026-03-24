import React from "react";
import Title from "./Title";
import Link from "next/link";
import { getAllBrands } from "@/sanity/queries";
import Image from "next/image";
import { GitCompareArrows, Headset, ShieldCheck, Truck, ArrowRight } from "lucide-react";

const extraData = [
  {
    title: "Free Delivery",
    description: "Orders over $100",
    icon: <Truck className="w-8 h-8 text-shop_orange" />,
    bgColor: "bg-shop_orange/5",
  },
  {
    title: "30 Days Return",
    description: "Flexible return policy",
    icon: <GitCompareArrows className="w-8 h-8 text-shop_light_green" />,
    bgColor: "bg-shop_light_green/5",
  },
  {
    title: "24/7 Support",
    description: "Always here for you",
    icon: <Headset className="w-8 h-8 text-blue-500" />,
    bgColor: "bg-blue-50",
  },
  {
    title: "Secure Payment",
    description: "100% secure checkout",
    icon: <ShieldCheck className="w-8 h-8 text-indigo-500" />,
    bgColor: "bg-indigo-50",
  },
];

const ShopByBrands = async () => {
  const brands = await getAllBrands();
  
  return (
    <div className="py-12 md:py-24 space-y-16 lg:space-y-24">
      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {extraData?.map((item, index) => (
          <div
            key={index}
            className={`flex items-start gap-4 p-6 rounded-[2rem] border border-transparent hover:border-gray-200 hover:bg-white hover:shadow-xl transition-all duration-500 group ${item.bgColor || "bg-gray-50"}`}
          >
            <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:shadow-md transition-shadow">
              {item?.icon}
            </div>
            <div className="space-y-1">
              <h4 className="text-lg font-black text-shop_dark_green tracking-tight">
                {item?.title}
              </h4>
              <p className="text-sm text-gray-500 font-medium">{item?.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Brands Section */}
      <div className="relative overflow-hidden bg-shop_light_bg/30 p-8 md:p-14 rounded-[3rem] border border-white">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <h4 className="text-shop_orange font-bold tracking-wider uppercase text-xs">Partnerships</h4>
            <Title className="text-3xl md:text-5xl font-black text-shop_dark_green tracking-tight leading-none">
              Shop by <span className="text-shop_orange">Brands</span>
            </Title>
          </div>
          <Link 
            href="/brands" 
            className="group flex items-center gap-2 text-shop_dark_green font-bold hover:text-shop_orange transition-colors"
          >
            All Brands <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {brands?.map((brand) => (
            <Link
              key={brand?._id}
              href={`/brand/${brand?.slug?.current}`}
              className="relative group bg-white rounded-3xl p-8 flex items-center justify-center aspect-[3/2] border border-gray-100 shadow-sm hover:shadow-2xl hover:border-shop_orange/20 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-shop_orange/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              {brand?.image?.asset?.url && (
                <Image
                  src={brand.image.asset.url}
                  alt={brand?.title || "brand"}
                  width={150}
                  height={150}
                  className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-90 group-hover:scale-100"
                />
              )}
            </Link>
          ))}
          
          {/* Decorative placeholder if brands are few */}
          {brands.length < 6 && [...Array(Math.max(0, 3 - brands.length))].map((_, i) => (
             <div key={i} className="hidden lg:flex items-center justify-center p-8 bg-dashed border-2 border-gray-100 rounded-3xl aspect-[3/2] opacity-30">
                <span className="text-gray-300 font-black uppercase tracking-widest text-xs">MORE BRANDS</span>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopByBrands;
