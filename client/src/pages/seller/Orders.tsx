import React, { useEffect, useState } from "react";
import { dummyOrders, type OrderType } from "../../assets/assets";

const Orders: React.FC = () => {
  const [orders, setOrders] = useState<OrderType[]>([]);
  const fetchOrders = async () => {
    setOrders(dummyOrders);
  };
  useEffect(() => {
    fetchOrders();
  });
  return (
    <div className="no-scrollbar flex-1 h-[95vh] overflow-y-scroll">
      <div className="md:p-10 p-4 space-y-4">
        <h2 className="text-lg font-medium text-sb">Orders List</h2>
        {orders.map((order, index) => (
          <div
            key={index}
            className="flex flex-col md:grid md:grid-cols-[2fr_1fr_1fr_1fr] md:items-center gap-5 p-5 max-w-4xl rounded border border-primary bg-primary/20"
          >
            <div className="flex gap-5">
              {order.items.map((item, index) => (
                <div className="flex gap-5">
                  <img
                    className="w-16 h-16  border border-primary rounded border-2"
                    src={item.product.image[0]}
                    alt=""
                  />
                  <div
                    key={index}
                    className="flex flex-col justify-center text-sb"
                  >
                    <p className="font-medium">
                      {item.product.name}{" "}
                      <span
                        className={`text-primary4 ${item.quantity < 2 && "hidden"}`}
                      >
                        x {item.quantity}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-sm">
              <p className="font-medium mb-1 text-primary4/90">
                {order.address.firstName} {order.address.lastName}
              </p>
              <p className="text-primary4/60">
                {order.address.street}, {order.address.city},{" "}
                {order.address.state},{order.address.pincode},{" "}
                {order.address.country}
              </p>
              <p className="text-primary4/90">{order.address.phone}</p>
            </div>

            <p className="font-medium text-base my-auto text-primary4">
              ${order.amount}
            </p>

            <div className="flex flex-col text-sm text-primary4/60">
              <p>Method: {order.paymentType}</p>
              <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
              <p>Payment: {order.isPaid ? "Paid" : "Pending"}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
