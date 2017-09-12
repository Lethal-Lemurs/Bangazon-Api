'use strict';

const { Router } = require('express');
const router = Router();

router.use(require('./customers'));
router.use(require('./departments'));
router.use(require('./computers'));
router.use(require('./orders'));
router.use(require('./paymentType'));
router.use(require('./products'));
router.use(require('./productType'));
router.use(require('./trainingProgram'));


router.get('/', (req, res) => {
    res.json({
        "customers": "api/v1/customers",
        "departments": "api/v1/departments",
        "computers": "api/v1/computers",
        "orders": "api/v1/orders",
        "paymentType": "api/v1/paymentType",
        "products": "api/v1/products",
        "prodcutType": "api/v1/prodcutType",
        "trainingProgram": "api/v1/trainingProgram"
    });
});

module.exports = router;