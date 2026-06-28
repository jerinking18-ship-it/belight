import React, { useEffect, useState } from "react";
import { dummyOrders, type OrderType } from "../assets/assets";

const MyOrders: React.FC = () => {
  const [myOrders, setMyOrders] = useState<OrderType[]>([]);

  const fetchOrders = async () => {
    setMyOrders(dummyOrders);
  };
  useEffect(() => {
    fetchOrders();
  }, []);
  return (
    <div className=" mt-16 pl-21">
      <div className="flex flex-col items-end w-max mb-8">
        <div className="text-2xl font-medium text-sb">MY ORDERS </div>
        <div className="w-16 h-0.5 bg-primary rounded-full"></div>
      </div>
      {myOrders.map((order, index) => (
        <div
          key={index}
          className="border border-primary rounded mb-10 p-4 py-5 max-w-4xl "
        >
          <p className="flex justify-between md:items-center text-primary4 md:font-medium mb-3 ">
            <span>OrderId:{order._id}</span>
            <span>Payment:{order.paymentType}</span>
          </p>
          {order.items.map((item, index) => (
            <div
              key={index}
              className={`relative bg-primary/10 text-primary/70 ${order.items.length !== index + 1 && "border-b"}
               rounded flex flex-col flex-row items-center justify-between p-4 py-5  w-full max-w-4xl`}
            >
              <div className="flex items-center mb-4 md:mb-0">
                <div className="border border-2 rounded">
                  {" "}
                  <img
                    className="w-18 h-18"
                    src={item.product.image[0]}
                    alt=""
                  />
                </div>
                <div className="ml-4">
                  <h2 className="text-xl font-medium text-sb">
                    {item.product.name}
                  </h2>
                  <p className="text-primary4 text-sm">
                    Category: {item.product.category}
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center text-primary4/75">
                <p>Quantity:{item.quantity || "1"}</p>
                <p>Status:{order.status}</p>
                <p>Date:{new Date(order.createdAt).toLocaleDateString()} </p>
              </div>
              <p className="text-primary4 text-lg font-medium">
                Amount : {item.product.offerPrice * item.quantity}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
