import "reflect-metadata";
import { ApolloServer } from "apollo-server";

import * as tq from "type-graphql";

import { context } from "./context";

import { resolvers } from "../prisma/generated/type-graphql";

const app = async () => {
  const schema = await tq.buildSchema({
    resolvers,
    validate: false,
  });

  new ApolloServer({ schema, context: context }).listen({ port: 4000 }, () =>
    console.log(
      "🚀 Server ready at: http://localhost:4000/graphql & studio at:  http://localhost:5555/"
    )
  );
};
app();
