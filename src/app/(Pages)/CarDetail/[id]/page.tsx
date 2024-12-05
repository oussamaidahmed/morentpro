"use client";
import React, { useState, useMemo } from "react";
import { useParams } from "next/navigation";
import { Cars } from "../../../../../api/Cars-Data";
import Sidebar from "../../../../Components/Sidebar";
import CarCard from "@/Components/ui/(CarsDisplay)/CarCard";

// Static capacity mapping (defined outside the component)
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
    <div className="drawer lg:drawer-open bg-white">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Main car details */}
        <h1 className="text-2xl font-bold">{car.name}</h1>
        <p className="text-gray-600">{car.description}</p>
        <p className="text-lg font-semibold">Price: ${car.price}</p>
        <p className="text-sm text-gray-500">Type: {car.type}</p>
        <p className="text-sm text-gray-500">Capacity: {car.people}</p>

        {/* Display filtered cars */}
        <div className="mt-8 w-full">
          <h2 className="text-xl font-semibold mb-4">Other Cars</h2>
          {filteredCars.length > 0 ? (
            <ul className="grid grid-cols-3 gap-10 justify-evenly">
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
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <div>
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
