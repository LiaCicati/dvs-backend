const router = require('express').Router();
const { addData } = require('../controllers/applicants');
const { validateUser } = require('../middlewares/celebrateValidation');

router.post('/addApplicant', validateUser, addData);

module.exports = router;
