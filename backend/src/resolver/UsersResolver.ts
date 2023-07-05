import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt-ts";

import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Users } from "../entity/Users";
import dataSource from "../utils";

@Resolver()
class UsersResolver {
  @Mutation(() => String)
  async createUser(
    @Arg("email") email: string,
    @Arg("password") password: string
  ): Promise<String> {
    const user = new Users();
    user.email = email;
    user.password = await bcrypt.hash(password, 10);
    await dataSource.getRepository(Users).save(user);
    return "User created";
  }

  @Query(() => String)
  async login(
    @Arg("email") email: string,
    @Arg("password") password: string
  ): Promise<String> {
    const user = await dataSource
      .getRepository(Users)
      .findOneByOrFail({ email });

    try {
      if (await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ email }, "supersecretkey");
        return token;
      } else {
        return "Wrong password";
      }
    } catch (err) {
      return "error";
    }
  }
}

export default UsersResolver;
