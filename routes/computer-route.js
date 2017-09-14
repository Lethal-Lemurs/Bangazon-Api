'use strict';

const { Router } = require('express');
const router = Router();

const { get_computers, get_one_computer, post_one_computer } = require('../controllers/computers');

router.get('/computers', get_computers);
router.get('/computers/:id', get_one_computer);
router.post('/computers/new', post_one_computer);
// router.put('', );
// router.delete('', );

module.exports = router;