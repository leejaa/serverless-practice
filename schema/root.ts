import { gql } from "apollo-server-lambda";

// root.js
export const rootTypeDefs = gql`
  type Query {
    hello: String,
    hello2: String,
  },
  type Mutation {
    hello3: String,
    hello4: String,
  },
`;
export const rootResolvers = {
  Query: {
    hello: () => "hello",
    hello2: () => "hello 2",
  },
  Mutation: {
    hello3: () => "hello3",
    hello4: () => "hello4",
  }
};