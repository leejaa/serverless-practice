"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_lambda_1 = require("apollo-server-lambda");
exports.bookTypeDefs = apollo_server_lambda_1.gql `
  type Book {
    book: String
  }
`;
//# sourceMappingURL=book.js.map