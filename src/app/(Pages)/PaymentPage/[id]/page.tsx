"use client";
import React from "react";
import { Cars } from "../../../../../api/Cars-Data";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Rating } from "flowbite-react";
// import DatePickerComponent from "@/Components/Pick - Up/Date";
// import TimePickerComponent from "@/Components/Pick - Up/Time";

import visa from "../../../../../public/visa.png";
import Bitcoin from "../../../../../public/Bitcoin.png";
import paypal from "../../../../../public/paypal.png";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function PaymentPage() {
  const params = useParams();
  const carId = Number(params?.id);

  const car = Cars.find((car) => car.id === carId);

  if (!car) {
    return <div>Car not found</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row gap-10 justify-center lg:mx-24  mt-14">
      {/* Rental Summary */}
      <div className="border-2 rounded-lg w-full lg:w-[492px] h-fit p-7 space-y-5 lg:order-last ">
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
            className="w-full p-3 pr-20 border-none rounded-lg bg-[#F6F7F9] placeholder:text-[#90A3BF] "
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

      <section className="w-full space-y-7">
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
        {/* <form action="action">
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
              <TimePickerComponent />
            </div>
            <div>
              <label className="block font-semibold mb-2">Date</label>
              <DatePickerComponent />
            </div>
          </div>
        </form> */}
        {/* Payment Method */}
        <form action="action " className="space-y-7">
          <h1 className="text-lg font-bold">Payment Method</h1>
          <div className="flex justify-between text-[#90A3BF]">
            <p>Please enter your payment method</p>
            <p>Step 3 of 4</p>
          </div>
          <div>
            <div className="flex justify-between items-center bg-[#F6F7F9] p-2 rounded-lg">
              <p>Credit Card</p>
              <span>
                <Image src={visa} alt="visa" className="object-contain" />
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 bg-[#F6F7F9] p-7">
              <div>
                <label className="block font-semibold mb-2">Card Number</label>
                <input
                  type="text"
                  placeholder="Card number"
                  aria-label="Card Number"
                  required
                  className="w-full p-3 border rounded-lg bg-white placeholder:text-[#90A3BF] border-none"
                />
              </div>
              <div>
                <label className="block font-semibold mb-2">Card Holder</label>
                <input
                  type="text"
                  placeholder="Card Holder"
                  aria-label="Card Holder"
                  required
                  className="w-full p-3 border rounded-lg bg-white placeholder:text-[#90A3BF] border-none"
                />
              </div>
              <div>
                <label className="block font-semibold mb-2">
                  Expration Date
                </label>
                <input
                  type="text"
                  placeholder="Expiration Date"
                  aria-label="Expiration Date"
                  required
                  className="w-full p-3 border rounded-lg bg-white placeholder:text-[#90A3BF] border-none"
                />
              </div>
              <div>
                <label className="block font-semibold mb-2">CVC</label>
                <input
                  type="text"
                  placeholder="CVC"
                  aria-label="CVC"
                  required
                  className="w-full p-3 border rounded-lg bg-white placeholder:text-[#90A3BF] border-none"
                />
              </div>
            </div>
            <div className="  bg-white space-y-4 pt-5  ">
              <div className="form-control bg-[#F6F7F9] rounded-lg">
                <label className="label cursor-pointer gap-4">
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio radio-sm checked:bg-blue-500 "
                    defaultChecked
                  />
                  <span className="  mr-auto font-semibold">PayPal</span>
                  <span>
                    <Image src={paypal} alt="paypal" />
                  </span>
                </label>
              </div>
              <div className="form-control bg-[#F6F7F9] rounded-lg">
                <label className="label cursor-pointer gap-4">
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio radio-sm checked:bg-blue-500"
                    defaultChecked
                  />
                  <span className=" mr-auto font-semibold">Bitcoin</span>
                  <span>
                    <Image src={Bitcoin} alt="Bitcoin" />
                  </span>
                </label>
              </div>
            </div>
          </div>
        </form>
        {/* Confirmation */}
        <form action="action " className="space-y-7">
          <h1 className="text-lg font-bold">Confirmation</h1>
          <div className="flex justify-between text-[#90A3BF] gap-10">
            <p>
              We are getting to the end. Just few clicks and your rental is
              ready!
            </p>
            <p>Step 4 of 4</p>
          </div>
          <div className="space-y-4">
            <div className="form-control bg-[#F6F7F9] rounded-lg">
              <label className="label cursor-pointer gap-4">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-sm"
                />
                <span className=" mr-auto font-semibold">
                  I agree with sending an Marketing and newsletter emails. No
                  spam, promissed!
                </span>
              </label>
            </div>
            <div className="form-control bg-[#F6F7F9] rounded-lg">
              <label className="label cursor-pointer gap-4">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-sm"
                />
                <span className=" mr-auto font-semibold">
                  I agree with our terms and conditions and privacy policy.
                </span>
              </label>
            </div>
          </div>
          <div>
            <Link prefetch href={``}>
              <button className="bg-[#3563E9] text-white px-6 py-2 rounded-md">
                Rent Now
              </button>
            </Link>
          </div>
          <div>
          <ShieldCheck  size={40}/>
          <p className="font-bold text-xl">All your data are safe</p>
          <p className="text-[#90A3BF] ">We are using the most advanced security to provide you the best experience ever.</p>
          </div>
        </form>
      </section>
    </div>
  );
}
