import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation AddUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      username
      email
    }
  }
}`;

export const LOGIN_USER = gql`
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
      email
    }
  }
}`;

export const ADD_BOOK = gql`
mutation addBook($bookName: String!) {
  addBook (bookName: $bookName) {
    _id
    bookName
    bookAuthor
    createdAt
    comments {
      _id
      commentText
    }
  }
}
`;

/*export const ADD_COMMENT = 
gql`/mutation addComment($bookId: ID!, $commentText" String!) {
 addComment(bookId: $bookId, commentText: $commentText){
    _id
    bookName
    bookAuthor
    createdAt
    comments {
      _id
      commentText
      createdAt
    }
  }
}
`;*/