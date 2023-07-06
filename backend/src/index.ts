import "dotenv/config";
import "reflect-metadata";
import * as jwt from "jsonwebtoken";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server";
import dataSource from "./utils";
import BikeResolver from "./resolver/BikeResolver";
import OrderResolver from "./resolver/OrderResolver";
import ShopResolver from "./resolver/ShopResolver";
import UsersResolver from "./resolver/UsersResolver";
import RentResolver from "./resolver/RentResolver";

export const JWT_SECRET = process.env.JWT_SECRET_KEY as string;

if (JWT_SECRET === undefined) {
  throw Error("JWT secret undefined");
}

const start = async (): Promise<void> => {
  await dataSource.initialize();
  const typeGraphQLgeneratedSchema = await buildSchema({
    resolvers: [
      BikeResolver,
      OrderResolver,
      ShopResolver,
      UsersResolver,
      RentResolver,
    ],
    authChecker: ({ context }) => {
      console.log("context from authChecker", context);
      if (context.email !== undefined) {
        return true;
      } else {
        return false;
      }
    },
  });

  const server = new ApolloServer({
    schema: typeGraphQLgeneratedSchema,
    context: ({ req }) => {
      console.log("req", req.headers.authorization);
      if (
        req.headers.authorization !== undefined &&
        req.headers.authorization !== ""
      ) {
        const payload = jwt.verify(
          req.headers.authorization.split("Bearer ")[1],
          "supersecretkey"
        );
        return payload;
      }
      return {};
    },
  });

  const { url } = await server.listen();
  console.log(`🚀  Server ready at ${url}`);
};

void start();
