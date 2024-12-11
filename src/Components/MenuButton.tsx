"use client";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";

export default function MenuButton() {
  const pathname  = usePathname();

  return (
    <div>
    {!(pathname === "/Home" || pathname.startsWith("/PaymentPage")) && (
      <div className="hover:scale-105 duration-300">
        <label htmlFor="my-drawer-2" className="drawer-button">
          <Menu />
        </label>
      </div>
    )}
  </div>
  );
}
