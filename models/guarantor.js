const mongoose = require('mongoose');
const validator = require('validator');

const today = Date.now();
const guarantorSchema = new mongoose.Schema({
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
    select: false,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
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
  },
  requestSentAt: {
    type: String,
    default: new Date(today).toLocaleString(),
  },
});

module.exports = mongoose.model('guarantor', guarantorSchema);
