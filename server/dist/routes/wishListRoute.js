"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authUser_1 = __importDefault(require("../middlewares/authUser"));
const wishlistController_1 = require("../controllers/wishlistController");
const wishListRouter = express_1.default.Router();
wishListRouter.post("/update", authUser_1.default, wishlistController_1.updateWishlist);
wishListRouter.get("/get", authUser_1.default, wishlistController_1.getWishlist);
exports.default = wishListRouter;
