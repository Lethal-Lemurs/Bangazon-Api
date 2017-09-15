'use strict';

const { Router } = require('express');
const router = Router();

router.use(require('./users-route'));
// router.use(require('./departments'));
// router.use(require('./computers'));
// router.use(require('./orders'));
// router.use(require('./payment-type'));
router.use(require('./products-route'));
router.use(require('./product-type-route'));
router.use(require('./training-program-route'));

// this should be what a person using the api types in to the url to pull data
router.get('/', (req, res) => {
    res.json({
        "users": "api/v1/users",
        "user by id": "api/v1/users/id",
        "post new user": "api/v1/users/new",
        // "departments": "api/v1/departments",
        // "computers": "api/v1/computers",
        // "orders": "api/v1/orders",
        // "paymentType": "api/v1/payment-type",
        // "products": "api/v1/products",
        "prodcutType": "api/v1/product-types",
        "prodcutType by id": "api/v1/product-types/id",
        "post new prodcutType": "api/v1/product-types/new",
        "replace a productType with put": "/api/v1/product-types/replace/:id",
        "delete a productType by id": "/api/v1/products-types/delete/:id",
        "trainingProgram": "api/v1/training",
        "program by id number": "api/v1/training/id",
        "post new training program": "api/v1/training",
        "replace a training": "api/v1/training/replace/id",
        "delete a training programing": "ap1/v1/training/delete/id"
    });
});

module.exports = router;