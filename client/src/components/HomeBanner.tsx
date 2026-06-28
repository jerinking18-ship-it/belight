import React, { useState } from "react";
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
interface HomeBannerProps {
  slides: string[];
}

const HomeBanner: React.FC<HomeBannerProps> = ({ slides }) => {
  const [current, setCurrent] = useState<number>(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };
  let nextSlide = () => {
    if (current == slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };
  return (
    <div className=" overflow-hidden relative ">
      <div
        className={` flex transition ease-out duration-800`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s) => {
          return (
            <img className="w-full h-99 rounded mt-6 mb-6  " src={s} alt="" />
          );
        })}
      </div>

      <div className="  absolute inset-0 top-0 h-full w-full justify-between items-center flex px-8 text-sb ">
        <div className=" relative z-10 flex items-center mt-60 font-medium  px-18 pl-10  ">
          <Link
            to={"/products"}
            className="group flex items-center gap-2 px-4 md:px-9 py-3 bg-sb  hover:bg-primary4 transition rounded text-bgw cursor-pointer mb-1 "
          >
            Shop Now
          </Link>
          <Link
            to={"/products"}
            className="group hidden md:flex items-center gap-2 px-9 py-3 cursor-pointer text-sbb font-medium "
          >
            Explore deals{" "}
            <FaArrowRightLong
              className="
            hover:translate-x-1 transition"
            />
          </Link>
        </div>
      </div>
      <div className=" absolute top-0 h-full w-full justify-between items-center flex px-4 text-sb ">
        <button onClick={previousSlide} className="cursor-pointer">
          <BiSolidLeftArrow size={26} />
        </button>
        <button onClick={nextSlide} className="cursor-pointer">
          <BiSolidRightArrow size={26} />
        </button>
        <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full mb-7">
          {slides.map((_, i) => (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle " + i}
              className={`rounded-full w-4 h-4 ${i == current ? "bg-sb" : "bg-bb cursor-pointer "} `}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
