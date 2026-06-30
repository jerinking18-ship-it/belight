"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeStock = exports.productById = exports.productList = exports.addProduct = void 0;
const cloudinary_1 = require("cloudinary");
const product_1 = __importDefault(require("../models/product"));
const addProduct = async (req, res) => {
    try {
        let productData = JSON.parse(req.body.productData);
        const images = req.files || [];
        let imagesUrl = await Promise.all(images.map(async (item) => {
            let result = await cloudinary_1.v2.uploader.upload(item.path, {
                resource_type: "image",
            });
            return result.secure_url;
        }));
        await product_1.default.create({ ...productData, image: imagesUrl });
        res.json({ success: true, message: "Poduct Added" });
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
            res.json({ success: false, message: error.message });
        }
    }
};
exports.addProduct = addProduct;
const productList = async (req, res) => {
    try {
        const products = await product_1.default.find({});
        res.json({ success: true, products });
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
            res.json({ success: false, message: error.message });
        }
    }
};
exports.productList = productList;
const productById = async (req, res) => {
    try {
        const { id } = req.body;
        const product = await product_1.default.findById(id);
        res.json({ success: true, product });
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
            res.json({ success: false, message: error.message });
        }
    }
};
exports.productById = productById;
const changeStock = async (req, res) => {
    try {
        const { id, inStock } = req.body;
        await product_1.default.findByIdAndUpdate(id, { inStock });
        res.json({ success: true, message: "Stock Updated" });
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
            res.json({ success: false, message: error.message });
        }
    }
};
exports.changeStock = changeStock;
