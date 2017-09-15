'use strict';

const { Router } = require('express');
const router = Router();

const { get_users, get_one_user, post_one_user, update_user } = require('../controllers/users');

router.get('/users', get_users);
router.get('/users/:id', get_one_user);
router.post('/users/new', post_one_user);
router.put('/users/replace/:id', update_user);


module.exports = router;