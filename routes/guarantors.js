const router = require('express').Router();
const { addData } = require('../controllers/guarantors');
const { validateUser } = require('../middlewares/celebrateValidation');

router.post('/addGuarantor', validateUser, addData);

module.exports = router;
