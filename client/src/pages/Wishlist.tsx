import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import type { dummyTypes } from "../assets/assets";
import { IoIosStar } from "react-icons/io";
const Wishlist: React.FC = () => {
  const {
    products,

    removeFromWishlist,
    wishlistItems,
    navigate,
    addToCart,
    getWishListCount,
  } = useAppContext();

  const [WishlistArray, setWishListArray] = useState<dummyTypes[]>([]);
  const getWishList = () => {
    let temArray = [];
    for (const key in wishlistItems) {
      const product = products.find((item) => item._id.toString() === key);
      if (product) temArray.push(product);
    }
    setWishListArray(temArray);
  };
  useEffect(() => {
    if (products.length > 0 && wishlistItems) {
      getWishList();
    }
  }, [products, wishlistItems]);

  return (
    <div className="px-6 md:px-16 lg:px-24 py-10 min-h-screen  ">
      <h1 className=" text-3xl font-medium mb-6 text-sb ">
        Wishlist Items
        <span className=" ml-1 text-sm text-primary4">
          {getWishListCount()}
        </span>
      </h1>
      <div className="ml-31 mt-14">
        {WishlistArray.length === 0 ? (
          <div className="flex flex-col items-center justify-center mt-20 text-center mr-30">
            <p className="text-sb text-lg">Your wishlist is empty </p>
            <button
              onClick={() => navigate("/")}
              className="mt-4 bg-primary4 text-bgw px-6 py-2 rounded hover:bg-sb transition cursor-pointer "
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-10">
            {WishlistArray.map((product, index) =>
              product ? (
                <div
                  key={index}
                  className=" flex bg-[url('/src/assets/images/62624.jpg')] bg-no-repeat shadow shadow-primary hover:shadow-md transition duration-300 overflow-hidden max-w-160 h-56"
                >
                  {/* IMAGE */}
                  <div className="relative cursor-pointer">
                    <div
                      onClick={() => {
                        navigate(
                          `/products/${product?.category.toLocaleLowerCase()}/${
                            product?._id
                          }`,
                        );
                        scrollTo(0, 0);
                      }}
                    >
                      <img
                        src={product?.image?.[0]}
                        alt={product?.name}
                        className=" group-hover:scale-105 transition h-56 w-52 object-cover"
                      />
                    </div>

                    {/* REMOVE BUTTON */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFromWishlist(product?._id);
                      }}
                      className="absolute top-4 left-146 bg-white p-2 rounded-full shadow shadow-primary hover:bg-sb/10 hover:text-white transition  "
                    >
                      ❌
                    </button>
                  </div>

                  {/* DETAILS */}
                  <div className="flex-1">
                    <h2 className="font-semibold text-xl truncate ml-4 mt-4 text-sb">
                      {product?.name}
                    </h2>
                    <div className="flex items-center gap-0.5 mt-1 text-primary4 ml-4">
                      {[...Array(4)].map((_, index) =>
                        index < (product.ratings || 0) ? (
                          <IoIosStar key={index} />
                        ) : (
                          <IoIosStar key={index} />
                        ),
                      )}
                    </div>

                    <div className="mt-3 ml-4">
                      <p className="text-sb/50 line-through">
                        MRP: ${product?.price}
                      </p>
                      <p className="text-xl font-medium text-sb">
                        MRP: ${product?.offerPrice}
                      </p>
                      <span className="text-sb/50">
                        (inclusive of all taxes)
                      </span>
                    </div>
                    <div className="flex gap-2 mt-4 ml-4 group h-10 w-48 ">
                      <button
                        onClick={() => addToCart(product?._id)}
                        className="flex-1 bg-sb text-white py-2  hover:bg-b transition text-sm  "
                      >
                        Add
                      </button>

                      <button
                        onClick={() => {
                          navigate(
                            `/products/${product?.category.toLocaleLowerCase()}/${
                              product?._id
                            }`,
                          );
                          scrollTo(0, 0);
                        }}
                        className="flex-1 bg-primary3 py-2 hover:bg-primary4 transition text-sm text-bgw  "
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
              ) : null,
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
