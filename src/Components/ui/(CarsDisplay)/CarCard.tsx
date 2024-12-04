import { Cog, FuelIcon, Heart, Users } from "lucide-react";
import React from "react";
import Image from "next/image";
import Link from "next/link";

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
    <div className=" max-sm:w-[260px] max-sm:h-[320px] h-[360px] w-[304px]   px-4 flex flex-col justify-around p-3 rounded-md ring-1  hover:scale-105 duration-100 hover:shadow-2xl  ">
      {/* Name and Like */}

      <div className="flex justify-between">
        <div>
          <p className="font-bold ">{car.name}</p>
          <p className="text-[#90A3BF]">{car.type}</p>
        </div>
        <Heart size={20} />
      </div>
      {/* Car Image */}
      <div className="flex justify-center my-10 hover:scale-125 duration-100  ">
        <Link href={`/CarDetail/${car.id}`}>
          <Image src={car.image} alt={car.name} width={200} height={65} />
        </Link>
      </div>
      {/* Price and Description */}
      <div className="   overflow-hidden ">
        <ul className="flex justify-between  text-[#90A3BF]  ">
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
        <div className="flex justify-between items-center">
          <p className="text-xl font-bold flex items-center gap-1">
            ${car.price}/<span className="text-[#90A3BF] text-sm  ">day</span>
          </p>
          <button className="bg-[#3563E9] text-white px-6 py-2 rounded-md">
            Rent Now
          </button>
        </div>
      </div>
    </div>
  );
}
