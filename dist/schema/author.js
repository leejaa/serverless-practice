"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_lambda_1 = require("apollo-server-lambda");
exports.authorTypeDefs = apollo_server_lambda_1.gql `
  type Author {
    author: String
  }
  type Author2 {
    author2: String
  }
`;
//# sourceMappingURL=author.js.map