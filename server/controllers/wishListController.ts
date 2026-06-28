import { Request, Response } from "express";
import User from "../models/user";

export const updateWishlist = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;
    const { wishlistItems } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }

    user.wishlistItems.clear();
    for (const key in wishlistItems) {
      user.wishlistItems.set(key, wishlistItems[key]);
    }

    await user.save();

    res.json({
      success: true,
      updatedUser: user,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Server Error",
    });
  }
};

export const getWishlist = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;

    const user = await User.findById(userId);
    if (!user) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }

    res.json({
      success: true,
      wishlistItems: user.wishlistItems,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Server Error",
    });
  }
};
