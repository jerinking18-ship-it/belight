import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import type { dummyTypes } from "../assets/assets";
import { FaArrowRightLong } from "react-icons/fa6";
import ProductCard from "../components/ProductCard";
import { IoIosStar } from "react-icons/io";

const ProductDetails: React.FC = () => {
  const { products, navigate, addToCart } = useAppContext();
  const { id } = useParams();
  const [similarProducts, setSimilarProducts] = useState<dummyTypes[]>([]);
  const [thumbnail, setThumbnail] = useState<string | null>();
  const product = products.find((item) => item._id === id);
  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();
      productsCopy = productsCopy.filter(
        (item) => product?.category === item.category,
      );
      setSimilarProducts(productsCopy.slice(0, 5));
    }
  }, [product]);
  useEffect(() => {
    setThumbnail(product?.image[0] ? product?.image[0] : null);
  }, [product]);

  return (
    product && (
      <div className="mt-16 px-32">
        <div className="max-w-6xl w-full px-6">
          <p>
            <span className="text-sb">Home</span> /
            <span className="text-sb"> Products</span> /<span> {}</span>
            <span className="text-primary4"> {product?.name}</span>
          </p>

          <div className="flex flex-col md:flex-row gap-16 mt-4">
            <div className="flex gap-3">
              <div className="flex flex-col gap-3">
                {product?.image.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => setThumbnail(image)}
                    className="border max-w-24 border-primary rounded overflow-hidden cursor-pointer"
                  >
                    <img src={image} alt={`Thumbnail ${index + 1}`} />
                  </div>
                ))}
              </div>

              <div className="border border-primary w-100 rounded overflow-hidden">
                <img
                  src={thumbnail ?? ""}
                  alt="Selected product"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="text-sm w-full md:w-1/2">
              <h1 className="text-3xl font-medium text-sb">{product?.name}</h1>

              <div className="flex items-center gap-0.5 mt-1 text-primary4">
                {[...Array(4)].map((_, index) =>
                  index < (product.ratings || 0) ? (
                    <IoIosStar key={index} />
                  ) : (
                    <IoIosStar key={index} />
                  ),
                )}
              </div>

              <div className="mt-6">
                <p className="text-primary4/70 line-through">
                  MRP: ${product?.price}
                </p>
                <p className="text-2xl font-medium text-sb">
                  MRP: ${product?.offerPrice}
                </p>
                <span className="text-primary4/70">
                  (inclusive of all taxes)
                </span>
              </div>

              <p className="text-base font-medium mt-6 text-sb ">
                About Product
              </p>
              <ul className="list-disc ml-4 text-primary4/70">
                {product?.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>

              <div className="flex items-center mt-10 gap-4 text-base">
                <button
                  className="w-full py-3.5 cursor-pointer font-medium bg-primary text-sb hover:bg-primary1 transition"
                  onClick={() => addToCart(product!._id)}
                >
                  Add to Cart
                </button>
                <button
                  className="w-full py-3.5 cursor-pointer font-medium bg-sb text-bgw hover:bg-b transition"
                  onClick={() => {
                    addToCart(product!._id);
                    navigate("/cart");
                  }}
                >
                  Buy now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-12 pl-22  ">
          <div className="flex flex-col items-center w-max text-sbb">
            <p className="text-3xl font-medium text-sb/90">Similar Products</p>
            <div className="w-20 h-0.5 bg-primary1 rounded-full mt-2"></div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:grid-cols-4 gap-6 lg:grid-cols-5 mt-6 mr-20">
              {similarProducts
                .filter((product) => product.inStock)
                .map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))}
            </div>
            <button
              onClick={() => {
                navigate("/products");
                scrollTo(0, 0);
              }}
              className="mx-auto flex items-center cursor-pointer px-12 my-16 py-2.5 border-2  border-primary4 rounded text-primary4 hover:bg-primary transition "
            >
              See more{" "}
              <FaArrowRightLong
                className="
                          hover:translate-x-1 transition ml-2 text-b"
              />
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductDetails;
