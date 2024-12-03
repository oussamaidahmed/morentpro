"use client";
import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
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
      <h1>{car.name}</h1>
      <Image src={car.image} alt={car.name} width={100} height={100} />
    </div>
  );
}
