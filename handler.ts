'use strict';

import { ApolloServer } from "apollo-server-lambda";
import 'reflect-metadata';
import { typeDefs } from "./schema/type";
import { queryMutationDefs, resolvers } from "./schema/root";

(async () => {

  const apolloServer = new ApolloServer({
    typeDefs: [ typeDefs, queryMutationDefs ],
    resolvers: [ resolvers ]
  });

  module.exports.graphqlHandler = apolloServer.createHandler();

})();