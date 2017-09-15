'use strict';

const { Router } = require('express');
const router = Router();

router.use(require('./users-route'));
router.use(require('./employee-route'));
router.use(require('./department-route'));
router.use(require('./computer-route'));
router.use(require('./orders-route'));
router.use(require('./payment-type-route'));
router.use(require('./products-route'));
router.use(require('./product-type-route'));
router.use(require('./training-program-route'));

// this should be what a person using the api types in to the url to pull data
router.get('/', (req, res) => {
    res.json({
        "users": "api/v1/users",
        "user by id": "api/v1/users/id",
        "post new user": "api/v1/users/new",
        "replace a user": "api/v1/replace/id",
        "orders": "api/v1/orders",
        "order by id": "api/v1/orders/id",
        "post order": "api/v1/orders/new",
        "replace an order": "api/v1/orders/replace/id",
        "delete an order by id": "api/v1/orders/delete/id",
        "departments": "api/v1/departments",
        "department by id": "api/v1/departments/id",
        "post department": "api/v1/departments/new",
        "replace a department by id": "api/v1/departments/put/id",
        "computers": "api/v1/computers",
        "computer by id": "api/v1/computers/:id",
        "post new computer": "api/v1/computers/new",
        "replace a computer by id": "api/v1/computers/replace/id",
        "delete a computer by id": "api/v1/computers/delete/id",
        "payment type": "api/v1/payment-types",
        "payment type by id": "api/v1/payment-types/id",
        "post a payment type": "api/v1/payment-types/new",
        "replace payment type by id": "api/v1/payment-types/replace/id",
        "delete payment type by id": "api/v1/payment-types/delete/id",
        "products": "api/v1/products",
        "products by id": "api/v1/products/id",
        "post a product": "api/v1/products/new",
        "replace a product by id": "api/products/replace/id",
        "delete a product by id": "api/products/delete/id",
        "product types": "api/v1/product-types",
        "product type by id": "api/v1/product-types/id",
        "post new product type": "api/v1/product-types/new",
        "replace a product type": "/api/v1/product-types/replace/id",
        "delete a product type by id": "/api/v1/products-types/delete/id",
        "trainingProgram": "api/v1/training",
        "program by id number": "api/v1/training/id",
        "post new training program": "api/v1/training/post",
        "replace a training": "api/v1/training/replace/id",
        "delete a training programing": "ap1/v1/training/delete/id"
    });
});

module.exports = router;