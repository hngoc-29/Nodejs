const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 20,
    unique: true
  },
  email: {
    type: String,
    required: true,
    minlength: 4,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  isAmin: {
    type: Boolean,
    default: false
  }
},
{timestamps: true});

module.export = mongoose.model('User', userSchema);