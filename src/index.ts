import "reflect-metadata";
import { ApolloServer } from "apollo-server";

import * as tq from "type-graphql";
import { UserResolver } from "./resolvers/UserResolver";
import { context } from "./context";

const app = async () => {
  const schema = await tq.buildSchema({
    resolvers: [UserResolver],
  });

  new ApolloServer({ schema, context: context }).listen({ port: 4000 }, () =>
    console.log("🚀 Server ready at: http://localhost:4000/graphql")
  );
};
app();
