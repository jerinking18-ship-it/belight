import React, { useState } from "react";

import { MdOutlineMenuOpen } from "react-icons/md";
import { FaThumbsUp } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa6";
import { RiContactsBook3Fill } from "react-icons/ri";
import { TbMessageReportFilled } from "react-icons/tb";
import { MdLiveHelp } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState<boolean | null>();
  const { navigate } = useAppContext();

  return (
    <div className=" ">
      <div className="fixed top-[75px]  ">
        <nav
          className={`shadow-md shadow-primary h-screen bg-[url('/src/assets/images/62624.jpg')] bg-no-repeat  p-2 flex flex-col duration-500 ${open ? "w-50" : "w-17"} `}
        >
          <div className="border border-b text-b px-3 py-2 h-15 flex justify-between items-center rounded bg-primary">
            <img
              src="src/assets/images/logo.png"
              alt=""
              className={` ${open ? "w-14" : "w-0"} rounded`}
            />
            <div>
              {" "}
              <MdOutlineMenuOpen
                size={30}
                className="cursor pointer"
                onClick={() => setOpen(!open)}
              />
            </div>
          </div>
          <div className="flex-1">
            <div className="px-2 py-3  hover:bg-primary rounded duration-300 cursor-pointer flex gap-2 items-center text-l text-sb">
              <div onClick={() => navigate("/best-seller")}>
                {" "}
                <FaThumbsUp size={26} />
              </div>
              <div
                className={`${!open && "w-0 translate-x-24 "}duration-500 overflow-hidden`}
              >
                <NavLink to={"/best-seller"}>BestSeller</NavLink>
              </div>
            </div>
            <div className="px-2 py-3 hover:bg-primary rounded duration-300 cursor-pointer flex gap-2 items-center text-l text-sb">
              <div>
                <NavLink to={"/products"}>
                  <FaProductHunt size={26} />{" "}
                </NavLink>
              </div>
              <div
                className={`${!open && "w-0 translate-x-24 "}duration-500 overflow-hidden`}
              >
                <NavLink to={"/products"}>Products</NavLink>
              </div>
            </div>
            <div className="px-2 py-3 hover:bg-primary  rounded duration-300 cursor-pointer flex gap-2 items-center text-l text-sb">
              <div>
                {" "}
                <NavLink to={"/contact"}>
                  {" "}
                  <RiContactsBook3Fill size={26} />{" "}
                </NavLink>
              </div>
              <div
                className={`${!open && "w-0 translate-x-24 "}duration-500 overflow-hidden`}
              >
                <NavLink to={"/contact"}>Contact</NavLink>
              </div>
            </div>
            <div className="px-2 py-3 hover:bg-primary  rounded duration-300 cursor-pointer flex gap-2 items-center text-l text-sb">
              <div>
                {" "}
                <NavLink to={"/report"}>
                  <TbMessageReportFilled size={26} />{" "}
                </NavLink>
              </div>
              <div
                className={`${!open && "w-0 translate-x-24 "}duration-500 overflow-hidden`}
              >
                <NavLink to={"/report"}>Report</NavLink>
              </div>
            </div>
            <div className="px-2 py-3 hover:bg-primary  rounded duration-300 cursor-pointer flex gap-2 items-center text-l text-sb">
              <div>
                <NavLink to={"/help"}>
                  <MdLiveHelp size={26} />{" "}
                </NavLink>
              </div>
              <div
                className={`${!open && "w-0 translate-x-24 "}duration-500 overflow-hidden`}
              >
                <NavLink to={"/help"}>Help</NavLink>
              </div>
            </div>
            <div className="px-2 py-3 hover:bg-primary rounded duration-300 cursor-pointer flex gap-2 items-center text-l text-sb">
              <div>
                <NavLink to={"/settings"}>
                  <IoSettings size={26} />
                </NavLink>
              </div>
              <div
                className={`${!open && "w-0 translate-x-24 "}duration-500 overflow-hidden`}
              >
                <NavLink to={"/settings"}>Settings</NavLink>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
