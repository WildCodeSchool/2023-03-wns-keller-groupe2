import { Query, Resolver } from "type-graphql";
import { Order } from "../entity/Order";
import dataSource from "../utils";

@Resolver()
class OrderResolver {
  @Query(() => [Order])
  async getAllOrder(): Promise<Order[]> {
    const result = await dataSource.getRepository(Order).find();
    return result;
  }
}

export default OrderResolver;
