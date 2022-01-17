const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    userName: String!
    age: Int!
    nationality: Nationality!
    friends: [User]
    favoriteMovies: [Movie]
  }
  type Movie {
    id: ID!
    name: String!
    yearOfPublication: Int!
    isInTheaters: Boolean!
  }
  type Query {
    users: [User!]!
    user(id: ID!): User
    movies: [Movie!]!
    movie(name: String!): Movie!
  }
  input CreateUserInput {
    name: String!
    userName: String!
    age: Int!
    nationality: Nationality = GERMANY
  }
  input UpdateUsernameInput {
    id: ID!
    newUserName: String!
  }
  type Mutation {
    createUser(input: CreateUserInput!): User
    updateUsername(input: UpdateUsernameInput!): User
  }
  enum Nationality {
    INDIA
    CANADA
    GERMANY
    BRAZIL
    CHILE
  }
`;

module.exports = { typeDefs };
