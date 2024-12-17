"use client";
import React, { useState, useMemo } from "react";
import { useParams } from "next/navigation";
import { Cars } from "../../../../../api/Cars-Data";
import Sidebar from "../../../../Components/Sidebar";
import CarCard from "@/Components/ui/(CarsDisplay)/CarCard";
import { Avatar, Rating, RatingStar } from "flowbite-react";
import { Heart } from "lucide-react";
import Link from "next/link";

const capacityMapping: Record<string, string[]> = {
  "2 Person": ["2"],
  "4 Person": ["4"],
  "6 Person": ["6"],
  "8 or More": Array.from({ length: 13 }, (_, i) => (i + 8).toString()),
};

export default function CarDetail() {
  const params = useParams();
  const carId = params?.id?.toString();

  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [capacity, setCapacity] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number>(40);

  const car = Cars.find((car) => car.id.toString() === carId);

  const carTypes = ["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"];
  const capacities = ["2 Person", "4 Person", "6 Person", "8 or More"];

  const filteredCars = useMemo(() => {
    return Cars.filter((car) => {
      const matchesType =
        selectedTypes.length > 0 ? selectedTypes.includes(car.type) : true;

      const matchesCapacity =
        capacity.length > 0
          ? capacity.some((cap) => capacityMapping[cap]?.includes(car.people))
          : true;

      const matchesPrice = car.price <= priceRange;

      return matchesType && matchesCapacity && matchesPrice;
    });
  }, [selectedTypes, capacity, priceRange]);

  if (!carId) {
    return <p>Invalid car ID</p>;
  }

  if (!car) {
    return <p>Car not found</p>;
  }

  const handleTypeChange = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleCapacityChange = (cap: string) => {
    setCapacity((prev) =>
      prev.includes(cap) ? prev.filter((c) => c !== cap) : [...prev, cap]
    );
  };

  const handlePriceChange = (price: number) => {
    setPriceRange(price);
  };

  return (
    <div className="drawer lg:drawer-open bg-white lg:px-16  mt-10">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Main car details */}
        <div>
          <div className="space-y-10 justify-center">
          <div className=" space-y-10 border-2 rounded-lg w-full lg:w-[492px] h-fit p-7">
              <div className="flex justify-between">
                <div>
                  <h2 className="font-bold text-3xl">{car.name}</h2>
                  <Rating>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Rating.Star key={i} filled={i < car.rating} />
                    ))}
                  </Rating>
                  <p className="text-[#90A3BF]">440+ Reviewer</p>
                </div>
                <div>
                  <Heart size={20} className="m-2" />
                </div>
              </div>
              <p className="mt-2 text-gray-600">{car.description}</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <li className="flex justify-between">
                  <p className="text-[#90A3BF]">Type Car</p>
                  <p>{car.type}</p>
                </li>
                <li className="flex justify-between">
                  <p className="text-[#90A3BF]">Capacity</p>
                  <p>{car.people} People</p>
                </li>
                <li className="flex justify-between">
                  <p className="text-[#90A3BF]">Steering</p>
                  <p>{car.mode}</p>
                </li>
                <li className="flex justify-between">
                  <p className="text-[#90A3BF]">Gasoline</p>
                  <p>{car.liters} Liters</p>
                </li>
              </ul>
              {/* Price and Rent Button */}
              <div>
                <div className="flex justify-between items-center">
                  <p className="text-xl font-bold flex items-center gap-1">
                    ${car.price}/
                    <span className="text-[#90A3BF] text-sm  ">day</span>
                  </p>
                  <Link prefetch href={`/PaymentPage/${car.id}`}>
                    <button className="bg-[#3563E9] text-white px-6 py-2 rounded-md">
                      Rent Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* Reviews */}
            <div className="border-2 rounded-lg w-full lg:w-[492px] h-fit p-7 space-y-10">
              <h2 className="text-2xl font-semibold mb-4">Reviews</h2>

              <section>
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar img={""} rounded />
                    <h2>John Doe</h2>
                  </div>
                  <div className="flex flex-col items-center gap-1 ">
                    <h3 className="text-[#90A3BF]">21 July 2024</h3>
                    <Rating>
                      <RatingStar />
                      <RatingStar />
                      <RatingStar />
                      <RatingStar />
                      <RatingStar filled={false} />
                    </Rating>
                  </div>
                </div>

                <div>
                  <p className="text-gray-600 pt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus esse reprehenderit voluptatibus excepturi
                    molestias magnam architecto iste necessitatibus sit omnis,
                    voluptatem mollitia ipsa? Dicta quaerat voluptates labore
                    temporibus voluptatem sunt?
                  </p>
                </div>
              </section>

              <section>
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar img={""} rounded />
                    <h2>John Doe</h2>
                  </div>
                  <span className="flex flex-col items-center gap-1 ">
                    <h3 className="text-[#90A3BF]">21 July 2024</h3>
                    <Rating>
                      <RatingStar />
                      <RatingStar />
                      <RatingStar />
                      <RatingStar />
                      <RatingStar filled={false} />
                    </Rating>
                  </span>
                </div>

                <div>
                  <p className="text-gray-600 pt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus esse reprehenderit voluptatibus excepturi
                    molestias magnam architecto iste necessitatibus sit omnis,
                    voluptatem mollitia ipsa? Dicta quaerat voluptates labore
                    temporibus voluptatem sunt?
                  </p>
                </div>
              </section>
              <div className="flex justify-center">
                <button className="  px-6 py-2 rounded-md text-[#90A3BF]">
                  Show All Reviews
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Display filtered cars */}
        <div className="mt-10 w-full  ">
          <h2 className="text-xl font-semibold mb-4  mx-10">Other Cars</h2>
          <div className=" overflow-x-scroll ">
            {filteredCars.length > 0 ? (
              <ul className="flex gap-4  m-10 justify-evenly">
                {filteredCars.map((car) => (
                  <li key={car.id}>
                    <CarCard car={car} />
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No cars match your filters.</p>
            )}
          </div>
        </div>
      </div>
      <div className="drawer-side">
      <label htmlFor="my-drawer-2" className="drawer-overlay "></label>
      <div className="">
          <Sidebar
            carTypes={carTypes}
            capacities={capacities}
            priceRange={priceRange}
            onTypeChange={handleTypeChange}
            onCapacityChange={handleCapacityChange}
            onPriceChange={handlePriceChange}
          />
        </div>
      </div>
    </div>
  );
}
