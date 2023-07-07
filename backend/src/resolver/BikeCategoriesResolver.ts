import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { GraphQLError } from "graphql";
import { BikeCategories } from "../entity/BikeCategories";
import dataSource from "../utils";

@Resolver()
class BikeCategoriesResolver {
  @Query(() => [BikeCategories])
  async getAllBikeCategories(): Promise<BikeCategories[]> {
    const result = await dataSource.getRepository(BikeCategories).find();
    return result;
  }

  @Query(() => BikeCategories)
  async getBikeCategoriesById(id: number): Promise<BikeCategories> {
    return await dataSource
      .getRepository(BikeCategories)
      .findOneByOrFail({ id });
  }

  @Mutation(() => String)
  async createBikeCategories(
    @Arg("name") name: string
  ): Promise<String | GraphQLError> {
    try {
      const bikeCategories = new BikeCategories();
      bikeCategories.name = name;
      await dataSource.getRepository(BikeCategories).save(bikeCategories);
      return "BikeCategories created";
    } catch (error) {
      return new GraphQLError("An error accured");
    }
  }

  @Mutation(() => String)
  async updateBikeCategories(
    @Arg("id") id: number,
    @Arg("name") name: string
  ): Promise<String | GraphQLError> {
    try {
      const bikeCategories = new BikeCategories();
      bikeCategories.name = name;
      await dataSource.getRepository(BikeCategories).save(bikeCategories);
      return `Bike Categories ${id} updated`;
    } catch (error) {
      return new GraphQLError("An error accured");
    }
  }

  @Mutation(() => String)
  async deleteBikeCategories(
    @Arg("id") id: number
  ): Promise<String | GraphQLError> {
    try {
      await dataSource.getRepository(BikeCategories).delete(id);
      return `Bike Categories deleted`;
    } catch (error) {
      return new GraphQLError("An error accured");
    }
  }
}

export default BikeCategoriesResolver;
