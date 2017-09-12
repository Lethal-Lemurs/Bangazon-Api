'use strict';

const { Router } = require('express');
const router = Router();

const { getCustomers, getOneCustomer } = require('../controllers/customer');

router.get('/customers', getCustomers);
router.get('/customer/:id', getOneCustomer);

module.exports = router;