'use strict';

const { Router } = require('express');
const router = Router();

const { get_customers, get_one_customer } = require('../controllers/customer');

router.get('/customers', get_customers);
router.get('/customer/:id', get_one_customer);

module.exports = router;