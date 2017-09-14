'use strict';

const { Router } = require('express');
const router = Router();

const { get_orders, get_one_order } = require('../controllers/orders');

router.get('/orders', get_orders);
router.get('/orders/:id', get_one_order);
router.get('/orders/delete/:id', delete_one_order);

module.exports = router;