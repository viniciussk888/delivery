/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";

import { Category } from "../../models/Category";

export async function ListCategories(req: Request, res: Response) {
  try {
    const categories = await Category.find();

    return res.json(categories);
  } catch (error:any) {
    return res.status(500).json({ error: error.message });
  }
}
