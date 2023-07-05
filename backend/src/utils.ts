import { DataSource } from "typeorm";
import { Shop } from "./entity/Shop";
import { Order } from "./entity/Order";
import { Bike } from "./entity/Bike";
import { Users } from "./entity/Users";
import "dotenv/config";

const dataSource = new DataSource({
  type: "postgres",
  host: process.env.HOST,
  port: 5432,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  synchronize: true,
  entities: [Shop, Order, Bike, Users],
});

export default dataSource;
