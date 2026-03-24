import React, { FC } from "react";
import Logo from "./Logo";
import { X } from "lucide-react";
import { headerData } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SocialMedia from "./SocialMedia";
import { useOutsideClick } from "@/hooks";
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu: FC<SidebarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const sidebarRef = useOutsideClick<HTMLDivElement>(onClose);
  return (
    <div
      className={`fixed inset-y-0 h-screen left-0 z-50 w-full bg-black/40 backdrop-blur-sm transition-opacity ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      } hoverEffect`}
    >
      <div
        ref={sidebarRef}
        className={`min-w-72 max-w-96 bg-white h-screen p-10 border-r border-r-gray-100 shadow-2xl flex flex-col gap-8 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between gap-5">
          <Logo className="text-shop_dark_green" spanDesign="group-hover:text-black" />
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-red-500 transition-colors p-1"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col space-y-4 font-bold tracking-tight">
          {headerData?.map((item) => (
            <Link
              href={item?.href}
              key={item?.title}
              onClick={onClose}
              className={`text-lg transition-all hover:translate-x-1 ${
                pathname === item?.href 
                  ? "text-shop_dark_green font-black pl-2 border-l-4 border-shop_dark_green" 
                  : "text-gray-500 hover:text-shop_dark_green"
              }`}
            >
              {item?.title}
            </Link>
          ))}
        </div>
        <SocialMedia />
      </div>
    </div>
  );
};

export default SideMenu;
