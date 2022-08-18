import { gql } from '@apollo/client';

export const QUERY_ME= gql`
query Me {
  me {
    _id
    username
    email
    books {
      _id
      bookName
      bookAuthor
      createdAt
    }
  }
}
`;

export const QUERY_USER = gql`
query user($username: String!) {
  user(username: $username) {
    _id
    username
    email
    books {
      _id
      bookName
      createdAt
    }
  }
}
`;

export const QUERY_BOOKS = gql`
query getBooks {
  books {
    _id
    bookName
    bookAuthor
    createdAt
  }
}
`;

export const QUERY_SINGLE_BOOK = gql`
query getSingleBook($bookId: ID!) {
  book(bookId: $bookId) {
    _id
    bookName
    bookAuthor
    createdAt
    comments {
      _id
      commentText
      commentAuthor
      createdAt
    }
  }
}
`;
