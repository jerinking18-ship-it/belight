import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { type Address, type dummyTypes } from "../assets/assets";
import toast from "react-hot-toast";

const Cart = () => {
  const [showAddress, setShowAddresss] = React.useState(false);
  const {
    navigate,
    products,
    cartItems,
    removeFromCart,
    getCartAmount,
    getCartCount,
    updateCartItems,
    setShowAddress,
    axios,
    user,
  } = useAppContext();
  const [cartArray, setCartArray] = useState<(dummyTypes | undefined)[]>([]);
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [selectedAdress, setShowSelectedAddress] = useState<Address | null>(
    null,
  );
  const [paymentOption, setPaymentOption] = useState<string>("COD");

  const getUserAddress = async () => {
    try {
      const { data } = await axios.get("/api/address/get");
      if (data.success) {
        setAddresses(data.address);
        if (data.address.length > 0) {
          setShowSelectedAddress(data.addresses[0]);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  const getCart = () => {
    let temArray = [];
    for (const key in cartItems) {
      const product = products.find((item) => item._id === key);
      if (product) {
        product.quantity = cartItems[key];
      }
      temArray.push(product);
    }
    setCartArray(temArray);
  };
  useEffect(() => {
    if (products.length > 0 && cartItems) {
      getCart();
    }
  }, [products, cartItems]);

  const placeOrder = async () => {};

  useEffect(() => {
    if (user) {
      getUserAddress;
    }
  }, [user]);

  return products.length > 0 && cartItems ? (
    <div className="flex flex-col md:flex-row py-16 max-w-6xl w-full px-6 mx-auto ">
      <div className="flex-1 max-w-4xl bg-white p-8 rounded-lg">
        <h1 className="text-3xl font-medium mb-6 text-sb ">
          Shopping Cart{" "}
          <span className="text-sm text-primary4">{getCartCount()}</span>
        </h1>

        <div className="grid grid-cols-[2fr_1fr_1fr] text-primary4 text-base font-medium pb-3 ">
          <p className="text-left">Product Details</p>
          <p className="text-center">Subtotal</p>
          <p className="text-center">Action</p>
        </div>

        {cartArray.map((product, index) => (
          <div
            key={index}
            className="grid grid-cols-[2fr_1fr_1fr]  items-center text-sm md:text-base font-medium pt-3 bg-bgw rounded-lg"
          >
            <div className="flex items-center md:gap-6 gap-3 ">
              <div
                onClick={() => {
                  navigate(
                    `/products/${product?.category.toLocaleLowerCase()}/${
                      product?._id
                    }`,
                  );
                  scrollTo(0, 0);
                }}
                className="cursor-pointer w-24 h-24 flex items-center justify-center   overflow-hidden"
              >
                <img
                  className="max-w-full h-full object-cover"
                  src={product?.image?.[0]}
                  alt={product?.name}
                />
              </div>
              <div>
                <p className="hidden md:block font-semibold text-sb">
                  {product?.name}
                </p>
                <div className="font-normal text-sb">
                  <div className="flex items-center">
                    <p>Qty:</p>
                    <select
                      onChange={(e) =>
                        updateCartItems(product!._id, Number(e.target.value))
                      }
                      value={cartItems[product!._id]}
                      className="outline-none"
                    >
                      {Array(
                        cartItems[product?._id ?? 0] > 9
                          ? cartItems[product?._id ?? 0]
                          : 9,
                      )
                        .fill("")
                        .map((_, index) => (
                          <option key={index} value={index + 1}>
                            {index + 1}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>{" "}
            {product && (
              <p className="text-center flex items-center text-sb">
                {product.offerPrice * (product.quantity ?? 0)}
              </p>
            )}
            <button
              onClick={() => {
                removeFromCart(product!._id);
              }}
              className="cursor-pointer mx-auto"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m12.5 7.5-5 5m0-5 5 5m5.833-2.5a8.333 8.333 0 1 1-16.667 0 8.333 8.333 0 0 1 16.667 0"
                  stroke="#ed8916ff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        ))}

        <button className="group cursor-pointer flex items-center mt-8 gap-2 text-primary4 font-medium">
          <svg
            width="15"
            height="11"
            viewBox="0 0 15 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.09 5.5H1M6.143 10 1 5.5 6.143 1"
              stroke="#ed8916ff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Continue Shopping
        </button>
      </div>

      <div className="max-w-[360px] w-full bg-[url('/src/assets/images/62624.jpg')] bg-no-repeat p-5 max-md:mt-16 border border-amber-600/10">
        <h2 className="text-xl md:text-xl font-medium text-sb">
          Order Summary
        </h2>
        <hr className="border-amber-900/40 my-5" />

        <div className="mb-6">
          <p className="text-sm font-medium uppercase text-sb">
            Delivery Address
          </p>
          <div className="relative flex justify-between items-start mt-2">
            <p className="text-sb/70">
              {selectedAdress
                ? `${selectedAdress.street} , ${selectedAdress.city},${selectedAdress.state}`
                : "No address found"}
            </p>
            <button
              onClick={() => setShowAddresss(!showAddress)}
              className="text-primary4 hover:underline cursor-pointer"
            >
              Change
            </button>
            {showAddress && (
              <div className="absolute top-12 py-1 bg-white border border-amber-900/40 text-sm w-full">
                {addresses.map((address) => (
                  <p
                    onClick={() => {
                      setShowSelectedAddress(address);
                      setShowAddresss(false);
                    }}
                    className="text-sb/70 p-2 hover:bg-primary/30"
                  >
                    {address.street},{address.city},{address.state},
                    {address.country}
                  </p>
                ))}
                <p
                  onClick={() => setShowAddress(true)}
                  className="text-primary4 text-center cursor-pointer p-2 hover:bg-primary/30"
                >
                  Add address
                </p>
              </div>
            )}
          </div>

          <p className="text-sm font-medium uppercase mt-6 text-sb">
            Payment Method
          </p>

          <select
            onChange={(e) => setPaymentOption(e.target.value)}
            className="w-full border border-amber-900/40 bg-bgw px-3 py-2 mt-2 outline-none text-sb"
          >
            <option value="COD">Cash On Delivery</option>
            <option value="Online">Online Payment</option>
          </select>
        </div>

        <hr className="border-amber-900/40" />

        <div className="text-sb/70 mt-4 space-y-2">
          <p className="flex justify-between">
            <span>Price</span>
            <span className="text-sb"> {getCartAmount()}</span>
          </p>
          <p className="flex justify-between">
            <span>Shipping Fee</span>
            <span className="text-primary4">Free</span>
          </p>
          <p className="flex justify-between">
            <span>GST (2%)</span>
            <span className="text-sb">{(getCartAmount() * 2) / 100}</span>
          </p>
          <p className="flex justify-between">
            <span>Handyling Chargers</span>
            <span className="text-sb">{+10}</span>
          </p>
          <p className="flex justify-between text-lg font-medium mt-3 text-sb">
            <span>Total Amount:</span>
            <span>{getCartAmount() + (getCartAmount() * 2) / 100 + +10}</span>
          </p>
        </div>

        <button
          onClick={placeOrder}
          className="w-full py-3 mt-6 cursor-pointer bg-sb text-bgw font-medium hover:bg-b transition"
        >
          {paymentOption === "COD" ? "Place Order" : "Proceed to Checkout"}
        </button>
      </div>
    </div>
  ) : null;
};
export default Cart;
