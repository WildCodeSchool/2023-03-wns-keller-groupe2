import { Request, Response } from "express";
import { Images } from "../entity/Images";
import dataSource from "../utils";

const ImagesController = {
  create: async (req: Request, res: Response) => {
    try {
      await dataSource.getRepository(Images).save(req.body);
      res.send("Images created successfully");
    } catch (err) {
      res.send("Error while creating Images");
    }
  },
  read: async (req: Request, res: Response) => {
    try {
      const allImagess = await dataSource.getRepository(Images).find();
      res.send(allImagess);
    } catch (err) {
      res.send("Error while fetching Imagess");
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      await dataSource.getRepository(Images).delete(req.params.id);
      res.send("Images deleted successfully");
    } catch (err) {
      res.send("Error while deleting Images");
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      const updateResult = await dataSource
        .getRepository(Images)
        .update(req.params.id, req.body);
      res.send(updateResult);
    } catch (err) {
      res.send("Error while updating Images");
    }
  },
};
export default ImagesController;
