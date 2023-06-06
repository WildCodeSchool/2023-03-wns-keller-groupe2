import { Query, Resolver } from "type-graphql";
import dataSource from "../utils";
import { Skill } from "../entity/Skill";

@Resolver()
class SkillResolver {
  @Query(() => [Skill])
  async getAllSkills(): Promise<Skill[]> {
    const result = await dataSource.getRepository(Skill).find();
    return result;
  }
}

export default SkillResolver;
