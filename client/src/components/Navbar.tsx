import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { IoMdContact } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { PiShoppingCartBold } from "react-icons/pi";
import { PiHeartStraightBold } from "react-icons/pi";
import { useState } from "react";
import LocationModal from "./LocationModal";
import { AiFillThunderbolt } from "react-icons/ai";
import toast from "react-hot-toast";

const Navbar: React.FC = () => {
  const [deliveryTime, setDeliveryTime] = useState(17);
  const [open, setOpen] = React.useState(false);
  const {
    searchQuery,
    navigate,
    getCartCount,
    getWishListCount,
    user,
    setUser,
    setShowUserLoggedIn,
    axios,
  } = useAppContext();
  useEffect(() => {
    if (searchQuery.length > 0) {
      navigate("/products");
    }
  }, [searchQuery]);
  const logout = async () => {
    try {
      const { data } = await axios.get("/api/user/logout");
      if (data.success) {
        toast.success(data.message);
        setUser(null);
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };
  const [openLocation, setOpenLocation] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Select Location");
  const calculateDeliveryTime = (lat: number, lon: number) => {
    const storeLat = 19.076;
    const storeLon = 72.8777;

    const distance = Math.sqrt(
      Math.pow(lat - storeLat, 2) + Math.pow(lon - storeLon, 2),
    );

    const time = Math.round(distance * 1000);

    setDeliveryTime(time || 10);
  };

  return (
    <div className="bg-[url('/src/assets/images/62624.jpg')] bg-no-repeat ">
      <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-30 py-4 border-b border-primary  relative transition-all">
        <NavLink to={"/"}>
          <img
            className="h-10 w-32 rounded "
            src="src/assets/images/logo.png"
            alt=""
          />
        </NavLink>
        <div
          onClick={() => setOpenLocation(true)}
          className="ml-4 cursor-pointer leading-tight mr-8"
        >
          <p className="font-bold text-lg text-sb flex items-center ">
            <AiFillThunderbolt />
            {deliveryTime} minutes
          </p>

          <p className=" text-sm truncate max-w-[180px] text-primary3 ">
            {selectedLocation}
          </p>
          {openLocation && (
            <LocationModal
              onClose={() => setOpenLocation(false)}
              onSelect={(location) => {
                setSelectedLocation(location);
                calculateDeliveryTime;
                setOpenLocation(false);
              }}
            />
          )}
        </div>

        <div className="hidden sm:flex items-center text-primary4 pl-4 flex-nowrap whitespace-nowrap">
          <NavLink
            className="  rounded-lg transition-all duration-300 hover:text-b"
            to="products"
          >
            All Products
          </NavLink>
        </div>
        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-7">
          <div className="hidden lg:flex items-center text-md text-b gap-3 pt-1 pb-1 rounded pl-3  w-full max-w-[1200px] bg-primary">
            <FaSearch />
            <input
              className="py-1.5 w-110 bg-transparent outline-none placeholder-b/60 "
              type="text"
              placeholder="Search products"
            />
          </div>

          <div
            onClick={() => navigate("/cart")}
            className="relative cursor-pointer"
          >
            <PiShoppingCartBold
              style={{
                fontSize: "21px",
                color: "#b23335ff",
              }}
            />
            <button className="absolute -top-2 -right-2 text-xs text-white bg-primary4 w-[18px] h-[18px] rounded-3xl">
              {getCartCount()}
            </button>
          </div>
          <div
            onClick={() => navigate("/wishlist")}
            className="relative cursor-pointer"
          >
            <PiHeartStraightBold
              style={{
                fontSize: "21px",
                color: "#b23335ff",
              }}
            />
            <button className="absolute -top-2 -right-2 text-xs text-white bg-primary4 w-[18px] h-[18px] rounded-3xl">
              {getWishListCount()}
            </button>
          </div>

          {!user ? (
            <button
              className="cursor-pointer px-8 py-2 bg-sb hover:bg-primary transition text-bgw rounded"
              onClick={() => {
                setShowUserLoggedIn(true);
              }}
            >
              Login
            </button>
          ) : (
            <div className="relative group">
              <IoMdContact
                style={{
                  fontSize: "40px",
                  color: "#660b05",
                }}
              />
              <ul className="hidden group-hover:block absolute top-10 right-8  bg-bgw shadow border border-primary py-2.5 w-30 text-sm z-40 text-sb">
                <li
                  onClick={() => navigate("my-orders")}
                  className="p-1.5 pl-3 hover:bg-primary cursor-pointer"
                >
                  My Orders
                </li>
                <li
                  onClick={logout}
                  className="p-1.5 pl-3 hover:bg-primary cursor-pointer"
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>

        <button
          onClick={() => (open ? setOpen(false) : setOpen(true))}
          aria-label="Menu"
          className="sm:hidden"
        >
          {/* Menu Icon SVG */}
          <svg
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="21" height="1.5" rx=".75" fill="#426287" />
            <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
            <rect
              x="6"
              y="13"
              width="15"
              height="1.5"
              rx=".75"
              fill="#ee9126ff"
            />
          </svg>
        </button>
        <button
          className="bg-primary2 text-white px-4 py-2 rounded-full text-sm"
          onClick={() => navigate("/seller")}
        >
          admin
        </button>

        {/* Mobile Menu */}
        <div
          className={`${open ? "flex" : "hidden"} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
        >
          <a href="#" className="block">
            Home
          </a>
          <a href="#" className="block">
            About
          </a>
          <a href="#" className="block">
            Contact
          </a>
          <button className="cursor-pointer px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm">
            Login
          </button>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
