import User from "../models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.json({ success: false, message: "Missing Details" });
      return;
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.json({ success: false, message: "User already exists " });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email, password: hashedPassword });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, {
      expiresIn: "7d",
    });
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res.json({
      success: true,
      user: { email: user.email, name: user.name },
    });
    return;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
      res.json({ success: false, message: error.message });
    }
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.json({
        success: false,
        message: "Email and password are required",
      });
      return;
    }

    const user = await User.findOne({ email });
    if (!user) {
      res.json({ success: false, message: "Invalid email or password" });
      return;
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.json({ success: false, message: "Invalid email or password" });
      return;
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, {
      expiresIn: "7d",
    });
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res.json({
      success: true,
      user: { email: user.email, name: user.name },
    });
    return;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
      res.json({ success: false, message: error.message });
    }
  }
};

export const isAuth = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;
    const user = await User.findById(userId).select("-password");
    return res.json({ success: true, user });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
      res.json({ success: false, message: error.message });
    }
  }
};
export const logout = async (req: Request, res: Response) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    });
    return res.json({ success: true, message: "Logged Out" });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
      res.json({ success: false, message: error.message });
    }
  }
};
