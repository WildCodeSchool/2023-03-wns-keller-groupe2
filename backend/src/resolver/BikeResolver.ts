import { Query, Resolver, Arg, Mutation } from "type-graphql";
import { GraphQLError } from "graphql";
import { Bike } from "../entity/Bike";
import dataSource from "../utils";

@Resolver()
class BikeResolver {
  @Query(() => [Bike])
  async getAllBike(): Promise<Bike[]> {
    const result = await dataSource.getRepository(Bike).find();
    return result;
  }

  @Query(() => Bike)
  async getBikeById(@Arg("id") id: number): Promise<Bike> {
    return await dataSource.getRepository(Bike).findOneByOrFail({ id });
  }

  @Mutation(() => String)
  async createBike(
    @Arg("name") name: string,
    @Arg("descritpion") description: string,
    @Arg("disponibility") disponibility: boolean,
    @Arg("size") size: number,
    @Arg("gender") gender: string,
    @Arg("dateMaintenance") dateMaintenance: Date
  ): Promise<String | GraphQLError> {
    try {
      const bike = new Bike();
      bike.name = name;
      bike.description = description;
      bike.disponibility = disponibility;
      bike.size = size;
      bike.gender = gender;
      bike.dateMaintenance = dateMaintenance;
      await dataSource.getRepository(Bike).save(bike);
      return "Bike created";
    } catch (error) {
      return new GraphQLError("An error accured");
    }
  }

  @Mutation(() => String)
  async updateBike(
    @Arg("id") id: number,
    @Arg("name") name: string,
    @Arg("descritpion") description: string,
    @Arg("disponibility") disponibility: boolean,
    @Arg("size") size: number,
    @Arg("gender") gender: string,
    @Arg("dateMaintenance") dateMaintenance: Date
  ): Promise<String | GraphQLError> {
    try {
      const bike = new Bike();
      bike.name = name;
      bike.description = description;
      bike.disponibility = disponibility;
      bike.size = size;
      bike.gender = gender;
      bike.dateMaintenance = dateMaintenance;
      await dataSource.getRepository(Bike).update(id, {
        name,
        description,
        disponibility,
        size,
        gender,
        dateMaintenance,
      });
      return `Bike ${id} updated`;
    } catch (error) {
      return new GraphQLError("An error accured");
    }
  }

  @Mutation(() => String)
  async deleteBike(@Arg("id") id: number): Promise<String | GraphQLError> {
    try {
      await dataSource.getRepository(Bike).delete(id);
      return "Bike deleted";
    } catch (error) {
      console.error(error);
      return new GraphQLError("An error accured");
    }
  }
}

export default BikeResolver;
