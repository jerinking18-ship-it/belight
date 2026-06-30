"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAddres = exports.addAddress = void 0;
const address_1 = __importDefault(require("../models/address"));
const addAddress = async (req, res) => {
    try {
        const { userID, address } = req.body;
        await address_1.default.create({ ...address, userID });
        res.json({ success: true, message: "Address added Successfully" });
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
            res.json({ success: false, message: error.message });
        }
    }
};
exports.addAddress = addAddress;
const getAddres = async (req, res) => {
    try {
        const { userId } = req.body;
        const addresses = await address_1.default.find({ userId });
        res.json({ success: true, addAddress: exports.addAddress });
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
            res.json({ success: false, message: error.message });
        }
    }
};
exports.getAddres = getAddres;
