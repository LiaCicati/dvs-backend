const Applicant = require('../models/applicant');
const BadRequestError = require('../errors/BadRequestError');

const addData = (req, res, next) => {
  const {
    email, phone, firstName, lastName,
  } = req.body;
  if (!email || !phone || !firstName || !lastName) {
    throw new BadRequestError('Some of the fields are empty');
  }

  const applicantData = new Applicant(req.body);
  applicantData.save()
    .then((user) => {
      res.send(user);
    })
    .catch(next);
};

module.exports = {
  addData,
};
