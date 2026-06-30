import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./configs/db";
import userRouter from "./routes/userRoute";
import sellerRouter from "./routes/sellerRoute";
import connectCloudinary from "./configs/cloudinary";
import productRouter from "./routes/productRoute";
import cartRouter from "./routes/CartRoute";
import addressRouter from "./routes/addressRoute";
import orderRouter from "./routes/orderRoute";
import wistListRouter from "./routes/wishListRoute";

const app = express();
const port = Number(process.env.PORT) || 4000;
const startServer = async () => {
  try {
    await connectDB();
    await connectCloudinary();

    const allowedOrigins = [
      "http://localhost:5173",
      "https://belight1.vercel.app",
    ];
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(cors({ origin: allowedOrigins, credentials: true }));

    app.get("/", (req, res) => res.send("API is working"));
    app.use("/api/user", userRouter);
    app.use("/api/seller", sellerRouter);
    app.use("/api/product", productRouter);
    app.use("/api/cart", cartRouter);
    app.use("/api/address", addressRouter);
    app.use("/api/order", orderRouter);
    app.use("/api/wishlist", wistListRouter);

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
startServer();
