import Link from "next/link";
import { Cars } from "../../../../api/Cars-Data";
import CarCard from "./CarCard";
import { Suspense } from "react";
export default function page({ limit }: { limit: number }) {
  const limitedCars = Cars.slice(0, limit);

  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div className="">
      <ul className="grid grid-cols-4 justify-items-center drawer-button  ">
        {limitedCars.map((car) => (
          <li key={car.id}>
            <Link href={`/CarDetail/${car.id}`}>
              <CarCard car={car} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
    </Suspense>
  );
}
