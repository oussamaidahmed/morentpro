import { Button } from "flowbite-react";
import React from "react";

export default function AdsCard() {
  return (
    <div>
      <div
        className="h-[360px] w-[640px] bg-cover bg-center"
        style={{ backgroundImage: 'url("/Ads1.png")' }}
      >
        <div className=" flex flex-col  px-10 w-[290px] h-[224px]  py-10">
          <h1 className="text-white text-2xl font-semibold">
            The Best Platform for Car Rental
          </h1>
          <p className="text-white">
            Ease of doing a car rental safely and reliably. Of course at a low
            price.
          </p>
        </div>
        <Button className=" text-white font-semibold px-8 py-3 bg-[#3563E9] rounded-lg">
            Show more car
          </Button>
      </div>
    </div>
  );
}
