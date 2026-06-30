"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = require("../configs/multer");
const authSeller_1 = __importDefault(require("../middlewares/authSeller"));
const productController_1 = require("../controllers/productController");
const productRouter = express_1.default.Router();
productRouter.post("/add", multer_1.upload.array("images", 4), authSeller_1.default, productController_1.addProduct);
productRouter.get("/list", productController_1.productList);
productRouter.post("/id", productController_1.productById);
productRouter.post("/stock", authSeller_1.default, productController_1.changeStock);
exports.default = productRouter;
