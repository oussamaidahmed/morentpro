import { Cars } from "../../../../api/Cars-Data";
import CarCard from "../../../Components/ui/(CarsDisplay)/CarCard";
import { Suspense } from "react";

export default function page({ limit }: { limit: number }) {
  const limitedCars = Cars.slice(0, limit);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="drawer lg:drawer-open bg-white ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}

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
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className=" bg-base-200 text-base-content min-h-full w-60 p-4">
            {/* Sidebar content here */}
            <li>
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-xs"
              />
            </li>
          </ul>
        </div>
      </div>
    </Suspense>
  );
}
