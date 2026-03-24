import Shop from "@/components/Shop";
import { Category, BRANDS_QUERYResult } from "@/sanity.types";
import { getAllBrands, getCategories } from "@/sanity/queries";
import React from "react";

const ShopPage = async () => {
  const categories = await getCategories();
  const brands = await getAllBrands();
  return (
    <div className="bg-white">
      <React.Suspense fallback={<div>Loading shop...</div>}>
         <Shop
           categories={categories as unknown as Category[]}
           brands={brands as unknown as BRANDS_QUERYResult}
         />
      </React.Suspense>
    </div>
  );
};

export default ShopPage;
