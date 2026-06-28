import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import ProductCard from "./ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { IoIosArrowForward } from "react-icons/io";

const Products: React.FC = () => {
  const { products, navigate } = useAppContext();
  const [filteredProducts] = useState(products);
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-[url('/src/assets/images/62624.jpg')] bg-no-repeat ml-35 mr-33  ">
      <div className="flex items-center ">
        <div className=" px-8  pt-5 text-bgw font-medium text-3xl  ml-2  mr-33 text-sb mt-0">
          Products
        </div>
        <div>
          {" "}
          <button
            onClick={() => {
              navigate("products");
              scrollTo(0, 0);
            }}
            className="ml-180 mt-10  text-sm py-2 px-2 bg-sb text-bgw  items-center rounded group hidden md:flex items-center gap-1 hover:bg-b transition cursor-pointer"
          >
            See more{" "}
            <IoIosArrowForward
              className="
                        hover:translate-x-1 transition"
            />
          </button>
        </div>
      </div>
      <div className="  relative  mt-6 pl-8 pr-5 pb-6 ">
        <Slider {...settings}>
          {filteredProducts
            .filter((product) => product.inStock)
            .map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default Products;
