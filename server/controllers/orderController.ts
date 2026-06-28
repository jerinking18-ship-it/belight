import { Request, Response } from "express";
import Product from "../models/product";
import Order from "../models/order";

export const placeOrder = async (req: Request, res: Response) => {
  try {
    const { userId, items, address } = req.body;
    if (!address || items.lenght === 0) {
      return res.json({ success: false, message: "Invalid data" });
    }
    let amount = 0;
    for (const item of items) {
      const product = await Product.findById(item.product);
      if (!product) continue;
      amount += product.offerPrice * item.quantity;
    }

    amount += Math.floor(amount * 0.02);
    amount += 10;
    await Order.create({
      userId,
      items,
      amount,
      address,
      paymentType: "COD",
    });
    return res.json({ success: true, message: "Order Placed Successfully" });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
      res.json({ success: false, message: error.message });
    }
  }
};

export const getUserOrders = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;
    const orders = await Order.find({
      userId,
      $or: [{ paymentType: "COD" }, { isPaid: true }],
    })
      .populate("items.product address")
      .sort({ createdAt: -1 });
    res.json({ succes: true, orders });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
      res.json({ success: false, message: error.message });
    }
  }
};

export const getAllOrders = async (req: Request, res: Response) => {
  try {
    const orders = await Order.find({
      $or: [{ paymentType: "COD" }, { isPaid: true }],
    })
      .populate("items.product address")
      .sort({ createdAt: -1 });
    res.json({ success: true, orders });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
      res.json({ success: false, message: error.message });
    }
  }
};
