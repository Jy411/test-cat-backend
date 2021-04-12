"use strict";

const {
  gql
} = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        fetchCats: [Cat]!
    }

    type Mutation {
        unlikeCat: CatResponse!
        likeCat: CatResponse!
    }

    type Cat {
        id: ID!
        name: String!
    }

    type CatResponse {
        success: Boolean!
        error: String
        data: Cat
    }
`;
module.exports = typeDefs;