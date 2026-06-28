import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

const authSeller = async (req: Request, res: Response, next: NextFunction) => {
  const { sellerToken } = req.cookies;

  if (!sellerToken) {
    return res.json({ success: false, message: "Not Authorized" });
  }
  try {
    const tokenDecode: any = jwt.verify(
      sellerToken,
      process.env.JWT_SECRET as string,
    );
    if (tokenDecode.email === process.env.SELLER_EMAIL) {
      next();
    } else {
      return res.json({ success: false, message: "Not Authorized" });
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
      res.json({ success: false, message: error.message });
    }
  }
  console.log("Cookies", req.cookies);
};

export default authSeller;
