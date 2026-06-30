"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authUser_1 = __importDefault(require("../middlewares/authUser"));
const cartController_1 = require("../controllers/cartController");
const cartRouter = express_1.default.Router();
cartRouter.post("/update", authUser_1.default, cartController_1.updateCart);
exports.default = cartRouter;
