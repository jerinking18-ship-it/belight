import React from "react";
import { icon1Image, icon2Image, icon3Image } from "../assets/assets";

const About: React.FC = () => {
  return (
    <div className="mb-21">
      {" "}
      <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 md:px-0 pt-16 ml-68">
        <div className="py-10 border-b border-primary md:py-0 md:border-r md:border-b-0 md:px-10">
          <div className="size-20  p-2 bg-primary/50 border-2 border-primary1 rounded">
            <img className="h-15" src={icon1Image} alt="" />
          </div>
          <div className="mt-5 space-y-1">
            <h3 className="text-lg font-medium text-sb">Fastest Delivery</h3>
            <p className="text-sm text-primary4">
              Products delivered under 15 minutes.
            </p>
          </div>
        </div>
        <div className="py-10 border-b border-primary md:py-0 lg:border-r md:border-b-0 md:px-10">
          <div className="size-20 p-2 bg-primary/50 border-2 border-primary1 rounded">
            <img src={icon2Image} alt="" />
          </div>
          <div className="mt-5 space-y-1">
            <h3 className="text-lg font-medium text-sb">
              Freshness Guaranteted
            </h3>
            <p className="text-sm text-primary4">
              Fresh product straight from the source.
            </p>
          </div>
        </div>
        <div className="py-10 border-b border-primary md:py-0 md:border-b-0 md:px-10">
          <div className="size-20 p-2 bg-primary/50 border-2 border-primary1 rounded">
            <img src={icon3Image} alt="" />
          </div>
          <div className="mt-5 space-y-1">
            <h3 className="text-lg font-medium text-sb">Affortable Price</h3>
            <p className="text-sm text-primary4 ">
              Quality groceries at unbeatable prices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
