"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authUser = async (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.json({ success: false, message: "Not Authorized" });
    }
    try {
        const tokenDecode = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        if (tokenDecode.id) {
            req.userId = tokenDecode.id;
        }
        else {
            return res.json({ success: false, message: "Not Authorized" });
        }
        next();
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
            res.json({ success: false, message: error.message });
        }
    }
};
exports.default = authUser;
