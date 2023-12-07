import "dotenv/config";
import "reflect-metadata";
import * as jwt from "jsonwebtoken";
import express from "express";
import cookieParser from "cookie-parser";
import csrf from "csurf";
import rateLimit from "express-rate-limit";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server-express";
import dataSource from "./utils";
import BikeResolver from "./resolver/BikeResolver";
import OrderResolver from "./resolver/OrderResolver";
import ShopResolver from "./resolver/ShopResolver";
import UsersResolver from "./resolver/UsersResolver";
import RentResolver from "./resolver/RentResolver";
import BikeCategoriesResolver from "./resolver/BikeCategoriesResolver";

const start = async (): Promise<void> => {
  await dataSource.initialize();

  const typeGraphQLgeneratedSchema = await buildSchema({
    resolvers: [
      BikeResolver,
      OrderResolver,
      ShopResolver,
      RentResolver,
      UsersResolver,
      BikeCategoriesResolver,
    ],
    authChecker: ({ context }) => {
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
        try {
          const payload = jwt.verify(
            req.headers.authorization.split("Bearer ")[1],
            process.env.JWT_SECRET as string
          );
          return { user: payload };
        } catch (err) {
          console.error("JWT verification failed:", err);
          throw new Error("Authentication failed");
        }
      }
      return {};
    },
  });

  // create express app
  const app = express();

  // we need this because "cookie" is true in csrfProtection
  app.use(cookieParser());

  // setup route middlewares
  const csrfProtection = csrf({ cookie: true });
  const parseForm = express.urlencoded({ extended: false });

  app.get("/form", csrfProtection, function (req, res) {
    // pass the csrfToken to the view
    res.render("send", { csrfToken: req.csrfToken() });
  });

  app.post("/process", parseForm, csrfProtection, function (req, res) {
    res.send("data is being processed");
  });

  // Apply rate limit middleware
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  });
  app.use(limiter);

  server.applyMiddleware({ app });

  const port = process.env.PORT_BACKEND;
  app.listen(port, () => {
    console.log(
      `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
    );
  });

  void start();
};
