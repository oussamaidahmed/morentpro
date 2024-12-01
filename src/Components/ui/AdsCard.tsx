import React from "react";
import Image from "next/image";
import BG from "../../../public/BG.png";
import Ads1 from "../../../public/Ads1.png";

export default function AdCard() {
  return (
    <div className="flex  justify-center gap-16 mt-10">
      <div className="relative flex flex-wrap max-w-[670px] bg-[#596780] h-[360px] rounded-xl">
        <Image
          src={Ads1}
          alt="Advertisement for car rentals"
          className="h-full w-full rounded-xl object-cover  "
        />
        <div className="absolute top-0 left-0 w-[340px] md:w-[300px] h-[160px] space-y-5 p-5 text-white">
          <h1 className="text-xl md:text-3xl font-semibold">
            The Best Platform for Car Rental
          </h1>
          <h4>
            Ease of doing a car rental safely and reliably. Of course at a low
            price.
          </h4>
          <button className="btn w-32  border-none bg-[#3563E9] text-white text-base">
            Rental Car
          </button>
        </div>
      </div>
      <div className="relative hidden md:flex max-w-[670px] bg-[#596780] h-[360px] rounded-xl">
        <Image
          src={BG}
          alt="Advertisement for car rentals"
          className="h-full w-full rounded-xl object-cover"
        />
        <div className="absolute top-0 left-0 w-[340px] md:w-[300px] h-[160px] space-y-5 p-5 text-white">
          <h1 className="text-xl md:text-3xl font-semibold">
            Easy way to rent a car at a low price
          </h1>
          <h4>
            Providing cheap car rental services and safe and comfortable
            facilities.
          </h4>
          <button className="btn w-32  text-white text-base border-none bg-[#54A6FF]">
            Rental Car
          </button>
        </div>
      </div>
    </div>
  );
}
