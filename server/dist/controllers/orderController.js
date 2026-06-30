"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllOrders = exports.getUserOrders = exports.placeOrder = void 0;
const product_1 = __importDefault(require("../models/product"));
const order_1 = __importDefault(require("../models/order"));
const placeOrder = async (req, res) => {
    try {
        const { userId, items, address } = req.body;
        if (!address || items.lenght === 0) {
            return res.json({ success: false, message: "Invalid data" });
        }
        let amount = 0;
        for (const item of items) {
            const product = await product_1.default.findById(item.product);
            if (!product)
                continue;
            amount += product.offerPrice * item.quantity;
        }
        amount += Math.floor(amount * 0.02);
        amount += 10;
        await order_1.default.create({
            userId,
            items,
            amount,
            address,
            paymentType: "COD",
        });
        return res.json({ success: true, message: "Order Placed Successfully" });
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
            res.json({ success: false, message: error.message });
        }
    }
};
exports.placeOrder = placeOrder;
const getUserOrders = async (req, res) => {
    try {
        const { userId } = req.body;
        const orders = await order_1.default.find({
            userId,
            $or: [{ paymentType: "COD" }, { isPaid: true }],
        })
            .populate("items.product address")
            .sort({ createdAt: -1 });
        res.json({ succes: true, orders });
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
            res.json({ success: false, message: error.message });
        }
    }
};
exports.getUserOrders = getUserOrders;
const getAllOrders = async (req, res) => {
    try {
        const orders = await order_1.default.find({
            $or: [{ paymentType: "COD" }, { isPaid: true }],
        })
            .populate("items.product address")
            .sort({ createdAt: -1 });
        res.json({ success: true, orders });
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
            res.json({ success: false, message: error.message });
        }
    }
};
exports.getAllOrders = getAllOrders;
