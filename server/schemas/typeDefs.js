const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    books: [Books]
  }
  
  type Books {
    _id: ID
    bookName: String
    bookAuthor: String
    bookDescription: String
    createdAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    books(username: String): [Books]
    book(bookId: ID!): Books
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBook(bookName: String!): Books
    addComment(bookId: ID!, commentText: String!): Books
    removeBook(bookId: ID!): Books
    removeComment(bookId: ID!, commentId: ID!): Books
  }
`;

module.exports = typeDefs;
