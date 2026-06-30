"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const db_1 = __importDefault(require("./configs/db"));
require("dotenv/config");
const userRoute_1 = __importDefault(require("./routes/userRoute"));
const sellerRoute_1 = __importDefault(require("./routes/sellerRoute"));
const cloudinary_1 = __importDefault(require("./configs/cloudinary"));
const productRoute_1 = __importDefault(require("./routes/productRoute"));
const CartRoute_1 = __importDefault(require("./routes/CartRoute"));
const addressRoute_1 = __importDefault(require("./routes/addressRoute"));
const orderRoute_1 = __importDefault(require("./routes/orderRoute"));
const wishListRoute_1 = __importDefault(require("./routes/wishListRoute"));
const app = (0, express_1.default)();
const port = Number(process.env.PORT) || 4000;
const startServer = async () => {
    try {
        await (0, db_1.default)();
        await (0, cloudinary_1.default)();
        const allowedOrigins = ["http://localhost:5174"];
        app.use(express_1.default.json());
        app.use(express_1.default.urlencoded({ extended: true }));
        app.use((0, cookie_parser_1.default)());
        app.use((0, cors_1.default)({ origin: allowedOrigins, credentials: true }));
        app.get("/", (req, res) => res.send("API is working"));
        app.use("/api/user", userRoute_1.default);
        app.use("/api/seller", sellerRoute_1.default);
        app.use("/api/product", productRoute_1.default);
        app.use("/api/cart", CartRoute_1.default);
        app.use("/api/address", addressRoute_1.default);
        app.use("/api/order", orderRoute_1.default);
        app.use("/api/wishlist", wishListRoute_1.default);
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    }
    catch (error) {
        console.log(error);
    }
};
startServer();
