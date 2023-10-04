import { DataSource } from "typeorm";
import { Shop } from "./entity/Shop";
import { Order } from "./entity/Order";
import { Bike } from "./entity/Bike";
import { Users } from "./entity/Users";
import { Rent } from "./entity/Rent";
import { BikeCategories } from "./entity/BikeCategories";
import { Images } from "./entity/Image";

const dataSource = new DataSource({
  type: "postgres",
  host: "db",
  port: 5432,
  username: "postgres",
  password: process.env.POSTGRES_PASSWORD,
  database: "postgres",
  synchronize: true,
  entities: [Shop, Order, Bike, Users, Rent, BikeCategories, Images],
});

export default dataSource;
