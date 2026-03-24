import React from "react";
import Title from "./Title";
import { mockReviews } from "@/constants/mockData";
import { Star } from "lucide-react";
import Image from "next/image";

const ProductReviews = () => {
  return (
    <div className="py-16 mb-10">
      <div className="flex flex-col items-center justify-center mb-10 text-center">
        <Title className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">What Our Customers Say</Title>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl">
          Hear from our satisfied customers who have experienced our top-tier products and services.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {mockReviews.map((review) => (
          <div key={review._id} className="p-6 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-gray-200">
              <Image
                src={review.avatar}
                alt={review.name}
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex text-yellow-500 mb-3">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <p className="text-gray-700 italic mb-4 leading-relaxed line-clamp-4">&quot;{review.comment}&quot;</p>
            <h4 className="font-semibold text-gray-900 mt-auto">{review.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductReviews;
