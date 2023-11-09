import ShopResolver from "../../src/resolver/ShopResolver";
import { Shop } from "../../src/entity/Shop";
import dataSource from "../../src/utils";

jest.mock("../../src/utils");

//test query getAllShop
describe("ShopResolver", () => {
  let shopResolver: ShopResolver;
  let mockData: Shop[];

  beforeEach(() => {
    shopResolver = new ShopResolver();
  }),
    it("should get all shop", async () => {
      const mockData: Shop[] = [
        {
          id: 1,
          name: "Shop 1",
          location: "Lyon",
          phonenum: 123456789,
          email: "Luc.Harne@email.com",
        },
      ];

      dataSource.getRepository = jest.fn().mockReturnValue({
        find: jest.fn().mockResolvedValue(mockData),
      });

      const result = await shopResolver.getAllShop();

      expect(result).toEqual(mockData);
    });
});

//test query getShopById
describe("ShopResolver", () => {
  let shopResolver: ShopResolver;
  let mockData: Shop[];

  beforeEach(() => {
    shopResolver = new ShopResolver();
  }),
    it("should get shop by id", async () => {
      const mockData: Shop[] = [
        {
          id: 1,
          name: "Shop 2",
          location: "Paris",
          phonenum: 123456789,
          email: "Sam.Enerve@email.com",
        },
        ];
        
        dataSource.getRepository = jest.fn().mockReturnValue({
            findOneByOrFail: jest.fn().mockResolvedValue(mockData),
        });

        const result = await shopResolver.getShopById(1);


        expect(result).toEqual(mockData);
    });
});
