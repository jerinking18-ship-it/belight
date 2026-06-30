"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authUser_1 = __importDefault(require("../middlewares/authUser"));
const orderController_1 = require("../controllers/orderController");
const authSeller_1 = __importDefault(require("../middlewares/authSeller"));
const orderRouter = express_1.default.Router();
orderRouter.post("/cod", authUser_1.default, orderController_1.placeOrder);
orderRouter.get("/user", authUser_1.default, orderController_1.getUserOrders);
orderRouter.get("/seller", authSeller_1.default, orderController_1.getAllOrders);
exports.default = orderRouter;
