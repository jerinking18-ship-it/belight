"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCart = void 0;
const user_1 = __importDefault(require("../models/user"));
const updateCart = async (req, res) => {
    try {
        const userId = req.userId;
        const { cartItems } = req.body;
        await user_1.default.findByIdAndUpdate(userId, { cartItems });
        res.json({ success: true, message: "Cart Updated" });
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
            res.json({ success: false, message: error.message });
        }
    }
};
exports.updateCart = updateCart;
