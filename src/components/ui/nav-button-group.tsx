"use client";

import { useState } from "react";

import { NAV_MENU_BUTTONS } from "@/lib/constants";
import { Button } from "./button";

interface NavButton {
  name: string;
  path: string;
}

function NavButtonGroup() {
  const [clickedButton, setClickedButton] = useState<string | null>(null);

  const handleButtonClick = (buttonPath: string) => {
    setClickedButton(buttonPath);
  };

  return (
    <div className="space-x-6 mr-6 hidden md:flex">
      {NAV_MENU_BUTTONS.map((button: NavButton, index: number) => (
        <Button
          key={index}
          onClick={() => handleButtonClick(button.path)}
          className={
            button.path === clickedButton ? "bg-[#150050] text-[#FFFFFF]" : ""
          }
        >
          {button.name}
        </Button>
      ))}
    </div>
  );
}

export default NavButtonGroup;
