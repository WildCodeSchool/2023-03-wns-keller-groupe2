import { Request, Response } from "express";
import { Bike } from "../entity/Bike";
import dataSource from "../utils";

const BikeController = {
  create: async (req: Request, res: Response) => {
    try {
      await dataSource.getRepository(Bike).save(req.body);
      res.send("Order created successfully");
    } catch (err) {
      res.send("Error while creating Order");
    }
  },
  read: async (req: Request, res: Response) => {
    try {
      const allOrders = await dataSource.getRepository(Bike).find();
      res.send(allOrders);
    } catch (err) {
      res.send("Error while fetching Orders");
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      await dataSource.getRepository(Bike).delete(req.params.id);
      res.send("Order deleted successfully");
    } catch (err) {
      res.send("Error while deleting Order");
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      const updateResult = await dataSource
        .getRepository(Bike)
        .update(req.params.id, req.body);
      res.send(updateResult);
    } catch (err) {
      res.send("Error while updating Order");
    }
  },
};
export default BikeController;
