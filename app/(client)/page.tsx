import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";
import HomeCategories from "@/components/HomeCategories";
import LatestBlog from "@/components/LatestBlog";
import ProductReviews from "@/components/ProductReviews";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import ProductSection from "@/components/ProductSection";
import { getCategories } from "@/sanity/queries";
import { mockProducts } from "@/constants/mockData";

import React from "react";
import FullWidthBanner from "@/components/FullWidthBanner";
import { Product } from "@/sanity.types";

const Home = async () => {
  const categories = await getCategories(8);
  
  // Create our 3 scattered categories
  const bestSellers = mockProducts.filter((p) => p.status === "hot").slice(0, 5);
  const newArrivals = mockProducts.filter((p) => p.status === "new").slice(0, 5);
  const featured = mockProducts.filter((p) => p.status === "sale").slice(0, 5);

  return (
    <div className="bg-white">
      <Container className="pt-6 pb-16 space-y-16">
        <HomeBanner />
        
        <div id="best-sellers-section">
          <ProductSection title="Best Sellers" products={bestSellers as unknown as Product[]} />
        </div>
        
        <HomeCategories categories={categories} />
        
        <div id="new-arrivals-section">
          <ProductSection title="New Arrivals" products={newArrivals as unknown as Product[]} />
        </div>
      </Container>

      <FullWidthBanner />

      <Container className="pb-16 space-y-16 pt-16">
        <div id="featured-products-section">
          <ProductSection title="Featured Products" products={featured as unknown as Product[]} />
        </div>
        
        <div id="reviews-section" className="scroll-mt-24">
          <ProductReviews />
        </div>
        
        <div id="blog-section" className="scroll-mt-24">
          <LatestBlog />
        </div>
        
        <div id="faq-section" className="scroll-mt-24">
          <FAQSection />
        </div>
        
        <div id="contact-section" className="scroll-mt-24">
          <ContactSection />
        </div>
        
      </Container>
    </div>
  );
};

export default Home;
