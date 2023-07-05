import { Query, Resolver } from "type-graphql";
import { Rent } from "../entity/Rent";
import dataSource from "../utils";

@Resolver()
class RentResolver {
  @Query(() => [Rent])
  async getAllRent(): Promise<Rent[]> {
    const result = await dataSource.getRepository(Rent).find();
    return result;
  }
}

export default RentResolver;
