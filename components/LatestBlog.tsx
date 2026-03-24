import React from "react";
import Title from "./Title";
import { mockBlogs } from "@/constants/mockData";
import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import dayjs from "dayjs";

const LatestBlog = () => {
  return (
    <div className="mb-10 lg:mb-20">
      <Title>Latest Blogs</Title>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-5">
        {mockBlogs.map((blog) => (
          <div key={blog._id} className="rounded-lg overflow-hidden group hover:shadow-md transition-shadow border border-gray-100">
            {blog?.mainImage?.asset?.url && (
              <Link href={`/blog/${blog?.slug?.current}`}>
                <div className="relative w-full h-36 overflow-hidden">
                  <Image
                    src={blog.mainImage.asset.url}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>
            )}
            <div className="bg-shop_light_bg p-3">
              <div className="text-xs flex items-center gap-2 mb-1">
                {blog?.blogcategories?.map((item, index) => (
                  <span key={index} className="font-semibold text-shop_dark_green tracking-wide">
                    {item?.title}
                  </span>
                ))}
                <span className="flex items-center gap-1 text-gray-400 ml-auto">
                  <Calendar size={11} />
                  {dayjs(blog.publishedAt).format("MMM D")}
                </span>
              </div>
              <Link
                href={`/blog/${blog?.slug?.current}`}
                className="text-xs font-semibold tracking-wide line-clamp-2 hover:text-shop_dark_green transition-colors"
              >
                {blog?.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestBlog;

