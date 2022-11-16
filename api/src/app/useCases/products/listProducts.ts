/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";

import { Product } from "../../models/Product";

export async function ListProducts(req: Request, res: Response) {
  try {
    const products = await Product.find();

    return res.json(products);
  } catch (error:any) {
    return res.status(500).json({ error: error.message });
  }
}
