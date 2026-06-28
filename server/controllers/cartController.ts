import { Request, Response } from "express";
import User from "../models/user";
export const updateCart = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;
    const { cartItems } = req.body;
    await User.findByIdAndUpdate(userId, { cartItems });
    res.json({ success: true, message: "Cart Updated" });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
      res.json({ success: false, message: error.message });
    }
  }
};
