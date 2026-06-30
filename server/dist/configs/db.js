"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB = async () => {
    try {
        mongoose_1.default.connection.on("connected", () => console.log("Database Connected"));
        await mongoose_1.default.connect(`${process.env.MONGODB_URI}/belight`);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
    }
};
exports.default = connectDB;
