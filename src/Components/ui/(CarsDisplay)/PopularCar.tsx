import { Suspense } from "react";
import { Cars } from "../../../../api/Cars-Data";
import CarCard from "./CarCard";

export function PopularCar({ limit }: { limit: number; }) {
  const limitedCars = Cars.slice(0, limit);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className=" overflow-hidden ">
        <ul className="flex gap-4 m-3 justify-evenly ">
          {limitedCars.map((car) => (
            <li key={car.id}>
              <div>
                <CarCard car={car} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Suspense>
  );
}
