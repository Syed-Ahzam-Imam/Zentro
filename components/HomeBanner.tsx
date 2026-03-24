"use client";
import React, { useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Zap } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const slides = [
  {
    title: "Grab Upto 50% OFF",
    subtitle: "Premium Headphones",
    description: "Experience superior sound quality with noise cancellation and 40h battery life.",
    image: "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UHJlbWl1bSUyMEhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D",
    bg: "bg-[#f8f9fa]"
  },
  {
    title: "New Generation",
    subtitle: "Series Smartphones",
    description: "Discover the latest features, stunning cameras and blazing fast performance.",
    image: "https://images.unsplash.com/photo-1598368518818-f7c79b6d982f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U2VyaWVzJTIwU21hcnRwaG9uZXN8ZW58MHx8MHx8fDA%3D",
    bg: "bg-[#fdf8f4]"
  },
  {
    title: "Pro Performance",
    subtitle: "Creative Laptops",
    description: "Elevate your work with the most powerful and efficient laptops ever made.",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1000&auto=format&fit=crop",
    bg: "bg-[#f4f7fd]"
  }
];

const HomeBanner = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    const timer = setInterval(() => {
      scrollNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [scrollNext]);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-gray-100" ref={emblaRef}>
      <div className="flex">
        {slides.map((slide, index) => (
          <div key={index} className={`flex-[0_0_100%] min-w-0 relative ${slide.bg}`}>
            <div className="relative px-6 py-8 md:px-16 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6 min-h-[350px] md:min-h-[400px]">
              <div className="flex-1 space-y-4 text-center md:text-left z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 text-gray-600 font-bold text-[10px] tracking-widest uppercase">
                  <Zap className="w-3.5 h-3.5" /> Best Deal
                </div>
                
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-black text-shop_dark_green leading-tight">
                  {slide.title} <br />
                  <span className="text-lg md:text-2xl lg:text-3xl font-bold text-gray-500">{slide.subtitle}</span>
                </h1>
                
                <p className="text-gray-400 text-sm md:text-base max-w-sm font-medium leading-normal mx-auto md:mx-0">
                  {slide.description}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 pt-2">
                  <Link
                    href={"/shop"}
                    className="w-full sm:w-auto px-6 py-2.5 bg-shop_dark_green text-white rounded-lg font-bold text-sm hover:bg-black transition-all flex items-center justify-center gap-2 shadow-lg"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Shop Now
                  </Link>
                  <Link
                    href={"/deal"}
                    className="w-full sm:w-auto px-6 py-2.5 bg-white border border-gray-200 text-shop_dark_green rounded-lg font-bold text-sm hover:bg-gray-50 transition-all shadow-sm flex items-center justify-center"
                  >
                    View Deals
                  </Link>
                </div>
              </div>

              <div className="flex-initial w-48 sm:w-64 md:w-80 lg:w-[320px] aspect-square transform transition-transform duration-500 hover:scale-105 overflow-hidden rounded-full border-4 border-white shadow-xl">
                <Image
                  src={slide.image}
                  alt={slide.subtitle}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority={index === 0}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`transition-all duration-300 rounded-full ${i === selectedIndex ? "w-4 h-1.5 bg-shop_dark_green" : "w-1.5 h-1.5 bg-gray-300"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeBanner;
