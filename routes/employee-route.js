'use strict';
const { Router } = require('express');
const router = Router();

const { get_employees, get_one_employee, post_single_employee, put_single_employee } = require('../controllers/employees');

router.get('/employees', get_employees);
router.get('/employees/:id', get_one_employee);
// router.post('/employees/new', post_single_employee);
// router.put('/employees/replace/:id', put_single_employee);

module.exports = router;