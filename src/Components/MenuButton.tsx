"use client";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";

export default function MenuButton() {
  const currentPath = usePathname();

  return (
    <div>
      {currentPath !== "/Home" && (
        <div className="hover:scale-105 duration-300   ">
          <label htmlFor="my-drawer-2" className=" drawer-button md:hidden">
            <Menu />
          </label>
        </div>
      )}
    </div>
  );
}
