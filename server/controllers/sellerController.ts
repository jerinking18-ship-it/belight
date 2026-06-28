import jwt from "jsonwebtoken";
import { Request, Response } from "express";

export const sellerLogin = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { email, password } = req.body;

    const sellerEmail = process.env.SELLER_EMAIL;
    const sellerPassword = process.env.SELLER_PASSWORD;
    const jwtSecret = process.env.JWT_SECRET;

    if (!sellerEmail || !sellerPassword || !jwtSecret) {
      res.status(500).json({
        success: false,
        message: "",
      });
      return;
    }
    if (password === sellerPassword && email === sellerEmail) {
      const token = jwt.sign({ email }, jwtSecret as string, {
        expiresIn: "7d",
      });
      res.cookie("sellerToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      res.json({ success: true, message: "Logged In" });
      return;
    } else {
      res.json({ succes: false, message: "Invalid Credentials" });
      return;
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
      res.json({ success: false, message: error.message });
    }
  }
};

export const isSellerAuth = (req: Request, res: Response) => {
  try {
    return res.json({ success: true });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
      res.json({ success: false, message: error.message });
    }
  }
};

export const sellerLogout = (req: Request, res: Response) => {
  try {
    res.clearCookie("sellerToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    });
    return res.json({ success: true, message: "Log Out" });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
      res.json({ success: false, message: error.message });
    }
  }
};
