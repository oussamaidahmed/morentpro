import AdsCard from "@/Components/ui/(CarsDisplay)/AdsCard";
import Cars from "@/Components/ui/(CarsDisplay)/Cars";
import React from "react";

export default function page() {
  return (
    <div className="">
      <div>
        <AdsCard />
      </div>
      <div>
        <Cars limit={4} />
      </div>
    </div>
  );
}
