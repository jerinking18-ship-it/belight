import React from "react";
import { categories } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Categories: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="px-8 pb-4 pt-5 text-bgw font-medium text-3xl bg-sb ml-35 mr-33 rounded">
        Categories
      </div>
      <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 mt-14 pb-14 gap-9 pl-29 pr-23 mx-7 mr-15 ">
        {categories.map((category, index) => (
          <div
            className="group cursor-poiter py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center w-38 "
            style={{ backgroundColor: category.bgColors }}
            onClick={() => {
              navigate(`/products/${category.path.toLocaleLowerCase()}`);
            }}
          >
            <img
              src={category.Image}
              alt=""
              key={index}
              className="cursor-pointer group-hover:scale-108 transition h-24 w-27 mt-3 rounded  "
            />
            <p className="text-l font-medium text-sb  "> {category.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
