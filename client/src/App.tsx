import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import BestSellerPage from "./pages/BestSellerPage";
import Footer from "./components/Footer";
import ProductCategory from "./pages/ProductCategory";
import { Toaster } from "react-hot-toast";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import MyOrders from "./pages/MyOrders";
import { useAppContext } from "./context/AppContext";
import Login from "./components/Login";

import SellerLayout from "./pages/seller/SellerLayout";
import SellerLogin from "./components/seller/SellerLogin";
import AddProduct from "./pages/seller/AddProduct";
import ProductList from "./pages/seller/ProductList";
import Orders from "./pages/seller/Orders";
import AddAddress from "./components/AddAddress";

const App: React.FC = () => {
  const isSellerPath = useLocation().pathname.includes("/seller");
  const { showUserLoggedIn, isSeller, showAddress } = useAppContext();
  return (
    <div className="bg-bgw">
      {isSellerPath ? null : <Navbar />}
      {showUserLoggedIn ? <Login /> : null}
      {showAddress ? <AddAddress /> : null}
      <div className={`${isSellerPath ? "" : "px-6 md:px-16 lg:px-24"} `}>
        <Toaster
          toastOptions={{
            success: {
              iconTheme: {
                primary: "#ed8916ff",
                secondary: "#fefcf8ff",
              },
            },
            style: {
              fontWeight: "500",
              color: "#460703ff",
            },
          }}
        />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<AllProducts />} />
        <Route path="/products/:category/:id" element={<ProductDetails />} />

        <Route path="/products/:category" element={<ProductCategory />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/best-seller" element={<BestSellerPage />} />
        <Route
          path="seller"
          element={isSeller ? <SellerLayout /> : <SellerLogin />}
        >
          <Route index element={isSeller ? <AddProduct /> : null} />
          <Route path="product-list" element={<ProductList />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>

      {!isSellerPath && <Footer />}
    </div>
  );
};

export default App;
