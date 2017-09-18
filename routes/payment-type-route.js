'use strict';
const { Router } = require('express');
const router = Router();

const { get_payment_types, get_single_payment_type, post_single_payment_type, put_single_payment_type, delete_single_payment_type } = require('../controllers/payment-type');

router.get('/payment-types', get_payment_types);
router.get('/payment-types/:id', get_single_payment_type);
router.post('/payment-types/new', post_single_payment_type);
router.put('/payment-types/replace/:id', put_single_payment_type);
router.delete('/payment-types/delete/:id', delete_single_payment_type);


module.exports = router;