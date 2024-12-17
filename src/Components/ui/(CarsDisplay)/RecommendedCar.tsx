import { Suspense } from "react";
import { Cars } from "../../../../api/Cars-Data";
import CarCard from "./CarCard";
import Loading from "@/app/loading";

export function RecommendedCar({ limit }: { limit: number }) {
  const limitedCars = Cars?.slice(0, Math.max(0, limit)) || [];

  // Render a fallback if no cars are available
  if (limitedCars.length === 0) {
    return <div className="text-center p-4">No cars available</div>;
  }

  return (
    <Suspense fallback={<Loading />}>
      <div className="overflow-hidden">
        <ul className="flex gap-4 p-3 justify-evenly overflow-x-scroll ">
          {limitedCars.map((car) => (
            <li key={car.id}>
              <CarCard car={car} />
            </li>
          ))}
        </ul>
      </div>
    </Suspense>
  );
}
