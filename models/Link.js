const mongoose = require('mongoose');

const LinkSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'links',
  },

  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    default: 'none',
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('link', LinkSchema);
