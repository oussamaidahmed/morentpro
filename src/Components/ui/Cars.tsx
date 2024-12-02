import React from "react";
import { data } from "../../../api/data";
import CarCard from "./CarCard";

export default function Cars() {
  const car = data;
  return (
    <div>
      <ul className="grid grid-cols-4 w-full space-x-8  ">
        {car.map((car) => (
          <li key={car.id}>
            <CarCard car={car} />
          </li>
        ))}
      </ul>
    </div>
  );
}
