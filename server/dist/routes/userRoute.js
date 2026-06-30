"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const authUser_1 = __importDefault(require("../middlewares/authUser"));
const userRouter = express_1.default.Router();
console.log("user route");
userRouter.post("/register", userController_1.register);
userRouter.post("/login", userController_1.login);
userRouter.get("/is-auth", authUser_1.default, userController_1.isAuth);
userRouter.get("/logout", authUser_1.default, userController_1.logout);
exports.default = userRouter;
