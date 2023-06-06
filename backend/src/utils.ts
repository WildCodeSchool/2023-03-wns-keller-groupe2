import { DataSource } from "typeorm";
import { Grade } from "./entity/Grade";
import { Skill } from "./entity/Skill";
import { Wilder } from "./entity/Wilder";
import { User } from "./entity/User";

const dataSource = new DataSource({
  type: "postgres",
  host: "db",
  port: 5432,
  username: "postgres",
  password: "example",
  database: "postgres",
  synchronize: true,
  entities: [Wilder, Skill, Grade, User],
});

export default dataSource;
