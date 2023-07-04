import { DataSource } from "typeorm";
import { Shop } from "./entity/Shop";

const dataSource = new DataSource({
  type: "postgres",
  host: "",
  port: 5432,
  username: "",
  password: "",
  synchronize: true,
  entities: [Shop],
});

export default dataSource;
