const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');


const bookSchema = new Schema({
    bookName: {
        type: String,
        required: true,
        trim: true,
    },
    bookAuthor: {
    type: String,
    required: true,
    trim: true,
},
    bookDescription: {
    type: String,
    required:true,
    trim: true,
},
    createdAt: {
     type: Date,
     default: Date.now,
     get: (timestamp) => dateFormat(timestamp),
  },
comments: [
    {
        commentText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        commentAuthor: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
        },
       },
     ],
});

const Book = model('Book', bookSchema);

module.exports = Book;