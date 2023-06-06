import { Request, Response } from "express";
import { Grade } from "../entity/Grade";
// import { Skill } from "../entity/Skill";
// import { Wilder } from "../entity/Wilder";
import dataSource from "../utils";

const gradeController = {
  create: async (req: Request, res: Response) => {
    try {
      /*
      const wilderToGrade = await dataSource
        .getRepository(Wilder)
        .findOneByOrFail({ name: req.body.wilderName });
      console.log("wilder", wilderToGrade);

      const skillToGrade = await dataSource
        .getRepository(Skill)
        .findOneByOrFail({ name: req.body.skillName });
      console.log(skillToGrade);
      */

      await dataSource.getRepository(Grade).save({
        grade: req.body.grade,
        wilderId: req.body.wilderId,
        skillId: req.body.skillId,
      });
      res.send("grade created");
    } catch (err) {
      console.log(err);
      res.send("error while grading the wilder");
    }
  },
};

export default gradeController;
