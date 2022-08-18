const { AuthenticationError } = require('apollo-server-express');
const { User, Books } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('books');
    },
    user: async (parent, { username }) => {
    return User.findOne({ username }).populate('books');
    },
    books: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Books.find(params).sort({ createdAt: -1});
    },
     book: async (parent, { bookId }) => {
  return Books.fineOne({ _id: bookId });
    },

    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ email: context.user.email});
      }
      throw new AuthenticationError('You must be signed in');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

    addBook: async (parent, { bookName }, context) => {
      if (context.user) {
        const book = await Books.create({
          bookName,
          bookAuthor: context.user.username,
        });

      await User.findOneAndUpdate(
        { _id: context.user._id},
        { $addToSet: { books: book._id} }
      );
      
      return book;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    addComment: async (parent, { bookId, commentText}, context) => {
      if (context.user) {
        return Books.findOneAndUpdate(
          { _id: bookId },
          {
            $addToSet: {
              comments: { commentText, commentAuthor: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    removeBook: async (parent, { bookId }, context) => {
      if (context.user) {
        const book = await Books.findOneAndDelete({
          _id: bookId,
          bookAuthor: context.user.username,
        });

        await User.fineOneAndUpdate(
          { _id: context.user._id },
          { $pull: { books: book._id} }
        );
        return book;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeComment: async (parent, { bookId, commentId }, context) => {
      if (context.user) {
        return Books.findOneAndUpdate(
          { _id: bookId },
          {
            $pull: {
              comments: {
                _id: commentId,
                commentAuthor: context.user.username,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
