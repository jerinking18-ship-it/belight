"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sellerLogout = exports.isSellerAuth = exports.sellerLogin = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const sellerLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const sellerEmail = process.env.SELLER_EMAIL;
        const sellerPassword = process.env.SELLER_PASSWORD;
        const jwtSecret = process.env.JWT_SECRET;
        if (!sellerEmail || !sellerPassword || !jwtSecret) {
            res.status(500).json({
                success: false,
                message: "",
            });
            return;
        }
        if (password === sellerPassword && email === sellerEmail) {
            const token = jsonwebtoken_1.default.sign({ email }, jwtSecret, {
                expiresIn: "7d",
            });
            res.cookie("sellerToken", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
                maxAge: 7 * 24 * 60 * 60 * 1000,
            });
            res.json({ success: true, message: "Logged In" });
            return;
        }
        else {
            res.json({ succes: false, message: "Invalid Credentials" });
            return;
        }
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
            res.json({ success: false, message: error.message });
        }
    }
};
exports.sellerLogin = sellerLogin;
const isSellerAuth = (req, res) => {
    try {
        return res.json({ success: true });
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
            res.json({ success: false, message: error.message });
        }
    }
};
exports.isSellerAuth = isSellerAuth;
const sellerLogout = (req, res) => {
    try {
        res.clearCookie("sellerToken", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
        });
        return res.json({ success: true, message: "Log Out" });
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
            res.json({ success: false, message: error.message });
        }
    }
};
exports.sellerLogout = sellerLogout;
