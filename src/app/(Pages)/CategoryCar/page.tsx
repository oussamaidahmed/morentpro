"use client";
import Sidebar from "@/Components/Sidebar";
import CarCard from "../../../Components/ui/(CarsDisplay)/CarCard";
import useCarFilters from "../../../Components/useCarFilters";
import { Suspense } from "react";

export default function Page({ limit }: { limit: number }) {


  const {
    filteredCars,
    priceRange,
    handleTypeChange,
    handleCapacityChange,
    handlePriceChange,
  } = useCarFilters(limit);

  const carTypes = ["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"];
  const capacities = ["2 Person", "4 Person", "6 Person", "8 or More"];

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="drawer lg:drawer-open bg-white mt-10 ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}

          <ul className="grid grid-cols-3 gap-10 justify-evenly ">
            {filteredCars.map((car) => (
              <li key={car.id}>
                <div>
                  <CarCard car={car} />
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div >
            {/* Sidebar content here */}
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
    </Suspense>
  );
}
