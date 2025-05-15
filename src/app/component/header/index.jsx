import React from 'react';
import Image from 'next/image';
import logo from '@/app/asset/svg/logo.svg';
import nav from '@/app/asset/svg/eclipse.svg';
import banner from "@/app/asset/svg/book.svg";
import cover from "@/app/asset/svg/landing.svg";

export default function Header({ rating = 5 }) {
  return (
    <div className="relative flex flex-col justify-center items-center text-center">
      <Image
        src={nav}
        alt="background"
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 z-[-1] w-[170px] h-[170px] hidden lg:block"
        width={800}
        height={300}
      />
           <div className="flex items-center justify-center relative lg:hidden w-full">
              <Image src={banner} alt="banner" className="w-full lg:w-[492px]"/>
          </div>
      <div className="flex items-center text-center relative z-10 gap-1 mb-8">
        <Image src={logo} alt="logo-icon" className="w-[26px] h-[25px] lg:w-[41px] lg:h-[39px]" />
        <div>
          {Array.from({ length: rating }, (_, index) => (
            <span key={index} className="text-[#FFC700] text-[9px] lg:text-[14px]">&#9733;</span>
          ))}
          <p className="text-[9px] lg:text-[14px] font-medium">CRO expert</p>
        </div>
      </div>

      <div className="flex flex-col items-center relative z-10 text-center">
        <h1 className="text-[32px] lg:text-[48px] lg:font-bold max-w-[1011px]">
          How To Run Laser-Focused 30-Minute Meetings That Actually Get Things Done
        </h1>
        <h2 className="text-[18px] lg:text-[22px] font-medium lg:mb-3 w-[329px] md:w-full">
        Without Wasting Time, Losing Focus, or <span className="font-semibold lg:font-[900]">Chasing People</span> for Follow-Ups
        </h2>
      </div>
    </div>
  );
}
