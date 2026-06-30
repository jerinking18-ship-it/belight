"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sellerController_1 = require("../controllers/sellerController");
const sellerController_2 = require("../controllers/sellerController");
const authSeller_1 = __importDefault(require("../middlewares/authSeller"));
const sellerRouter = express_1.default.Router();
sellerRouter.post("/login", sellerController_1.sellerLogin);
sellerRouter.get("/is-auth", authSeller_1.default, sellerController_1.isSellerAuth);
sellerRouter.get("/logout", sellerController_2.sellerLogout);
exports.default = sellerRouter;
