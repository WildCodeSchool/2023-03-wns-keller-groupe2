import { BikeCategories } from "../../src/entity/BikeCategories";
import BikeCategoriesResolver from "../../src/resolver/BikeCategoriesResolver";
import dataSource from "../../src/utils";

jest.mock("../../src/utils");

//test query getAllBikeCategories
describe("BikeCategoriesResolver", () => {
  let bikeCategoriesResolver: BikeCategoriesResolver;

  beforeEach(() => {
    bikeCategoriesResolver = new BikeCategoriesResolver();
  });

  it("should get all bike categories", async () => {
    const mockBikeCategories: BikeCategories[] = [
      {
        id: 1,
        name: "VTC",
      },
      {
        id: 2,
        name: "Tandem",
      },
    ];

    (dataSource.getRepository as jest.Mock).mockReturnValue({
      find: jest.fn().mockResolvedValue(mockBikeCategories),
    });

    const result = await bikeCategoriesResolver.getAllBikeCategories();

    expect(result).toEqual(mockBikeCategories);
  });
});

//test query getBikeCategoriesById
describe("getBikeCategoriesById", () => {
  let bikeCategoriesResolver: BikeCategoriesResolver;

  beforeEach(() => {
    bikeCategoriesResolver = new BikeCategoriesResolver();
  });

  it("should get bike categories by id", async () => {
    const mockBikeCategories: BikeCategories = {
      id: 1,
      name: "VTC",
    };

    (dataSource.getRepository as jest.Mock).mockReturnValue({
      findOneByOrFail: jest.fn().mockResolvedValue(mockBikeCategories),
    });

    const result = await bikeCategoriesResolver.getBikeCategoriesById(1);

    expect(result).toEqual(mockBikeCategories);
  });
});
