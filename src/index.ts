import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import { ApolloServer } from "apollo-server-express";

const { readFileSync } = require('fs');
const typeDefs = readFileSync(`${__dirname}/typeDefs.graphql`, 'UTF-8');

import { resolvers } from "./resolvers";
//const resolvers = require(`./src/resolvers`)

const expressPlayground = require('graphql-playground-middleware-express').default

const startServer = async () => {
  const server = new ApolloServer({ typeDefs, resolvers });

  await createConnection();

  const app = express();

  server.applyMiddleware({ app });

  app.get('/playground', expressPlayground({ endpoint: '/graphql' }))

  app.listen({ port: 4000 }, () =>
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

startServer();
