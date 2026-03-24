
import Container from "@/components/Container";
import Title from "@/components/Title";
import React from "react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <Container className="py-10 md:py-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <Title className="text-4xl mb-6">About Our Store</Title>
          <p className="text-lightColor text-lg leading-relaxed mb-6">
            Welcome to Zentro, your premier destination for high-quality electronics, appliances, and lifestyle products. Founded in 2024, we aim to provide our customers with a seamless shopping experience and the best products on the market.
          </p>
          <p className="text-lightColor text-lg leading-relaxed mb-6">
            Our mission is to bridge the gap between innovation and everyday life by offering a curated selection of products that enhance your lifestyle. Whether you&apos;re looking for the latest smartphone, professional-grade kitchen appliances, or versatile gadgets, we have you covered.
          </p>
          <div className="grid grid-cols-2 gap-6 mt-10">
            <div>
              <h3 className="text-2xl font-bold text-shop_dark_green mb-2">10k+</h3>
              <p className="text-sm text-lightColor">Happy Customers</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-shop_dark_green mb-2">500+</h3>
              <p className="text-sm text-lightColor">Products Available</p>
            </div>
          </div>
        </div>
        <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
            alt="About Zentro"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </Container>
  );
};

export default AboutPage;
