import { Request, Response } from "express";
import Address from "../models/address";
export const addAddress = async (req: Request, res: Response) => {
  try {
    const { userID, address } = req.body;
    await Address.create({ ...address, userID });
    res.json({ success: true, message: "Address added Successfully" });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
      res.json({ success: false, message: error.message });
    }
  }
};

export const getAddres = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;
    const addresses = await Address.find({ userId });
    res.json({ success: true, addAddress });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
      res.json({ success: false, message: error.message });
    }
  }
};
