'use strict';

const { Router } = require('express');
const router = Router();

const { get_departments, get_one_department, post_one_department, update_department } = require('../controllers/departments');

router.get('/departments', get_departments);
router.get('/departments/:id', get_one_department);
router.post('/departments/new', post_one_department);
router.put('/departments/replace/:id', update_department);

module.exports = router;