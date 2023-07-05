import { Request, Response } from "express";
import { Bike } from "../entity/Bike";
import dataSource from "../utils";

const BikeController = {
  create: async (req: Request, res: Response) => {
    try {
      await dataSource.getRepository(Bike).save(req.body);
      res.send("Bike created successfully");
    } catch (err) {
      res.send("Error while creating Bike");
    }
  },
  read: async (req: Request, res: Response) => {
    try {
      const allBikes = await dataSource.getRepository(Bike).find();
      res.send(allBikes);
    } catch (err) {
      res.send("Error while fetching Bikes");
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      await dataSource.getRepository(Bike).delete(req.params.id);
      res.send("Bike deleted successfully");
    } catch (err) {
      res.send("Error while deleting Bike");
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      const updateResult = await dataSource
        .getRepository(Bike)
        .update(req.params.id, req.body);
      res.send(updateResult);
    } catch (err) {
      res.send("Error while updating Bike");
    }
  },
};
export default BikeController;
