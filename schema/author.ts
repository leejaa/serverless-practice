import { gql } from "apollo-server-lambda";

// author.js
export const authorTypeDefs = gql`
  type Author {
    author: String
  }
  type Author2 {
    author2: String
  }
`;
