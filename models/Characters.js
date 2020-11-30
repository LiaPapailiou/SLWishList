const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  name: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
    required: true
  },
  class: {
    type: String
  },
  image: {
    type: String,
  },
});

const Characters = mongoose.model('Characters', characterSchema);

module.exports = Characters;