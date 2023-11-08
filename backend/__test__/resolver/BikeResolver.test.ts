import BikeResolver from "../../src/resolver/BikeResolver";
import { Bike } from "../../src/entity/Bike";
import dataSource from "../../src/utils";

jest.mock("../../src/utils");

//test query getAllBike
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

//test query getBikeById
describe("getBikeById", () => {
  let bikeResolver: BikeResolver;

  beforeEach(() => {
    bikeResolver = new BikeResolver();
  });

  it("should get a bike by id", async () => {
    const mockBike: Bike = {
      id: 3,
      name: "Bike 3",
      description: "Bike 3 description",
      disponibility: true,
      size: 1,
      gender: "masculin",
      dateMaintenance: new Date(),
      price: 30,
      shop_id: [],
      imageId: [],
      bikeCategoriesId: [],
    };

    (dataSource.getRepository as jest.Mock).mockReturnValue({
      findOne: jest.fn().mockResolvedValue(mockBike),
    });

    const result = await bikeResolver.getBikeById(1);

    expect(result).toEqual(mockBike);
  });

  it("should throw an error if bike not found", async () => {
    (dataSource.getRepository as jest.Mock).mockReturnValue({
      findOne: jest.fn().mockResolvedValue(null),
    });

    await expect(bikeResolver.getBikeById(1)).rejects.toThrow("Bike not found");
  });
});
