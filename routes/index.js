'use strict';

const { Router } = require('express');
const router = Router();

router.use(require('./users-route'));
// router.use(require('./departments'));
// router.use(require('./computers'));
// router.use(require('./orders'));
// router.use(require('./payment-type'));
router.use(require('./products-route'));
// router.use(require('./product-type'));
// router.use(require('./training-program'));

// this should be what a person using the api types in to the url to pull data
router.get('/', (req, res) => {
    res.json({
        "users": "api/v1/users",
        "departments": "api/v1/departments",
        "computers": "api/v1/computers",
        "orders": "api/v1/orders",
        "paymentType": "api/v1/payment-type",
        "products": "api/v1/products",
        "prodcutType": "api/v1/product-type",
        "trainingProgram": "api/v1/training-program"
    });
});

module.exports = router;