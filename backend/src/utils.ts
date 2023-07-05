import { DataSource } from "typeorm";
import { Shop } from "./entity/Shop";
import { Order } from "./entity/Order";
import { Bike } from "./entity/Bike";

const dataSource = new DataSource({
  type: "postgres",
  host: "",
  port: 5432,
  username: "",
  password: "",
  synchronize: true,
  entities: [Shop, Order, Bike],
});

export default dataSource;
