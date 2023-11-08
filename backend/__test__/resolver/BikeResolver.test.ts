import BikeResolver from "../../src/resolver/BikeResolver";
import { Bike } from "../../src/entity/Bike";
import dataSource from "../../src/utils";

jest.mock("../../src/utils");

describe("BikeResolver", () => {
  let bikeResolver: BikeResolver;

  beforeEach(() => {
    bikeResolver = new BikeResolver();
  });

  it("should get all bikes", async () => {
    const mockBikes: Bike[] = [
      {
        id: 1,
        name: "Bike 1",
        description: "Bike 1 description",
        disponibility: true,
        size: 1,
        gender: "masculin",
        dateMaintenance: new Date(),
        price: 30,
        shop_id: [],
        imageId: [],
        bikeCategoriesId: [],
      },
      {
        id: 2,
        name: "Bike 2",
        description: "Bike 2 description",
        disponibility: true,
        size: 1,
        gender: "masculin",
        dateMaintenance: new Date(),
        price: 30,
        shop_id: [],
        imageId: [],
        bikeCategoriesId: [],
      },
    ];

    (dataSource.getRepository as jest.Mock).mockReturnValue({
      find: jest.fn().mockResolvedValue(mockBikes),
    });

    const result = await bikeResolver.getAllBike();

    expect(result).toEqual(mockBikes);
  });
});
