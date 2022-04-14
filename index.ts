import "reflect-metadata";
import { ApolloServer, gql } from "apollo-server";
import { PrismaClient } from "@prisma/client";

//BDD
const prisma = new PrismaClient();

async function main() {
  const newUser = await prisma.user.create({
    data: {
      email: "toto3@toto.com",
      password: "toto",
      firstname: "Toto",
      lastname: "TotoLastName",
    },
  });
  console.log("Nouvel utilisateur: ");
  console.log(newUser);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

//graphQL
const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

const resolvers = {
  Query: {
    books: () => books,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
