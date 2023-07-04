import { DataSource } from "typeorm";
import { Shop } from "./entity/Shop";
import { Order } from "./entity/Order";

const dataSource = new DataSource({
  type: "postgres",
  host: "",
  port: 5432,
  username: "",
  password: "",
  synchronize: true,
  entities: [Shop, Order],
});

export default dataSource;
