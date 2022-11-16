/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";

import { Product } from "../../models/Product";

export async function listProductsByCategory(req: Request, res: Response) {
  try {
    const { categoryId } = req.params;
    const products = await Product.find().where("category").equals(categoryId);

    return res.json(products);
  } catch (error:any) {
    return res.status(500).json({ error: error.message });
  }
}
