"use client";
import React from "react";
import { Cars } from "../../../../../api/Cars-Data";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Rating } from "flowbite-react";

export default function PaymentPage() {
  const params = useParams();
  const carId = Number(params?.id);

  const car = Cars.find((car) => car.id === carId);

  if (!car) {
    return <div>Car not found</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row gap-10 justify-center">
      {/* Rental Summary */}
      <div className="border-2 rounded-lg w-full lg:w-[492px] h-auto p-7 space-y-5">
        <div>
          <h1 className="text-lg font-semibold">Rental Summary</h1>
          <p className="text-[#90A3BF]">
            Prices may change depending on the length of the rental and the
            price of your rental car.
          </p>
        </div>
        <div className="flex gap-5 border-b-2 pb-12 items-center">
          <div className="w-[270px] h-[180px] border-2 overflow-hidden rounded-lg grid place-items-center">
            <Image
              src={car.image}
              alt="Car"
              width={270}
              height={180}
              className="object-contain"
            />
          </div>
          <div className="space-y-1">
            <p className="font-bold text-3xl">{car.name}</p>
            <div className="flex gap-1">
              <Rating>
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star filled={false} />
              </Rating>
            </div>
            <p className="text-[#90A3BF]">440+ Reviewer</p>
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <p className="text-[#90A3BF] text-lg font-semibold">Subtotal</p>
            <p className="font-bold text-lg">${car.price}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-[#90A3BF] text-lg font-semibold">Tax</p>
            <p className="font-bold text-lg">$0</p>
          </div>
        </div>
        {/* Promo code input */}
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Apply promo code"
            className="w-full p-3 pr-20 border-none bg-[#F6F7F9] placeholder:text-[#90A3BF] "
          />
          <button className="absolute right-7 top-1/2 transform -translate-y-1/2 text-black font-semibold ">
            Apply now
          </button>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="font-bold text-black">Total Rental Price</p>
            <p className="text-[#90A3BF]">
              Overall price and includes rental discount
            </p>
          </div>
          <span className="font-bold text-black text-2xl">${car.price}</span>
        </div>
      </div>

      <section className="w-full">
        {/* Billing Info */}
        <form className="space-y-7">
          <h1 className="text-lg font-bold">Billing Info</h1>
          <div className="flex justify-between text-[#90A3BF]">
            <p>Please enter your billing info</p>
            <p>Step 1 of 4</p>
          </div>
          <div className="grid md:grid-cols-2 gap-7">
            <div>
              <label className="block font-semibold mb-2">Name</label>
              <input
                type="text"
                placeholder="Your name"
                aria-label="Name"
                required
                className="w-full p-3 border rounded-lg bg-[#F6F7F9] placeholder:text-[#90A3BF] border-none"
              />
            </div>
            <div>
              <label className="block font-semibold mb-2">Phone Number</label>
              <input
                type="text"
                placeholder="Phone number"
                aria-label="Phone Number"
                required
                className="w-full p-3 border rounded-lg bg-[#F6F7F9] placeholder:text-[#90A3BF] border-none"
              />
            </div>
            <div>
              <label className="block font-semibold mb-2">Address</label>
              <input
                type="text"
                placeholder="Address"
                aria-label="Address"
                required
                className="w-full p-3 border rounded-lg bg-[#F6F7F9] placeholder:text-[#90A3BF] border-none"
              />
            </div>
            <div>
              <label className="block font-semibold mb-2">Town / City</label>
              <input
                type="text"
                placeholder="Town or city"
                aria-label="Town or City"
                required
                className="w-full p-3 border rounded-lg bg-[#F6F7F9] placeholder:text-[#90A3BF] border-none"
              />
            </div>
          </div>
        </form>
        {/* Rental Info */}
        <form action="action">
          <h1 className="text-lg font-bold">Rental Info</h1>
          <div className="flex justify-between text-[#90A3BF]">
            <p>Please select your rental date</p>
            <p>Step 2 of 4</p>
          </div>
          <div>
            <div>
              <label className="block font-semibold mb-2">Locations</label>
              <input
                type="text"
                placeholder="Town or city"
                aria-label="Town or City"
                required
                className="w-full p-3 border rounded-lg bg-[#F6F7F9] placeholder:text-[#90A3BF] border-none"
              />
            </div>
            <div>
              <label className="block font-semibold mb-2">Time</label>
              <input
                type="text"
                placeholder="Town or city"
                aria-label="Town or City"
                required
                className="w-full p-3 border rounded-lg bg-[#F6F7F9] placeholder:text-[#90A3BF] border-none"
              />
            </div>
            <div>
              <label className="block font-semibold mb-2">Date</label>
              <input
                type="text"
                placeholder="Town or city"
                aria-label="Town or City"
                required
                className="w-full p-3 border rounded-lg bg-[#F6F7F9] placeholder:text-[#90A3BF] border-none"
              />
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}
