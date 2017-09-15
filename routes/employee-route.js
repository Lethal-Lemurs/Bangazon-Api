'use strict';
const { Router } = require('express');
const router = Router();

const { get_employees, get_one_employee, post_one_employee, update_employee} = require('../controllers/employees');

router.get('/employees', get_employees);
router.get('/employees/:id', get_one_employee);
router.post('/employees/new', post_one_employee);
router.put('/employees/replace/:id', update_employee);

module.exports = router;