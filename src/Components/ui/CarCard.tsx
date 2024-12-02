import { Heart } from "lucide-react";
import React from "react";
// import Image from "next/image";

interface Car {
  id: number;
  type: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

interface CarCardProps {
  car: Car;
}
export default function CarCard({ car }: CarCardProps) {
  console.log(car);
  return (
    <div className=" border-2 p-4 flex justify-between   ">
      <div>
        <p>{car.name}</p>
        <p>{car.type}</p>
      </div>
      <Heart />
    </div>
  );
}
