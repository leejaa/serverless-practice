import { gql } from "apollo-server-lambda";
// import { Photon } from "@prisma/photon";

// const photon = new Photon();

// root.js
export const queryMutationDefs = gql`
  type Query {
    hello1: String,
    hello2: String,
  },
  type Mutation {
    insertUser: String,
    hello4: String,
  },
`;
export const resolvers = {
  Query: {
    hello1: () => "hello1 ",
    hello2: () => "hello2 ",
  },
  Mutation: {
    insertUser: async () => {
        const random = Math.floor( Math.random() * 100 );
        // await photon.users.create({
        //     data: {
        //         email: `${random}@naver.com`,
        //         name: `${random}`,
        //         posts: {
        //             create: {
        //                 title: 'jahun-post',
        //                 content: 'jahun-post-content',
        //                 published: true
        //             }
        //         }
        //     }
        // });
        return `${random}`;
    },
    hello4: () => "hello4",
  }
};