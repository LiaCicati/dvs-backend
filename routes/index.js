const router = require('express').Router();

const applicantsRouter = require('./applicants');
const beneficiariesRouter = require('./beneficiaries');
const guarantorsRouter = require('./guarantors');

router.use('/applicants', applicantsRouter);
router.use('/beneficiaries', beneficiariesRouter);
router.use('/guarantors', guarantorsRouter);

module.exports = router;
