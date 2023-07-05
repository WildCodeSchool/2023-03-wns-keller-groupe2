import { Query, Resolver } from "type-graphql";
import { Users } from "../entity/Users";
import dataSource from "../utils";

@Resolver()
class UsersResolver {
  @Query(() => [Users])
  async getAllShop(): Promise<Users[]> {
    const result = await dataSource.getRepository(Users).find();
    return result;
  }
}

export default UsersResolver;
