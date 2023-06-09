import "reflect-metadata";
import * as jwt from "jsonwebtoken";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server";

const start = async (): Promise<void> => {
  console.log(`🚀  Server ready`);
  console.log("hello hot reload ?");
};

void start();
