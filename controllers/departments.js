'use strict';

const { get_all, get_one, post_one, update_department_model } = require('../models/department-model.js');

module.exports.get_departments = (req, res, next) => {
  get_all()
  .then((departments) => {
    res.status(200).json(departments);
  })
  .catch((err) => next(err));  
};

module.exports.get_one_department = ({ params: { id } }, res, next) => {
  get_one(id)
  .then((department) => {
    res.status(200).json(department)
  })
  .catch((err) => next(err));
}

module.exports.post_one_department = ({body}, res, next) => {
  post_one(body) 
  .then((new_department) => {
    res.status(201).json(new_department)
  })
  .catch((err) => next(err));  
}

module.exports.update_department = (req, res, next) => {
  update_department_model(req.params.id, req.body)
  .then((updated_department) => {
    res.status(200).json(updated_department)
  })
  .catch((err) => next(err));  
}
