import { Query, Resolver } from "type-graphql";
import { Shop } from "../entity/Shop";
import dataSource from "../utils";

@Resolver()
class ShopResolver {
  @Query(() => [Shop])
  async getAllSkills(): Promise<Shop[]> {
    const result = await dataSource.getRepository(Shop).find();
    return result;
  }
}

export default ShopResolver;
