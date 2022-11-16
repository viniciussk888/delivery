/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";

import { Order } from "../../models/Order";

export async function changeOrderStatus(req: Request, res: Response) {
  try {
    const { orderId } = req.params;
    const { status } = req.body;
    if (!["WAITING", "IN_PROGRESS", "DONE"].includes(status)) {
      return res.status(400).json({ error: "Status invalid" });
    }
    await Order.findByIdAndUpdate(orderId, { status }, { new: true });
    return res.status(200).json({ message: "Order updated" });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
}
