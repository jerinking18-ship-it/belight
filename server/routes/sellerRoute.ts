import express from "express";
import { isSellerAuth, sellerLogin } from "../controllers/sellerController";
import { sellerLogout } from "../controllers/sellerController";
import authSeller from "../middlewares/authSeller";

const sellerRouter = express.Router();

sellerRouter.post("/login", sellerLogin);
sellerRouter.get("/is-auth", authSeller, isSellerAuth);
sellerRouter.get("/logout", sellerLogout);

export default sellerRouter;
