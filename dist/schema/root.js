"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_lambda_1 = require("apollo-server-lambda");
exports.rootTypeDefs = apollo_server_lambda_1.gql `
  type Query {
    hello: String,
    hello2: String,
  },
  type Mutation {
    hello3: String,
    hello4: String,
  },
`;
exports.rootResolvers = {
    Query: {
        hello: () => "hello",
        hello2: () => "hello2",
    },
    Mutation: {
        hello3: () => "hello3",
        hello4: () => "hello4",
    }
};
//# sourceMappingURL=root.js.map