"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_lambda_1 = require("apollo-server-lambda");
exports.typeDefs = apollo_server_lambda_1.gql `
  type User {
    id: String
    email: String
    name: String
    posts: [Post]
  }

  type Post {
    id: String
    createdAt: String
    updatedAt: String
    published: Boolean
    title: String
    content: String
    author: User
  }
`;
//# sourceMappingURL=type.js.map