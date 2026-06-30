"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authUser_1 = __importDefault(require("../middlewares/authUser"));
const addressController_1 = require("../controllers/addressController");
const addressRouter = express_1.default.Router();
addressRouter.post("/add", authUser_1.default, addressController_1.addAddress);
addressRouter.get("/get", authUser_1.default, addressController_1.getAddres);
exports.default = addressRouter;
