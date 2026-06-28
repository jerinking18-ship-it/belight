import React from "react";
import { useAppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import {categories} from "../assets/assets";
import ProductCard from "../components/ProductCard";

const ProductCategory: React.FC = () => {
  const { products } = useAppContext();
  const { category } = useParams();

  const searchCategory = categories.find(
    (item) => item.path.toLocaleLowerCase() === category,
  );
  const filteredProducts = products.filter(
    (product) => product.category.toLocaleLowerCase() === category,
  );
  return (
    <div className="m-16 flex flex-col ml-4 px-32  ">
      {searchCategory && (
        <div className="flex flex col items-end w-max">
          <p className="text-2xl font-medium">
            {searchCategory.text}
            <div className="w-10 h-0.5 bg-primary rounded-full"></div>
          </p>
        </div>
      )}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-18 md:gap-18 lg:grid-cols-5 xl:grid-cols-5 mt-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <div className=" flex items-center justify-center h-[60vh]">
          <p className=""> No products found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default ProductCategory;
