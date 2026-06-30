import express from "express";
import authUser from "../middlewares/authUser";
import { getWishlist, updateWishlist } from "../controllers/wishListController";

const wishListRouter = express.Router();

wishListRouter.post("/update", authUser, updateWishlist);
wishListRouter.get("/get", authUser, getWishlist);

export default wishListRouter;
