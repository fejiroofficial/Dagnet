import React from "react";
import Image from "next/image";
import logo from "@/app/asset/logo.png";
import nav from "@/app/asset/svg/eclipse.svg";
import cover from "@/app/asset/svg/landing.svg";
import illustration from "@/app/asset/illustration.png";

export default function Header({ rating = 5 }) {
  return (
    <div className="relative flex flex-col justify-center items-center text-center">
      <div className="flex items-center text-center relative z-10 gap-1 mb-8">
        <Image src={logo} alt="logo-icon" className="w-[100px] h-[100px]" />
      </div>
      <div className="mb-6 flex items-center justify-center relative lg:hidden w-full">
        <Image src={illustration} alt="illustration" className="w-[200px] h-[200px]" />
      </div>

      <div className="flex flex-col items-center relative z-10 text-center px-4">
        <h1 className="mb-4 text-[32px] leading-none font-bold lg:text-[48px] lg:leading-[4rem] max-w-[1011px]">
          How To Run Laser-Focused 30-Minute Meetings That Actually Get Things
          Done
        </h1>
        <h2 className="text-[18px] lg:text-[22px] font-medium lg:mb-3 w-[329px] md:w-full">
          Without Wasting Time, Losing Focus, or{" "}
          <span className="font-semibold lg:font-[900]">Chasing People</span>{" "}
          for Follow-Ups
        </h2>
      </div>
    </div>
  );
}
