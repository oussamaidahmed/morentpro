import AdsCard from "@/Components/ui/(CarsDisplay)/AdsCard";
import { PopularCar, RecommendedCar } from "@/Components/ui/(CarsDisplay)/Cars";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="">
      <div>
        <AdsCard />
      </div>
      <div className=" pt-10 space-y-10">
        <div className="flex justify-between ">
          <h1 className="text-lg text-[#90A3BF]">Popular Car</h1>
          <Link href={"/CategoryCar"} className="text-[#3563E9] underline text-lg">
            See All
          </Link>
        </div>
        <PopularCar limit={4} />
      </div>
      <div className=" pt-10 space-y-10">
        <h1 className="text-lg  text-[#90A3BF]">Recommended Car</h1>
        <RecommendedCar limit={8} />
      </div>
    </div>
  );
}
