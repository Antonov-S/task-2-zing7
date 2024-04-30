import Link from "next/link";

import { NAV_MENU_ITEMS, NAV_MOBILE_MENU } from "@/lib/constants";
import { Button } from "./button";
import NavButtonGroup from "./nav-button-group";
import { IoMdClose } from "react-icons/io";

type NavMenuProps = {
  isMobuleMenuOpen: boolean;
  toggleMobile: () => void;
};

function NavMenu({ toggleMobile, isMobuleMenuOpen }: NavMenuProps) {
  return (
    <>
      {!isMobuleMenuOpen ? (
        <>
          <ul className="hidden md:flex items-center justify-center w-[436px] h-[17px]">
            {NAV_MENU_ITEMS.map((menuItem, index) => (
              <li key={index}>
                <Link href={menuItem.path}>
                  <Button variant="link">{menuItem.name}</Button>
                </Link>
              </li>
            ))}
          </ul>
          <NavButtonGroup />
        </>
      ) : (
        <div className="fixed right-3 top-0 z-50 flex h-screen w-screen flex-col justify-center gap-16 bg-black/80 text-white hover:text-white/10 ps-10 transition-all">
          <IoMdClose
            className="absolute right-4 top-5 cursor-pointer text-4xl"
            onClick={toggleMobile}
          />
          <ul className="flex flex-col items-center justify-center gap-6">
            {NAV_MOBILE_MENU.map((item, i) => (
              <Link href={item.path}>
                <Button key={i} variant="ghost">
                  {item.name}
                </Button>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

// lg:hidden

export default NavMenu;
