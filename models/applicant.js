const mongoose = require('mongoose');
const validator = require('validator');

const applicantSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator(email) {
        return validator.isEmail(email);
      },
      message: 'Invalid data',
    },
  },
  phone: {
    type: String,
    required: true,
    validate: {
      validator(phone) {
        return validator.isNumeric(phone);
      },
      message: 'Invalid data',
    },
  },
  firstName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  additionalData: {
    type: String,
    minlength: 2,
  },
});

module.exports = mongoose.model('applicant', applicantSchema);
