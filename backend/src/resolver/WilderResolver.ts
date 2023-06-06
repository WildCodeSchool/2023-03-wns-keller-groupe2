import { Query, Resolver, Mutation, Arg, Authorized } from "type-graphql";
import { Wilder } from "../entity/Wilder";
import dataSource from "../utils";

@Resolver()
class WilderResolver {
  @Authorized()
  @Query(() => [Wilder])
  async wilders(): Promise<Wilder[]> {
    const result = await dataSource
      .getRepository(Wilder)
      .find({ relations: { grades: { skill: true } } });
    return result;
  }

  @Mutation(() => Wilder)
  async addWilder(@Arg("name") name: string): Promise<Wilder> {
    const createdWilder = await dataSource.getRepository(Wilder).save({ name });
    return createdWilder;
  }

  @Mutation(() => String)
  async deleteWilder(@Arg("id") id: string): Promise<string> {
    const deleteResult = await dataSource.getRepository(Wilder).delete({ id });
    console.log(deleteResult);
    return "wilder deleted";
  }
}

export default WilderResolver;
