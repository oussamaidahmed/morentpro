import { Cog, FuelIcon, Heart, Users } from "lucide-react";
import React from "react";
import Image from "next/image";

interface Car {
  id: number;
  type: string;
  name: string;
  price: number;
  description: string;
  image: string;
  liters: string;
  mode: string;
  people: string;
}

interface CarCardProps {
  car: Car;
}
export default function CarCard({ car }: CarCardProps) {
  return (
    <div className=" border-2 p-3 w-[304px] ">
      {/* Name and Like */}
      <div className="flex justify-between ">
        <div>
          <p className="font-bold">{car.name}</p>
          <p className="text-[#90A3BF]">{car.type}</p>
        </div>
        <Heart size={20} />
      </div>
      {/* Car Image */}
      <div className="flex justify-center my-10">
        <Image src={car.image} alt={car.name} width={232} height={72} />
      </div>
      {/* Price and Description */}
      <div className="flex justify-center align-center overflow-hidden ">
        <ul className="flex gap-3 text-[#90A3BF] justify-around ">
          <li className="flex gap-1 items-center">
            <span>
              <FuelIcon size={20} />
            </span>
            <p>{car.liters}</p>
          </li>
          <li className="flex gap-1 items-center">
            <span>
              <Cog size={20} />
            </span>
            <p>{car.mode}</p>
          </li>
          <li className="flex gap-1 items-center">
            <span>
              <Users size={20} />
            </span>
            <p>{car.people}</p>
          </li>
        </ul>
      </div>

      {/* Rent button and Price */}
      <div>
        <div className="flex justify-between items-center ">
          <p className="text-xl font-bold flex items-center gap-1">${car.price}/<p className="text-[#90A3BF] text-sm  ">day</p></p>
          <button className="bg-[#3563E9] text-white px-3 py-2 rounded-md">
          Rent Now
          </button>
        </div>
      </div>
    </div>
  );
}
