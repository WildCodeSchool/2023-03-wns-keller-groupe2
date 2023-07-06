import { Arg, Query, Resolver, Mutation } from "type-graphql";
import { Shop } from "../entity/Shop";
import dataSource from "../utils";
import { GraphQLError } from "graphql";

@Resolver()
class ShopResolver {
  @Query(() => [Shop])
  async getAllShop(): Promise<Shop[]> {
    const result = await dataSource.getRepository(Shop).find();
    return result;
  }

  @Query(() => Shop)
  async getShopById(@Arg("id") id: number): Promise<Shop> {
    return await dataSource.getRepository(Shop).findOneByOrFail({ id });
  }

  @Mutation(() => String)
  async createShop(
    @Arg("name") name: string,
    @Arg("location") location: string,
    @Arg("phonenum") phonenum: number,
    @Arg("email") email: string
  ): Promise<String | GraphQLError> {
    try {
      const shop = new Shop();
      shop.name = name;
      shop.location = location;
      shop.phonenum = phonenum;
      shop.email = email;
      await dataSource.getRepository(Shop).save(shop);
      return "shop created";
    } catch (error) {
      return new GraphQLError("An error accured");
    }
  }

  @Mutation(() => String)
  async updateShop(
    @Arg("id") id: number,
    @Arg("name") name: string,
    @Arg("location") location: string,
    @Arg("phonenum") phonenum: number,
    @Arg("email") email: string
  ): Promise<String | GraphQLError> {
    try {
      const shop = new Shop();
      shop.name = name;
      shop.location = location;
      shop.phonenum = phonenum;
      shop.email = email;
      await dataSource.getRepository(Shop).update(id, {
        name,
        location,
        phonenum,
        email,
      });
      return `Shop ${id} updated`;
    } catch (error) {
      return new GraphQLError("An error accured");
    }
  }

  @Mutation(() => String)
  async deleteShop(@Arg("id") id: number): Promise<String | GraphQLError> {
    try {
      await dataSource.getRepository(Shop).delete(id);
      return "Shop deleted";
    } catch (error) {
      console.error(error);
      return new GraphQLError("An error accured");
    }
  }
}

export default ShopResolver;
