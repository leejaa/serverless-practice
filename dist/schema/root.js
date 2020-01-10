"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_lambda_1 = require("apollo-server-lambda");
exports.queryMutationDefs = apollo_server_lambda_1.gql `
  type Query {
    hello1: String,
    hello2: String,
  },
  type Mutation {
    insertUser: String,
    hello4: String,
  },
`;
exports.resolvers = {
    Query: {
        hello1: () => "hello1 ",
        hello2: () => "hello2 ",
    },
    Mutation: {
        insertUser: () => __awaiter(void 0, void 0, void 0, function* () {
            const random = Math.floor(Math.random() * 100);
            return `${random}`;
        }),
        hello4: () => "hello4",
    }
};
//# sourceMappingURL=root.js.map