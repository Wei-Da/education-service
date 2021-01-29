'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const CourseSchema = new Schema({
    title: {
      type: String
    },
    type: {
      type: String
    },
    imgUrl: {
      type: String
    },
    describe: {
      type: String
    },
    author: {
      type: String
    },
    price: {
      type: Number,
      required: true
    },
    authorImg: {
      type: String
    },
    date: {
      type: Date,
      default: Date.now
    }
  });

  return mongoose.model('Course', CourseSchema, 'course');
}