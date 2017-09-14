'use strict';
const { Router } = require('express');
const router = Router();

const { get_products, get_one_product, delete_one_product } = require('../controllers/products');

router.get('/products', get_products);
router.get('/products/:id', get_one_product);
router.delete('/products/delete/:id', delete_one_product);

module.exports = router;