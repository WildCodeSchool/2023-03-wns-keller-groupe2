import { Request, Response } from "express";
import { Rent } from "../entity/Rent";
import dataSource from "../utils";

const RentController = {
  create: async (req: Request, res: Response) => {
    try {
      await dataSource.getRepository(Rent).save(req.body);
      res.send("Rent created successfully");
    } catch (err) {
      res.send("Error while creating Rent");
    }
  },
  read: async (req: Request, res: Response) => {
    try {
      const allRent = await dataSource.getRepository(Rent).find();
      res.send(allRent);
    } catch (err) {
      res.send("Error while fetching Rent");
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      await dataSource.getRepository(Rent).delete(req.params.id);
      res.send("Rent deleted successfully");
    } catch (err) {
      res.send("Error while deleting Rent");
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      const updateResult = await dataSource
        .getRepository(Rent)
        .update(req.params.id, req.body);
      res.send(updateResult);
    } catch (err) {
      res.send("Error while updating Rent");
    }
  },
};
export default RentController;
