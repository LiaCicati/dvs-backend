const router = require('express').Router();
const { addData } = require('../controllers/beneficiaries');
const { validateUser } = require('../middlewares/celebrateValidation');

router.post('/addBeneficiar', validateUser, addData);

module.exports = router;
