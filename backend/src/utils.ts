import { DataSource } from "typeorm";
import { Shop } from "./entity/Shop";
import { Order } from "./entity/Order";
import { Bike } from "./entity/Bike";
import { Users } from "./entity/Users";
import "dotenv/config";

const dataSource = new DataSource({
  type: "postgres",
  host: "db",
  port: 5432,
  username: "postgres",
  password: process.env.PASSWORD,
  database: "postgres",
  synchronize: true,
  entities: [Shop, Order, Bike, Users],
});

export default dataSource;
