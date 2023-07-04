import { Request, Response } from "express";
import { Shop } from "../entity/Shop";
import dataSource from "../utils";

const ShopController = {
  create: async (req: Request, res: Response) => {
    try {
      await dataSource.getRepository(Shop).save(req.body);
      res.send("Shop created successfully");
    } catch (err) {
      res.send("Error while creating shop");
    }
  },
  read: async (req: Request, res: Response) => {
    try {
      const allShops = await dataSource.getRepository(Shop).find();
      res.send(allShops);
    } catch (err) {
      res.send("Error while fetching shops");
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      await dataSource.getRepository(Shop).delete(req.params.id);
      res.send("Shop deleted successfully");
    } catch (err) {
      res.send("Error while deleting shop");
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      const updateResult = await dataSource
        .getRepository(Shop)
        .update(req.params.id, req.body);
      res.send(updateResult);
    } catch (err) {
      res.send("Error while updating shop");
    }
  },
};
export default ShopController;
