import React from "react";

export default function Footer() {
  return (
    <div className="flex justify-around p-5 mt-10  gap-10 lg:gap-20 flex-wrap">
      <div>
        <p className="tracking-tighter text-2xl font-bold text-[#3563E9]  ">
          MORENT
        </p>
        <p>
          Our vision is to provide convenience and help increase your sales
          business.
        </p>
      </div>
      <div className="flex gap-10 flex-wrap ">
        <div className="space-y-3">
          <p className="font-bold">About</p>
          <p>How it works</p>
          <p>Featured</p>
          <p>Partnership</p>
          <p>Business Relation</p>
        </div>

        <div className="space-y-3">
          <p className="font-bold">Community</p>
          <p>Events</p>
          <p>Blog</p>
          <p>Podcast</p>
          <p>Invite a friend</p>
        </div>

        <div className="space-y-3">
          <p className="font-bold mb-2">Socials</p>
          <p>Discord</p>
          <p>Instagram</p>
          <p>Twitter</p>
          <p>Facebook</p>
        </div>
      </div>
      <div className=" w-screen flex flex-col items-center">
        <div className="flex border-t-2 pt-3 gap-5 font-semibold justify-between w-full ">
          <p >Privacy & Policy</p>
          <p >Terms & Condition</p>
        </div>
        <p>©2022 MORENT. All rights reserved</p>
      </div>
    </div>
  );
}
