import { Query, Resolver } from "type-graphql";
import { Bike } from "../entity/Bike";
import dataSource from "../utils";

@Resolver()
class BikeResolver {
  @Query(() => [Bike])
  async getAllOrder(): Promise<Bike[]> {
    const result = await dataSource.getRepository(Bike).find();
    return result;
  }
}

export default BikeResolver;
