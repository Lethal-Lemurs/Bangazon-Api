'use strict';

const { Router } = require('express');
const router = Router();

router.use(require('./users-route'));
router.use(require('./department-route'));
// router.use(require('./computers'));
router.use(require('./orders-route'));
// router.use(require('./payment-type'));
router.use(require('./products-route'));
router.use(require('./product-type-route'));
// router.use(require('./training-program'));

// this should be what a person using the api types in to the url to pull data
router.get('/', (req, res) => {
    res.json({
        "users": "api/v1/users",
        "user by id": "api/v1/users/id",
        "post new user": "api/v1/users/new",
        "orders": "api/v1/orders",
        "orders": "api/v1/orders/delete/id",
        "orders": "api/v1/orders/replace/id",
        "departments": "api/v1/departments",
        "computers": "api/v1/computers",
        "computer by id": "api/v1/computers/:id",
        "post new computer": "api/v1/computers/new",
        // "paymentType": "api/v1/payment-type",
        "products": "api/v1/products",
        "products by id": "api/v1/products/id",
        "post new product": "api/v1/products/new",
        "put new product": "api/products/replace/id",
        "prodcutType": "api/v1/product-types",
        "prodcutType by id": "api/v1/product-types/id",
        "post new prodcutType": "api/v1/product-types/new",
        "replace a productType with put": "/api/v1/product-types/replace/:id",
        "delete a productType by id": "/api/v1/products-types/delete/:id",
        // "trainingProgram": "api/v1/training-program"
    });
});

module.exports = router;