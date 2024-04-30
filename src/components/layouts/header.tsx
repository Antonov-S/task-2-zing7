"use client";

import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import clsx from "clsx";

import Logo from "../ui/logo";
import NavMenu from "../ui/nav-menu";

function Header() {
  const [isMobuleMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobile = () => {
    setIsMobileMenuOpen(!isMobuleMenuOpen);
  };
  return (
    <header className="container flex items-center justify-between mt-[26px]">
      {/* ml-[149px] sm:ml-[50px] */}
      <Logo />
      <NavMenu
        toggleMobile={toggleMobile}
        isMobuleMenuOpen={isMobuleMenuOpen}
      />
      <div className="md:hidden">
        <RxHamburgerMenu
          onClick={toggleMobile}
          className={clsx(
            !isMobuleMenuOpen ? "cursor-pointer text-4xl mr-2" : "invisible"
          )}
        />
      </div>
    </header>
  );
}

// md:hidden

export default Header;
