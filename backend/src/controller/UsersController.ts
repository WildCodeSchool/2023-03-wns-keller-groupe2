import { Request, Response } from "express";
import { Users } from "../entity/Users";
import dataSource from "../utils";

const UsersController = {
  create: async (req: Request, res: Response) => {
    try {
      await dataSource.getRepository(Users).save(req.body);
      res.send("Users created successfully");
    } catch (err) {
      res.send("Error while creating Users");
    }
  },
  read: async (req: Request, res: Response) => {
    try {
      const allUsers = await dataSource.getRepository(Users).find();
      res.send(allUsers);
    } catch (err) {
      res.send("Error while fetching Users");
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      await dataSource.getRepository(Users).delete(req.params.id);
      res.send("Users deleted successfully");
    } catch (err) {
      res.send("Error while deleting Users");
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      const updateResult = await dataSource
        .getRepository(Users)
        .update(req.params.id, req.body);
      res.send(updateResult);
    } catch (err) {
      res.send("Error while updating Users");
    }
  },
};
export default UsersController;
