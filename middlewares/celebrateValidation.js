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
    firstName: Joi.string().required().min(2).max(30),
    lastName: Joi.string().required().min(2).max(30),
  }),
});

module.exports = { validateUser };
