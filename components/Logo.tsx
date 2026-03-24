import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "@/images/Gemini_Generated_Image_kz8kerkz8kerkz8k-removebg-preview.png";

const Logo = ({
  className,
}: {
  className?: string;
  spanDesign?: string;
}) => {
  return (
    <Link href={"/"} className={cn("flex items-center gap-2", className)}>
      <Image
        src={logo}
        alt="logo"
        width={200}
        height={80}
        className="w-40 md:w-48 h-auto object-contain"
        priority
      />
    </Link>
  );
};

export default Logo;
