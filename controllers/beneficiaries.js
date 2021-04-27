const Beneficiar = require('../models/beneficiar');
const BadRequestError = require('../errors/BadRequestError');

const addData = (req, res, next) => {
  const {
    email, phone, firstName, lastName,
  } = req.body;
  if (!email || !phone || !firstName || !lastName) {
    throw new BadRequestError('Some of the fields are empty');
  }

  const beneficiarData = new Beneficiar(req.body);
  beneficiarData.save()
    .then((user) => {
      res.send(user);
    })
    .catch(next);
};

module.exports = {
  addData,
};
