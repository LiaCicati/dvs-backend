const Guarantor = require('../models/guarantor');
const BadRequestError = require('../errors/BadRequestError');

const addData = (req, res, next) => {
  const {
    email, phone, firstName, lastName,
  } = req.body;
  if (!email || !phone || !firstName || !lastName) {
    throw new BadRequestError('Some of the fields are empty');
  }

  const guarantorData = new Guarantor(req.body);
  guarantorData.save()
    .then((user) => {
      res.send(user);
    })
    .catch(next);
};

module.exports = {
  addData,
};
