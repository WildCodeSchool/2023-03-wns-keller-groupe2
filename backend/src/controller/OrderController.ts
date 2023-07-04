import { Request, Response } from "express";
import { Order } from "../entity/Order";
import dataSource from "../utils";

const OrderController = {
  create: async (req: Request, res: Response) => {
    try {
      await dataSource.getRepository(Order).save(req.body);
      res.send("Order created successfully");
    } catch (err) {
      res.send("Error while creating Order");
    }
  },
  read: async (req: Request, res: Response) => {
    try {
      const allOrders = await dataSource.getRepository(Order).find();
      res.send(allOrders);
    } catch (err) {
      res.send("Error while fetching Orders");
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      await dataSource.getRepository(Order).delete(req.params.id);
      res.send("Order deleted successfully");
    } catch (err) {
      res.send("Error while deleting Order");
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      const updateResult = await dataSource
        .getRepository(Order)
        .update(req.params.id, req.body);
      res.send(updateResult);
    } catch (err) {
      res.send("Error while updating Order");
    }
  },
};
export default OrderController;
