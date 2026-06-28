import { v2 as cloudinary } from "cloudinary";
import { Request, Response } from "express";
import Product from "../models/product";
export const addProduct = async (req: Request, res: Response) => {
  try {
    let productData = JSON.parse(req.body.productData);

    const images = (req.files as Express.Multer.File[]) || [];
    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      }),
    );

    await Product.create({ ...productData, image: imagesUrl });
    res.json({ success: true, message: "Poduct Added" });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
      res.json({ success: false, message: error.message });
    }
  }
};
export const productList = async (req: Request, res: Response) => {
  try {
    const products = await Product.find({});
    res.json({ success: true, products });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
      res.json({ success: false, message: error.message });
    }
  }
};
export const productById = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    const product = await Product.findById(id);
    res.json({ success: true, product });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
      res.json({ success: false, message: error.message });
    }
  }
};

export const changeStock = async (req: Request, res: Response) => {
  try {
    const { id, inStock } = req.body;
    await Product.findByIdAndUpdate(id, { inStock });
    res.json({ success: true, message: "Stock Updated" });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
      res.json({ success: false, message: error.message });
    }
  }
};
