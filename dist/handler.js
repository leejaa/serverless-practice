'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_lambda_1 = require("apollo-server-lambda");
const typeDefs = apollo_server_lambda_1.gql `
  type Query {
    hello: String
  }
`;
const resolvers = {
    Query: {
        hello: () => 'Hello world!',
    },
};
const server = new apollo_server_lambda_1.ApolloServer({ typeDefs, resolvers });
module.exports.graphqlHandler = server.createHandler();
//# sourceMappingURL=handler.js.map