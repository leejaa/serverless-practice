'use strict';

import { ApolloServer } from "apollo-server-lambda";
import 'reflect-metadata';
import { authorTypeDefs } from "./schema/author";
import { rootTypeDefs, rootResolvers } from "./schema/root";

// Construct a schema, using GraphQL schema language
// const typeDefs = gql`
//   type Query {
//     hello: String
//   }
// `;

// // Provide resolver functions for your schema fields
// const resolvers = {
//   Query: {
//     hello: () => 'Hello world!',
//   },
// };

(async () => {

  const apolloServer = new ApolloServer({ 
    typeDefs: [ authorTypeDefs, rootTypeDefs ],
    resolvers: [ rootResolvers ]
  });

  module.exports.graphqlHandler = apolloServer.createHandler();

})();