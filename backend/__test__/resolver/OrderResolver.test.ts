import { Order } from "../../src/entity/Order";
import OrderResolver from "../../src/resolver/OrderResolver";
import dataSource from "../../src/utils";

jest.mock("../../src/utils");

//test query getAllOrder
describe("OrderResolver", () => {
  let orderResolver: OrderResolver;

  beforeEach(() => {
    orderResolver = new OrderResolver();
  });

  it("should get all order", async () => {
    const mockOrder: Order[] = [
      {
        id: "1",
        doo: new Date("2021-06-01"),
        id_rent: [],
        total_amount: 100,
        pay: true,
      },
      {
        id: "2",
        doo: new Date("2021-06-01"),
        id_rent: [],
        total_amount: 100,
        pay: true,
      },
    ];

    dataSource.getRepository = jest.fn().mockReturnValue({
      find: jest.fn().mockResolvedValue(mockOrder),
    });

    const result = await orderResolver.getAllOrder();

    expect(result).toEqual(mockOrder);
  });
});
