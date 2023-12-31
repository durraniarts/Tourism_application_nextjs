import Image from "next/image";
import React from "react";
import Button from "./Button";
import Location from "./Location";

const Hero = () => {
  return (
    <section className=" max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row  ">
      {/* <div className="hero-map" /> */}
      {/* LEFT */}

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] lg:top-[-15px] top-[-25px] w-10 lg-w-[50px] "
        />

        <h1 className="bold-52 lg:bold-88 ">Putuk Truno Camp Area</h1>
        <p className="regular-16 mt-16 text-gray-30 xl:max-w-[520px]">
          We want to be on each of your journeys seeking the satisfaction of
          seeing the incorruptible beauty of nature. We can help you on an
          adventure around the world in just one app
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="stars"
                  width={24}
                  height={24}
                />
              ))}
          </div>
          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className=" regular-16 lg:regular-20 ml-1">
              Excellent Reviews
            </span>
          </p>
        </div>

        <div className="flex w-full gap-3 flex-col sm:flex-row">
          <Button
            type="button"
            title="Download App"
            variant="btn_green shadow-lg shadow-green-50"
          />
          <Button
            type="button"
            title="How we work?"
            icon="/play.svg"
            variant="btn_white_text shadow-sm shadow-red-300"
          />
        </div>
      </div>

      {/* RIGHT */}
      <div className="relative flex flex-1 items-start min-h-[220px] ">
        <Image
          src="/hero-bg.svg"
          alt="heroBg"
          width={500}
          height={500}
          className="absolute xl:right-[-100px] xl:min-w-[1250px] min-w-[900px] sm:right-[-50px] right-[-150px] top-[-100px] "
        />
        <Location />
      </div>
    </section>
  );
};

export default Hero;
