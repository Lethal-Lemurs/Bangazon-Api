'use strict';
const { Router } = require('express');
const router = Router();

const { get_all_programs, get_one_program, post_one_program, update_training, delete_training } = require('../controllers/training-programs');

router.get('/training', get_all_programs);
router.get('/training/:id', get_one_program);
router.post('/training/post', post_one_program);
router.put('/training/replace/:id', update_training);
router.delete('/training/delete/:id', delete_training);

module.exports = router;