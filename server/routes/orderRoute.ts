import express from "express";
import authUser from "../middlewares/authUser";
import {
  getAllOrders,
  getUserOrders,
  placeOrder,
} from "../controllers/orderController";
import authSeller from "../middlewares/authSeller";

const orderRouter = express.Router();
orderRouter.post("/cod", authUser, placeOrder);
orderRouter.get("/user", authUser, getUserOrders);
orderRouter.get("/seller", authSeller, getAllOrders);

export default orderRouter;
