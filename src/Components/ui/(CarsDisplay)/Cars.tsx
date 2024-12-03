import { Cars } from "../../../../api/Cars-Data";
import CarCard from "./CarCard";
import { Suspense } from "react";
export  function PopularCar({ limit }: { limit: number }) {
  const limitedCars = Cars.slice(0, limit);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className=" ">
        <ul className="flex gap-4 justify-evenly   ">
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
export  function RecommendedCar({ limit }: { limit: number }) {
  const limitedCars = Cars.slice(0, limit);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className=" ">
        <ul className="flex flex-wrap gap-4 justify-evenly  ">
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
