import React from "react";
import { data } from "../../../api/data";
import CarCard from "./CarCard";

export default function Cars() {
  const car = data;
  return (
    <div>
      <ul>
        {car.map((car) => (
          <li key={car.id}>
          <CarCard car={car} />
          </li>
        ))}

      </ul>
    </div>
  );
}


