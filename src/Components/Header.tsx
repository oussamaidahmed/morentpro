import React from "react";
import {
  Bell,
  CircleUser,
  Heart,
  Search,
  Settings,
  SlidersHorizontal,
} from "lucide-react";

export default function Header() {
  return (
    <div className="flex max-sm:flex-wrap max-sm:justify-between justify-around items-center p-2 gap-4 ">
      {/* Logo */}
      <div>
        <p className="tracking-tighter text-2xl font-bold text-[#3563E9]  ">
          MORENT
        </p>
      </div>
      {/* Searchbar */}
      <form
        action="action"
        className="flex p-2  text-zinc-500 w-[445px]  max-h-[40px] rounded-full items-center border-2 shadow-xl justify-around max-sm:order-last max-sm:w-full "
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
          <li className="hover:scale-110 hidden lg:flex duration-300 rounded-full p-2 border-2">
            <Heart />
          </li>
          <li className="hover:scale-110 hidden lg:flex duration-300 rounded-full p-2 border-2">
            <Bell />
          </li>
          <li className="hover:scale-110 hidden lg:flex duration-300 rounded-full p-2 border-2">
            <Settings />
          </li>
          <li className="flex   hover:scale-110 duration-300  rounded-full p-2 border-2 ">
            <CircleUser />
          </li>
        </ul>
      </div>
    </div>
  );
}
