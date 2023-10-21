"use client";
import Image from "next/image";
import { useState } from "react";

const Location = () => {
  const [toggle, setToggle] = useState(false);
  // console.log(toggle);

  return toggle ? (
    <div className="relative z-20 xs:w-[268px]  w-[200px] flex flex-col xs:gap-8 gap-2 rounded-3xl bg-green-90 xs:px-7 xs:py-8 px-4 py-5 ">
      <div className="flex flex-col ">
        <div className="flexBetween">
          <p className="regular-16 text-gray-20">Location</p>
          <Image
            src="/close.svg"
            alt="close"
            width={24}
            height={24}
            className="cursor-pointer"
            onClick={() => {
              setToggle((prevValue) => !prevValue);
            }}
          />
        </div>

        <p className=" bold-20 text-white">Aguas Calientes</p>
      </div>

      <div className="flexBetween mt-2">
        <div className="flex flex-col">
          <p className="regular-16 block text-gray-20">Distance</p>
          <p className=" bold-20 text-white">173.28 mi</p>
        </div>
        <div className="flex flex-col">
          <p className="regular-16 block text-gray-20">Elevation</p>
          <p className=" bold-20 text-white">2.040 km</p>
        </div>
      </div>
    </div>
  ) : (
    <div
      className="relative w-[50px] xs:left-[200px] left-[140px] "
      onClick={() => {
        setToggle(!toggle);
      }}
    >
      <Image
        src="/location_point.svg"
        width={50}
        height={50}
        alt="point"
        className=" cursor-pointer  "
      />
      <Image
        src="/question.svg"
        alt="info"
        width={25}
        height={25}
        className="absolute top-[15%] left-[23%] cursor-pointer"
      />
    </div>
  );
};

export default Location;
