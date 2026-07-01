import React from "react";
import { useAppContext } from "../../context/AppContext";
import { Link, NavLink, Outlet } from "react-router-dom";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { BsCartCheck } from "react-icons/bs";
import toast from "react-hot-toast";
import { logoImage } from "../../assets/assets";

const SellerLayout: React.FC = () => {
  const { axios, navigate } = useAppContext();
  const addproducticon = (
    <AiOutlineAppstoreAdd
      style={{
        fontSize: "24px",
        color: "#b23335ff",
      }}
    />
  );

  const addlisticon = (
    <MdFormatListBulletedAdd
      style={{
        fontSize: "24px",
        color: "#b23335ff",
      }}
    />
  );

  const ordersicon = (
    <BsCartCheck
      style={{
        fontSize: "24px",
        color: "#b23335ff",
      }}
    />
  );

  const sidebarLinks = [
    { name: "Add Product", path: "/seller", icon: addproducticon },
    { name: "Product List", path: "/seller/product-list", icon: addlisticon },
    { name: "Orders", path: "/seller/orders", icon: ordersicon },
  ];

  const logout = async () => {
    try {
      const { data } = await axios.get("/api/seller/logout");
      if (data.success) {
        toast.success(data.message);
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
  return (
    <div>
      {" "}
      <div className="flex items-center justify-between px-4 md:px-8 border-b border-primary py-3 bg-[url('/src/assets/images/62624.jpg')] bg-no-repeat  transition-all duration-300">
        <Link to={"/"}>
          <img className="h-10 w-32 rounded" src={logoImage} alt="" />
        </Link>
        <div className="flex items-center gap-5 text-primary4">
          <p>Hi! Admin</p>
          <button
            className="border rounded bg-sb text-bgw text-sm px-4 py-2 px-2"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </div>
      <div className="flex min-h-screen">
        <div className="md:w-64 w-16 border-r m-h-screen text-base border-primary pt-4 flex flex-col transition-all duration-300 bg-[url('/src/assets/images/62624.jpg')] bg-no-repeat">
          {sidebarLinks.map((item) => (
            <NavLink
              to={item.path}
              key={item.name}
              end={item.path === "/seller"}
              className={({ isActive }) => `flex items-center py-3 px-4 gap-3 
                            ${
                              isActive
                                ? "border-r-4 md:border-r-[6px] bg-primary  text-b"
                                : "hover:bg-primary "
                            }`}
            >
              {item.icon}
              <p className="md:block hidden text-center">{item.name}</p>
            </NavLink>
          ))}
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default SellerLayout;
