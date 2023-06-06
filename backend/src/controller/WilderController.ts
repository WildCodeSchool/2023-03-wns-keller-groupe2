import { Wilder } from "../entity/Wilder";
import dataSource from "../utils";
import { Request, Response } from "express";

const wilderController = {
  create: (req: Request, res: Response) => {
    dataSource
      .getRepository(Wilder)
      .save(req.body)
      .then(() => {
        res.send("Wilder Created");
      })
      .catch((err) => {
        console.log("error", err);
        res.send("Error while creating the Wilder");
      });
  },
  read: async (req: Request, res: Response) => {
    try {
      const allWilders = await dataSource
        .getRepository(Wilder)
        .find({ relations: { grades: { skill: true } } });
      res.send(allWilders);
    } catch (err) {
      console.log(err);
      res.send("Error while reading the wilders");
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      await dataSource.getRepository(Wilder).delete(req.params.id);
      res.send("Wilder deleted");
    } catch (err) {
      console.log(err);
      res.send("Error while deleting the wilder");
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      const updateResult = await dataSource
        .getRepository(Wilder)
        .update(req.params.id, req.body);
      res.send(updateResult);
    } catch (err) {
      console.log(err);
      res.send("Error while updating");
    }
  },
};

export default wilderController;
