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
      <div className="drawer lg:drawer-open bg-white ">
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

          <div className=" bg-base-200 text-base-content min-h-full w-60 p-5 pt-10 space-y-3">
            {/* Sidebar content here */}
            <div>
              <ul className="space-y-3">
                <li>
                  <span className="font-semibold text-sm text-[#90A3BF]">T Y P E</span>
                </li>
                <li className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox checkbox-xs "
                  />
                  <p>Sport</p>
                </li>
                <li className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox checkbox-xs"
                  />
                  <p>SUV</p>
                </li>
                <li className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox checkbox-xs"
                  />
                  <p>MPV</p>
                </li>
                <li className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox checkbox-xs"
                  />
                  <p>Sedan</p>
                </li>
                <li className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox checkbox-xs"
                  />
                  <p>Coupe</p>
                </li>
                <li className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox checkbox-xs"
                  />
                  <p>Hatchback</p>
                </li>
              </ul>
            </div>
            <div>
            <ul className="space-y-3">
                <li>
                  <p>
                    <span className="font-semibold text-sm text-[#90A3BF]">C A P A C I T Y</span>
                  </p>
                </li>
                <li className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox checkbox-xs"
                  />
                  <p>2 Person </p>
                </li>
                <li className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox checkbox-xs"
                  />
                  <p>4 Person </p>
                </li>
                <li className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox checkbox-xs"
                  />
                  <p>6 Person </p>
                </li>
                <li className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox checkbox-xs"
                  />
                  <p>8 or More </p>
                </li>
              </ul>
            </div>
            <div>
            <ul className="space-y-3">
                <li>
                <span className="font-semibold text-sm text-[#90A3BF]">P R I C E</span>
                </li>
                <li>
                  <input
                    type="range"
                    min={0}
                    max="100"
                    value="40"
                    className="range range-xs"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
