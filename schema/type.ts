import { gql } from "apollo-server-lambda";

// user.js
export const typeDefs = gql`
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
