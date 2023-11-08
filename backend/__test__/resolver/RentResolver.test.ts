import { Rent } from "../../src/entity/Rent";
import dataSource from "../../src/utils";
import RentResolver from "../../src/resolver/RentResolver";

jest.mock("../../src/utils");

describe("RentResolver", () => {
  let rentResolver: RentResolver;
  let mockData: Rent[];

  beforeEach(() => {
    rentResolver = new RentResolver();
    mockData = [
      {
        id: 1,
        start_date: new Date(),
        end_date: new Date(),
        amount: 100,
        id_user: [],
        bike_id: [],
        order_id: [],
      },
      {
        id: 2,
        start_date: new Date(),
        end_date: new Date(),
        amount: 100,
        id_user: [],
        bike_id: [],
        order_id: [],
      },
    ];

    (dataSource.getRepository as jest.Mock).mockReturnValue({
      find: jest.fn().mockResolvedValue(mockData),
    });
  });

  it("should return all rents", async () => {
    const result = await rentResolver.getAllRent();
    expect(result).toEqual(mockData);
  });
});
