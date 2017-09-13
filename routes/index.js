'use strict';

const { Router } = require('express');
const router = Router();

router.use(require('./users-route'));
router.use(require('./departments'));
router.use(require('./computers'));
router.use(require('./orders'));
router.use(require('./payment-type'));
router.use(require('./products'));
router.use(require('./product-type'));
router.use(require('./training-program'));


router.get('/', (req, res) => {
    res.json({
        "users-route": "api/v1/users-route",
        "departments": "api/v1/departments",
        "computers": "api/v1/computers",
        "orders": "api/v1/orders",
        "paymentType": "api/v1/payment-type",
        "products": "api/v1/products",
        "prodcutType": "api/v1/prodcut-type",
        "trainingProgram": "api/v1/training-program"
    });
});

module.exports = router;