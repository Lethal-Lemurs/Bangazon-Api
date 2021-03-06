'use strict';

const { Router } = require('express');
const router = Router();

const { get_orders, get_one_order, delete_one_order, post_one_order, put_one_order } = require('../controllers/orders');

router.get('/orders', get_orders);
router.get('/orders/:id', get_one_order);
router.delete('/orders/delete/:id', delete_one_order);
router.post('/orders/new', post_one_order);
router.put('/orders/replace/:id', put_one_order);

module.exports = router;