"use client";
import React from "react";
import { useParams } from "next/navigation";
// import Image from "next/image";
import { Cars } from "../../../../../api/Cars-Data";

export default function CarDetail() {
  const params = useParams();
  const carId = params?.id?.toString();

  if (!carId) {
    return <p>Invalid car ID</p>; // Handle missing `id`
  }

  const car = Cars.find((car) => car.id.toString() === carId);

  if (!car) {
    return <p>Car not found</p>; // Handle missing car data
  }
  return (
    <div>
      <div className="drawer lg:drawer-open bg-white">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}

        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-60 p-4">
            {/* Sidebar content here */}
            <li>
              <input type="checkbox" defaultChecked className="checkbox checkbox-xs" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
