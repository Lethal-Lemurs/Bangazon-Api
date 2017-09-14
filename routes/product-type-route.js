'use strict';

const { Router } = require('express');
const router = Router();

const { get_product_types, get_single_product_type, post_single_product_type, put_single_product_type } = require('../controllers/product-type');

router.get('/product-types', get_product_types);
router.get('/product-types/:id', get_single_product_type);
router.post('/product-types/new', post_single_product_type);
router.put('/product-types/replace/:id', put_single_product_type);

module.exports = router;