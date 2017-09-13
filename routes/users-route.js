'use strict';

const { Router } = require('express');
const router = Router();

const { get_users, get_one_user } = require('../controllers/users');

router.get('/users', get_users);
router.get('/user/id', get_one_user);

module.exports = router;