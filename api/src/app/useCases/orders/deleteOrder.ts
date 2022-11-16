/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";

import { Order } from "../../models/Order";

export async function deleteOrder(req: Request, res: Response) {
  try {
    const { orderId } = req.params;
    await Order.findByIdAndDelete(orderId);
    return res.status(200).json({ message: "Order deleted" });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
}
