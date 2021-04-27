const { celebrate, Joi } = require('celebrate');
const validator = require('validator');
const BadRequestError = require('../errors/BadRequestError');

const validatorPhone = (phone) => {
  if (!validator.isNumeric(phone)) {
    throw new BadRequestError('Invalid phone number');
  }
  return phone;
};

const validateUser = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    phone: Joi.string().required().custom(validatorPhone),
    firstName: Joi.string().required().min(2).max(40),
    lastName: Joi.string().required().min(2).max(80),
    companyName: Joi.string().required().min(2).max(120),
    additionalData: Joi.string().min(2).max(1000),
  }),
});

module.exports = { validateUser };
