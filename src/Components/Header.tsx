import React from "react";
import Link from "next/link";

import {
  Bell,
  CircleUser,
  Heart,
  Search,
  Settings,
  SlidersHorizontal,
} from "lucide-react";
import MenuButton from "./MenuButton";

export default function Header() {
  return (
    <div className="flex  max-sm:flex-wrap max-sm:justify-between justify-around items-center p-1 my-2 gap-4 ">
      {/* Logo */}
      <div className="flex lg:hidden">
        <MenuButton />
      </div>
      <div>
        <Link href="/Home">
          <p className="tracking-tighter text-2xl font-bold text-[#3563E9]  ">
            MORENT
          </p>
        </Link>
      </div>

      {/* Searchbar */}
      <form
        action="action"
        className="flex p-1.5  text-zinc-500 w-[445px]  max-h-[40px] rounded-full items-center border-2 shadow-xl justify-around max-sm:order-last max-sm:w-full "
      >
        <span>
          <Search />
        </span>
        <input
          className=" outline-none flex-1 mx-2 rounded-md p-1 placeholder:text-zinc-500"
          type="text"
          placeholder="Search something here"
        />
        <span>
          <SlidersHorizontal />
        </span>
      </form>

      <div className=" sm:order-2">
        <ul className="flex gap-4 items-center   ">
          <li className="hover:scale-125 hidden lg:flex duration-300 rounded-full  p-1.5  border-2">
            <Link href={"/LikedPage"}>
              <Heart />
            </Link>
          </li>
          <li className="hover:scale-125 hidden lg:flex duration-300 rounded-full  p-1.5 border-2">
            <Bell />
          </li>
          <li className="hover:scale-125 hidden lg:flex duration-300 rounded-full  p-1.5  border-2">
            <Settings />
          </li>
          <li className="flex   hover:scale-125 duration-300  rounded-full p-1.5 border-2 ">
            <CircleUser />
          </li>
        </ul>
      </div>
    </div>
  );
}
