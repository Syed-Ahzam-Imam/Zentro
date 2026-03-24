import React from "react";
import Container from "./Container";
import HeaderMenu from "./HeaderMenu";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";
import FavoriteButton from "./FavoriteButton";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo";

const Header = async () => {
  return (
    <header className="sticky top-0 z-50 py-5 bg-white/70 backdrop-blur-md">
      <Container className="flex items-center justify-between text-lightColor">
        
        {/* Left Side */}
        <div className="w-auto md:w-1/3 flex items-center gap-2.5 justify-start md:gap-3">
          <MobileMenu />
          <Logo />
        </div>

        {/* Center Menu */}
        <HeaderMenu />

        {/* Right Side */}
        <div className="w-auto md:w-1/3 flex items-center justify-end gap-5">
          <SearchBar />
          <CartIcon />
          <FavoriteButton />
        </div>

      </Container>
    </header>
  );
};

export default Header;