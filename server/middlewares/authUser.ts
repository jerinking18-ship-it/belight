import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

const authUser = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token;

  if (!token) {
    return res.json({ success: false, message: "Not Authorized" });
  }
  try {
    const tokenDecode: any = jwt.verify(
      token,
      process.env.JWT_SECRET as string,
    );
    if (tokenDecode.id) {
      (req as any).userId = tokenDecode.id;
    } else {
      return res.json({ success: false, message: "Not Authorized" });
    }
    next();
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
      res.json({ success: false, message: error.message });
    }
  }
};

export default authUser;
