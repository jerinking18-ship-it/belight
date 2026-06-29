import React from "react";
import { useAppContext } from "../context/AppContext";
import { PromoImage } from "../assets/assets";

const Promotion: React.FC = () => {
  const { navigate } = useAppContext();
  return (
    <div className="mt-16 ">
      <div className="md:grid md:grid-cols-2 max-w-4xl bg-[url('/src/assets/images/62624.jpg')] bg-no-repeat  mx-4 md:mx-auto rounded-xl  ">
        <img
          src={PromoImage}
          alt=""
          className="hidden md:block w-100 max-w-lg h-94 rounded-l-xl"
        />
        <div className="relative flex items-center justify-center ">
          <div className="max-md:py-20 px-6 md:px-10 text-center">
            <h1 className="text-3xl font-bold text-sb">
              <span className="text-primary4">Don’t miss out</span> on our
              discounted products.
            </h1>
            <p className="mt-4 text-primary4/70">
              Don't miss out on amazing discounts—shop now before they're gone!
            </p>
            <button
              onClick={() => navigate("/products")}
              className="rounded bg-sb text-sm px-14 py-3 mt-4 text-bgw cursor-pointer hover:bg-primary4"
            >
              Check out the products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
