import React from "react";
import type { dummyTypes } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";

interface ProductCardProps {
  product: dummyTypes;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const {
    addToCart,
    removeFromCart,
    cartItems,
    navigate,
    wishlistItems,
    addToWishlist,
    removeFromWishlist,
  } = useAppContext();

  return (
    product && (
      <div className="border border-primary rounded-md md:px-4 px-3 py-2 bg-white min-w-52 max-w-52 w-full relative">
        <div
          onClick={() => {
            navigate(
              `/products/${product.category.toLocaleLowerCase()}/${product._id}`,
            );
            scrollTo(0, 0);
          }}
          className="group cursor-pointer flex items-center justify-center px-2"
        >
          <img
            className="group-hover:scale-105 transition 34 w-30 md: w-32 h-32 mt-3 mb-2"
            src={product?.image?.[0]}
            alt={product.name}
          />
        </div>
        <div className="absolute z-20 right-5 top-5 bg-">
          {!wishlistItems[product._id] ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                addToWishlist(product._id);
              }}
            >
              <FaRegHeart
                style={{
                  fontSize: "20px",
                  color: "#ed8916ff",
                }}
              />
            </button>
          ) : (
            <button
              onClick={(e) => {
                e.stopPropagation();
                removeFromWishlist(product._id);
              }}
            >
              <FaHeart
                style={{
                  fontSize: "20px",
                  color: "#ed8916ff",
                }}
              />
            </button>
          )}
        </div>
        <div className="text-sb/60 text-sm">
          <p>{product.category}</p>
          <p className="text-sb font-medium text-lg truncate w-full">
            {product.name}
          </p>
          <div className="flex items-center gap-0.5 text-primary4 ">
            {[...Array(4)].map((_, index) =>
              index < (product.ratings || 0) ? (
                <IoIosStar key={index} />
              ) : (
                <IoIosStar key={index} />
              ),
            )}
          </div>
          <div className="flex items-end justify-between mt-2">
            <p className="md:text-xl text-base font-medium text-sb">
              ${product.offerPrice}{" "}
              <span className="text-sb/50 md:text-sm text-xs line-through">
                ${product.price}
              </span>
            </p>
            <div
              onClick={(e) => {
                e.stopPropagation;
              }}
              className="text-indigo-500"
            >
              {!cartItems[product._id] ? (
                <button
                  className="flex items-center justify-center gap-1 bg-primary border-2 border-sb md:w-20 w-16 h-[34px]  rounded text-sb font-medium  "
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product._id);
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0"
                      stroke="#660b05"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Add
                </button>
              ) : (
                <div className="flex items-center justify-center gap-2 md:w-20 w-16 h-[34px] bg-primary1/85 rounded select-none text-sb">
                  <button
                    onClick={() => removeFromCart(product._id)}
                    className="cursor-pointer text-md px-2 h-full"
                  >
                    -
                  </button>
                  <span className="w-5 text-center">
                    {cartItems[product._id]}
                  </span>
                  <button
                    onClick={() => addToCart(product._id)}
                    className="cursor-pointer text-md px-2 h-full"
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductCard;
