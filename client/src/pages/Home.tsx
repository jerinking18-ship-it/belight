import React from "react";
import Sidebar from "../components/Sidebar";
import HomeBanner from "../components/HomeBanner";

import Categories from "../components/Categories";
import BestSeller from "../components/BestSeller";
import Products from "../components/Products";
import Promotion from "../components/Promotion";
import NewLetter from "../components/NewLetter";
import About from "../components/About";
import AboutUs from "../components/AboutUs";

const Home: React.FC = () => {
  let slides: string[] = [
    "/src/assets/images/Oils.jpg",
    "/src/assets/images/Oils.jpg",
    "/src/assets/images/Oils.jpg",
  ];
  return (
    <div>
      <div className=" fixed left-0 top-0 h-screen">
        <Sidebar />
      </div>
      <div className="w-[80%] m-auto ">
        <HomeBanner slides={slides} />
      </div>
      <div>
        <Categories />
        <BestSeller />
        <Products />
        <Promotion />
        <NewLetter />
        <AboutUs />
        <About />
      </div>
    </div>
  );
};

export default Home;
