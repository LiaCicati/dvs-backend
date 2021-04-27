const mongoose = require('mongoose');
const validator = require('validator');

const today = Date.now();
const applicantSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
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
    maxlength: 40,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 80,
  },
  companyName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 120,
  },
  additionalData: {
    type: String,
    minlength: 2,
    maxlength: 1000,
  },
  requestSentAt: {
    type: String,
    default: new Date(today).toLocaleString(),
  },
});

module.exports = mongoose.model('applicant', applicantSchema);
