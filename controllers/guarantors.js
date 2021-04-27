const Guarantor = require('../models/guarantor');
const BadRequestError = require('../errors/BadRequestError');
const ConflictError = require('../errors/ConflictError');

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
    .catch((err) => {
      if (err.code === 11000) {
        next(new ConflictError('A user with this email is already registered in the database'));
      } else {
        next(err);
      }
    });
};

module.exports = {
  addData,
};
