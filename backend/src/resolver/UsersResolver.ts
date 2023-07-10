import * as jwt from "jsonwebtoken";
import { GraphQLError } from "graphql";
import { Arg, Authorized, Mutation, Query, Resolver } from "type-graphql";
import { Users } from "../entity/Users";
import dataSource from "../utils";
import * as argon2 from "argon2";

@Resolver()
class UsersResolver {
  @Mutation(() => String)
  async createUser(
    @Arg("phonenum") phonenum: string,
    @Arg("gender") gender: string,
    @Arg("password") password: string,
    @Arg("email") email: string,
    @Arg("lastName") lastname: string,
    @Arg("firstName") firstname: string
  ): Promise<String | GraphQLError> {
    try {
      const user = new Users();
      user.admin = false;
      user.phonenum = phonenum;
      user.gender = gender;
      user.password = await argon2.hash(password);
      user.email = email;
      user.lastName = lastname;
      user.firstName = firstname;

      await dataSource.getRepository(Users).save(user);
      return "User created";
    } catch (error) {
      return new GraphQLError("An error occurred");
    }
  }

  @Query(() => Users)
  async getUserFromToken(
    @Arg("token") token: string
  ): Promise<Users | String | GraphQLError> {
    try {
      const decoded: any = jwt.verify(
        token,
        process.env.JWT_SECRET_KEY as string
      );
      const user = await dataSource
        .getRepository(Users)
        .findOneByOrFail({ email: decoded.email });
      return user;
    } catch (err) {
      return new GraphQLError("An error occured");
    }
  }

  @Query(() => String)
  async refreshToken(
    @Arg("token") token: string
  ): Promise<String | GraphQLError> {
    try {
      const decoded: any = jwt.verify(
        token,
        process.env.JWT_SECRET_KEY as string
      );
      const user = await dataSource
        .getRepository(Users)
        .findOneByOrFail({ email: decoded.email });
      delete decoded.iat;
      delete decoded.exp;
      delete decoded.nbf;
      delete decoded.jti;
      return jwt.sign(
        { email: user.email },
        process.env.JWT_SECRET_KEY as string
      );
    } catch (err) {
      return new GraphQLError("An error occured");
    }
  }

  @Query(() => String)
  async verifyToken(
    @Arg("token") token: string
  ): Promise<String | GraphQLError> {
    try {
      const decoded: any = jwt.verify(
        token,
        process.env.JWT_SECRET_KEY as string
      );
      const user = await dataSource
        .getRepository(Users)
        .findOneByOrFail({ email: decoded.email });
      if (decoded != null && user != null) {
        return "User is logged in";
      } else {
        return new GraphQLError("User is not logged in");
      }
    } catch (error) {
      return new GraphQLError("An error occurred");
    }
  }

  @Authorized()
  @Query(() => [Users])
  async getAllUsers(): Promise<Users[] | string | GraphQLError> {
    try {
      const users = await dataSource.getRepository(Users).find();
      return users;
    } catch (error) {
      return new GraphQLError("An error occurred");
    }
  }

  @Query(() => Users)
  async getUser(
    @Arg("userId") userId: number
  ): Promise<Users | string | GraphQLError> {
    try {
      const user = await dataSource
        .getRepository(Users)
        .findOne({ where: { id: userId } });
      if (user != null) {
        return user;
      } else {
        return new GraphQLError("No user found");
      }
    } catch (error) {
      return new GraphQLError("An error occured");
    }
  }

  @Mutation(() => String)
  async updateUser(
    @Arg("userId") userId: number,
    @Arg("admin") admin: boolean = false,
    @Arg("phonenum") phonenum: string,
    @Arg("gender") gender: string,
    @Arg("password") password: string,
    @Arg("email") email: string,
    @Arg("lastName") lastName: string,
    @Arg("firstName") firstName: string
  ): Promise<String | GraphQLError> {
    try {
      const user = new Users();
      user.admin = admin;
      user.phonenum = phonenum;
      user.gender = gender;
      user.password = password;
      user.email = email;
      user.lastName = lastName;
      user.firstName = firstName;
      await dataSource.getRepository(Users).update(userId, {
        admin,
        phonenum,
        gender,
        password,
        email,
        lastName,
        firstName,
      });
      return `User ${userId} updated`;
    } catch (error) {
      return new GraphQLError("An error occurred");
    }
  }

  @Mutation(() => String)
  async deleteUser(
    @Arg("userId") userId: number
  ): Promise<String | GraphQLError> {
    try {
      await dataSource.getRepository(Users).delete(userId);
      return "User deleted";
    } catch (error) {
      return new GraphQLError("An error occurred");
    }
  }

  @Query(() => String)
  async login(
    @Arg("email") email: string,
    @Arg("password") password: string
  ): Promise<String | GraphQLError> {
    const user = await dataSource
      .getRepository(Users)
      .findOneByOrFail({ email });
    try {
      const isPasswordCorrect = await argon2.hash(password);
      if (isPasswordCorrect) {
        const token = jwt.sign({ email }, process.env.JWT_SECRET_KEY as string);
        return token;
      } else {
        return new GraphQLError("Wrong password");
      }
    } catch (err) {
      return new GraphQLError("An error occurred");
    }
  }
}
export default UsersResolver;
