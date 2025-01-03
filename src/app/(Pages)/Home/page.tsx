// import AdsCard from "@/Components/ui/(CarsDisplay)/AdsCard";
import { RecommendedCar } from "@/Components/ui/(CarsDisplay)/RecommendedCar";
import { PopularCar } from "@/Components/ui/(CarsDisplay)/PopularCar";
import Link from "next/link";
import React from "react";
import { Button } from "flowbite-react";

export default function page() {
  return (
    <div className=" lg:mx-24">
      <div>
        {/* <AdsCard /> */}
      </div>
      <div className=" pt-10 space-y-10">
        <div className="flex justify-between ">
          <h1 className="text-lg text-[#90A3BF]">Popular Car</h1>
          <Link
            href={"/CategoryCar"}
            className="text-[#3563E9] underline text-lg"
          >
            See All
          </Link>
        </div>
        <PopularCar limit={4} />
      </div>
      <div className=" pt-10 space-y-10 ">
        <h1 className="text-lg  text-[#90A3BF]">Recommended Car</h1>
        <RecommendedCar limit={8} />
      </div>
      <div className="flex justify-center p-10">
        <Link href={"/CategoryCar"}>
          <Button className=" text-white font-semibold px-8 py-3 bg-[#3563E9] rounded-lg">
            Show more car
          </Button>
        </Link>
      </div>
    </div>
  );
}
