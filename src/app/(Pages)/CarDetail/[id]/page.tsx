"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { Cars } from "../../../../../api/Cars-Data";

export default function CarDetail() {
  const params = useParams();
  const carId = params?.id?.toString();

  // State for filters
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [capacity, setCapacity] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number>(40);

  if (!carId) {
    return <p>Invalid car ID</p>;
  }

  const car = Cars.find((car) => car.id.toString() === carId);

  if (!car) {
    return <p>Car not found</p>;
  }

  const carTypes = ["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"];
  const capacities = ["2 Person", "4 Person", "6 Person", "8 or More"];

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

  return (
    <div className="drawer lg:drawer-open bg-white">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content */}
        <h1 className="text-2xl font-bold">{car.name}</h1>
        <p className="text-gray-600">{car.description}</p>
        <p className="text-lg font-semibold">Price: ${car.price}</p>
        <p className="text-sm text-gray-500">Type: {car.type}</p>
        <p className="text-sm text-gray-500">Capacity: {car.people}</p>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <div className="bg-base-200 text-base-content min-h-full w-60 p-5 pt-10 space-y-5">
          {/* Sidebar content */}
          <div>
            <span className="font-semibold text-sm text-[#90A3BF]">T Y P E</span>
            <ul className="space-y-3 mt-2">
              {carTypes.map((type) => (
                <li key={type} className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-xs"
                    checked={selectedTypes.includes(type)}
                    onChange={() => handleTypeChange(type)}
                  />
                  <p>{type}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="font-semibold text-sm text-[#90A3BF]">C A P A C I T Y</span>
            <ul className="space-y-3 mt-2">
              {capacities.map((cap) => (
                <li key={cap} className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-xs"
                    checked={capacity.includes(cap)}
                    onChange={() => handleCapacityChange(cap)}
                  />
                  <p>{cap}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="font-semibold text-sm text-[#90A3BF]">P R I C E</span>
            <div className="mt-2">
              <input
                type="range"
                min={0}
                max="100"
                value={priceRange}
                onChange={(e) => setPriceRange(parseInt(e.target.value, 10))}
                className="range range-xs"
              />
              <p>Selected Price: ${priceRange}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
