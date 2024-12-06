import { Suspense } from "react";
import { Cars } from "../../../../api/Cars-Data";
import CarCard from "./CarCard";

export function RecommendedCar({ limit }: { limit: number; }) {
  const limitedCars = Cars.slice(0, limit);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className=" ">
        <ul className="grid grid-cols-4 gap-4 ">
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
