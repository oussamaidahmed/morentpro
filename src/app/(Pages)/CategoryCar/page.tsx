"use client";
import Sidebar from "@/Components/Sidebar";
import CarCard from "../../../Components/ui/(CarsDisplay)/CarCard";
import useCarFilters from "../../../Components/useCarFilters";
import { Suspense } from "react";
import Loading from "@/app/loading";

export default function Page() {
  const limit = 10;
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
    <Suspense fallback={<Loading />}>
      <div className="drawer lg:drawer-open bg-white mt-10">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <ul className="flex flex-wrap justify-center gap-6">
            {filteredCars.length > 0 ? (
              filteredCars.map((car) => (
                <li key={car.id}>
                  <CarCard car={car} />
                </li>
              ))
            ) : (
              <div className="text-gray-500 mt-5">
                No cars match your filters.
              </div>
            )}
          </ul>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
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
    </Suspense>
  );
}
