const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  language: {
    type: String,
    required: true,
    enum: ['HTML', 'CSS', 'JavaScript', 'Python', 'Java', 'C', 'C++', 'C#', 'PHP', 'SQL']
  },
  level: {
    type: String,
    required: true,
    enum: ['Simple', 'Facile', 'Moyen', 'Difficile', 'Impossible']
  },
  description: {
    type: String,
    required: true
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  lessons: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lesson'
  }],
  exercises: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Exercise'
  }],
  students: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  reviews: [{
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    comment: String,
    rating: Number
  }],
  duration: {
    type: Number, // in hours
    default: 0
  },
  tags: [String],
  imageUrl: {
    type: String,
    default: null
  },
  isPublished: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Course', courseSchema);
