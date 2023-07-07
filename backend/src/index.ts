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

const start = async (): Promise<void> => {
  await dataSource.initialize();

  const typeGraphQLgeneratedSchema = await buildSchema({
    resolvers: [
      BikeResolver,
      OrderResolver,
      ShopResolver,
      RentResolver,
      UsersResolver,
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
  console.log("hello hot reload ?");
};

void start();
