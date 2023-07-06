import { Query, Resolver, Arg } from "type-graphql";
import { Bike } from "../entity/Bike";
import dataSource from "../utils";

@Resolver()
class BikeResolver {
  @Query(() => [Bike])
  async getAllOrder(): Promise<Bike[]> {
    const result = await dataSource.getRepository(Bike).find();
    return result;
  }

  @Query(() => Bike)
  async getBikeById(@Arg("id") id: string): Promise<Bike> {
    return await dataSource.getRepository(Bike).findOneByOrFail(id);
  }
}

export default BikeResolver;
