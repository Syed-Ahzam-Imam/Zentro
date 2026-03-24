"use client";
import { BRANDS_QUERYResult, Category, Product } from "@/sanity.types";
import React, { useEffect, useState, useCallback } from "react";
import Container from "./Container";
import Title from "./Title";
import CategoryList from "./shop/CategoryList";
import { useSearchParams } from "next/navigation";
import BrandList from "./shop/BrandList";
import PriceList from "./shop/PriceList";
import { Filter, Loader2, SlidersHorizontal, X } from "lucide-react";
import NoProductAvailable from "./NoProductAvailable";
import ProductCard from "./ProductCard";
import { useOutsideClick } from "@/hooks";

interface Props {
  categories: Category[];
  brands: BRANDS_QUERYResult;
}
import { mockProducts } from "@/constants/mockData";

const Shop = ({ categories, brands }: Props) => {
  const searchParams = useSearchParams();
  const brandParams = searchParams?.get("brand");
  const categoryParams = searchParams?.get("category");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    categoryParams || null
  );
  const [selectedBrand, setSelectedBrand] = useState<string | null>(
    brandParams || null
  );
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterRef = useOutsideClick<HTMLDivElement>(() => setIsFilterOpen(false));

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      let minPrice = 0;
      let maxPrice = 10000;
      if (selectedPrice) {
        const [min, max] = selectedPrice.split("-").map(Number);
        minPrice = min;
        maxPrice = max;
      }

      const filtered = mockProducts.filter((p) => {
        const matchesCategory =
          !selectedCategory ||
          p.categories?.some(
            (cat: string) => cat.toLowerCase() === selectedCategory.toLowerCase()
          );
        const matchesBrand =
          !selectedBrand ||
          p.slug.current.includes(selectedBrand.toLowerCase()); // Simple brand check
        const matchesPrice = p.price >= minPrice && p.price <= maxPrice;
        return matchesCategory && matchesBrand && matchesPrice;
      });
      setProducts(filtered as unknown as Product[]);
    } catch (error) {
      console.log("Shop product fetching Error", error);
    } finally {
      setLoading(false);
    }
  }, [selectedCategory, selectedBrand, selectedPrice]);


  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return (
    <div className="border-t">
      <Container className="mt-5">
        <div className="sticky top-0 z-10 mb-5  py-2 ">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <Title className="text-[12px] sm:text-lg uppercase tracking-wide">
                Get the products as your needs
              </Title>
              {(selectedCategory !== null ||
                selectedBrand !== null ||
                selectedPrice !== null) && (
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setSelectedBrand(null);
                    setSelectedPrice(null);
                  }}
                  className="text-shop_dark_green underline text-sm mt-1 font-medium hover:text-darkRed hoverEffect text-left"
                >
                  Reset Filters
                </button>
              )}
            </div>
            {/* Mobile Filter Button */}
            <button
              onClick={() => setIsFilterOpen(true)}
              className="md:hidden flex items-center gap-2 px-3 py-1 bg-shop_dark_green text-white rounded-md font-medium hover:bg-shop_btn_dark_green transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4 text-white" />
              Filters
            </button>
          </div>
        </div>

        {/* Mobile Filter Drawer */}
        <div
          className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
            isFilterOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          }`}
        >
          <div
            ref={filterRef}
            className={`absolute left-0 top-0 h-full w-[280px] bg-white shadow-2xl transition-transform duration-300 ease-in-out z-50 flex flex-col ${
              isFilterOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="p-5 border-b flex items-center justify-between">
              <h2 className="text-xl font-bold text-shop_dark_green flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Filters
              </h2>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              <CategoryList
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={(val) => {
                  setSelectedCategory(val);
                  setIsFilterOpen(false);
                }}
              />
              <BrandList
                brands={brands}
                setSelectedBrand={(val) => {
                  setSelectedBrand(val);
                  setIsFilterOpen(false);
                }}
                selectedBrand={selectedBrand}
              />
              <PriceList
                setSelectedPrice={(val) => {
                  setSelectedPrice(val);
                  setIsFilterOpen(false);
                }}
                selectedPrice={selectedPrice}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 border-t border-t-shop_dark_green/50">
          {/* Desktop Sidebar */}
          <div className="hidden md:block md:sticky md:top-20 md:self-start md:h-[calc(100vh-160px)] md:overflow-y-auto md:min-w-64 pb-5 md:border-r border-r-shop_btn_dark_green/50 scrollbar-hide">
            <CategoryList
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
            <BrandList
              brands={brands}
              setSelectedBrand={setSelectedBrand}
              selectedBrand={selectedBrand}
            />
            <PriceList
              setSelectedPrice={setSelectedPrice}
              selectedPrice={selectedPrice}
            />
          </div>

          <div className="flex-1 pt-5">
            <div className="h-[calc(100vh-160px)] overflow-y-auto pr-2 scrollbar-hide">
              {loading ? (
                <div className="p-20 flex flex-col gap-2 items-center justify-center bg-white">
                  <Loader2 className="w-10 h-10 text-shop_dark_green animate-spin" />
                  <p className="font-semibold tracking-wide text-base">
                    Product is loading . . .
                  </p>
                </div>
              ) : products?.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {products?.map((product) => (
                    <ProductCard key={product?._id} product={product} />
                  ))}
                </div>
              ) : (
                <NoProductAvailable className="bg-white mt-0" />
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Shop;
