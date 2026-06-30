"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWishlist = exports.updateWishlist = void 0;
const user_1 = __importDefault(require("../models/user"));
const updateWishlist = async (req, res) => {
    try {
        const userId = req.userId;
        const { wishlistItems } = req.body;
        const user = await user_1.default.findById(userId);
        if (!user) {
            return res.json({
                success: false,
                message: "User not found",
            });
        }
        user.wishlistItems.clear();
        for (const key in wishlistItems) {
            user.wishlistItems.set(key, wishlistItems[key]);
        }
        await user.save();
        res.json({
            success: true,
            updatedUser: user,
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "Server Error",
        });
    }
};
exports.updateWishlist = updateWishlist;
const getWishlist = async (req, res) => {
    try {
        const userId = req.userId;
        const user = await user_1.default.findById(userId);
        if (!user) {
            return res.json({
                success: false,
                message: "User not found",
            });
        }
        res.json({
            success: true,
            wishlistItems: user.wishlistItems,
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "Server Error",
        });
    }
};
exports.getWishlist = getWishlist;
