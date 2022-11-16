/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";

import { Category } from "../../models/Category";

export async function deleteCategory(req: Request, res: Response) {
  try {
    const { categoryId } = req.params;
    await Category.findByIdAndDelete(categoryId);
    return res.status(200).json({ message: "Category deleted" });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
}
