import React from "react";
import Image from "next/image";

const FullWidthBanner = () => {
  return (
    <div className="relative w-full h-[200px] md:h-[300px] lg:h-[450px] overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
        alt="Tech Workspace Banner"
        fill
        priority
        className="object-cover"
      />
    
    </div>
  );
};

export default FullWidthBanner;
