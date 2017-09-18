'use strict';

const { get_all, get_one, post_one, update_training_model, delete_one } = require('../models/training-program-model.js');
//TODO: ensure compatibilty
module.exports.get_all_programs = (req, res, next) => {
  get_all()
  .then((training) => {
    res.status(200).json(training);
  })
  .catch((err) => next(err));  
};

module.exports.get_one_program = ({ params: { id } }, res, next) => {
  get_one(id)
  .then((training) => {
    res.status(200).json(training)
  })
  .catch((err) => next(err));
}

module.exports.post_one_program = ({body}, res, next) => {
  post_one(body) 
  .then((new_training) => {
    res.status(201).json(new_training)
  })
  .catch((err) => next(err));  
}

module.exports.update_training = (req, res, next) => {
  update_training_model(req.params.id, req.body)
  .then((updated_training) => {
    res.status(200).json(updated_training)
  })
  .catch((err) => next(err));  
}

module.exports.delete_training = ({params: {id} }, res, next) => {
  delete_one(id)
  .then((training)=>{
    res.status(200).json(training);
  })
  .catch((err) => next(err));  
};