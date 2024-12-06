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
    <div className=" flex flex-wrap gap-10 order text-wrap">
      <div className="border-2 rounded-lg w-[492px] h-[560px] gap-5 lg:order-last p-2 ">
        <div>
          <h1 className=" text-lg  md:font-semibold">Rental Summary</h1>
          <p className="text-[#90A3BF]">
            Prices may change depending on the length of the rental and the
            price of your rental car.
          </p>
        </div>
        <div className="flex gap-5 border-b-2 pb-12">
          <Image
            src={car.image}
            alt="Car"
            width={150}
            height={65}
            className=" border-2 "
          />
          <div className=" space-y-1">
            <p className=" font-bold text-3xl">{car.name}</p>
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
            <p className=" font-bold text-lg">${car.price}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-[#90A3BF] text-lg font-semibold">Tax</p>
            <p className=" font-bold text-lg">$0</p>
          </div>
        </div>
        <div>
          <div className="flex ">
            <input
              type="text"
              className="flex-1 px-4 py-2 border-none bg-[#F6F7F9] rounded-lg placeholder:text-[#90A3BF] "
              placeholder="Enter your website"
            />
            <button className="bg-blue-500  text-white px-4 py-2">
              Submit
            </button>
          </div>
        </div>
      </div>
      <section className=" ">
        <form action="action" className=" gap-4">
          <h1 className=" text-lg font-bold">Billing Info</h1>
          <div className="flex justify-between text-[#90A3BF]">
            <p>Please enter your billing info</p>
            <p>Step 1 of 4</p>
          </div>

          <div className="  md:flex flex-wrap gap-7">
            <div>
              <div>
                <label className="  label font-semibold">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className=" border-none rounded-lg bg-[#F6F7F9]  placeholder:text-[#90A3BF]    "
                />
              </div>
              <div>
                <label className="  label font-semibold">Phone Number</label>
                <input
                  type="text"
                  placeholder="Phone number"
                  className=" border-none rounded-lg bg-[#F6F7F9]  placeholder:text-[#90A3BF]    "
                />
              </div>
            </div>

            <div>
              <div>
                <label className="  label font-semibold">Address</label>
                <input
                  type="text"
                  placeholder="Address"
                  className=" border-none rounded-lg bg-[#F6F7F9]  placeholder:text-[#90A3BF]    "
                />
              </div>
              <div>
                <label className="  label font-semibold">Town / City</label>
                <input
                  type="text"
                  placeholder="Town or city"
                  className=" border-none rounded-lg bg-[#F6F7F9]  placeholder:text-[#90A3BF]    "
                />
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}
