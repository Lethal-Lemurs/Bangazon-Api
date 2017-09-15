'use strict';

const { get_all, get_one, post_one, update_employee_model } = require('../models/employee-model.js');

module.exports.get_employees = (req, res, next) => {
  get_all()
    .then((employees) => {
      res.status(200).json(employees);
    })
    .catch((err) => {
      next(err);
    })
};

module.exports.get_one_employee = ({ params: { id } }, res, next) => {
    get_one(id)
      .then((employee) => {
        res.status(200).json(employee)
        })
        .catch((err) => next(err));
}

module.exports.post_one_employee = ({body}, res, next) => {
    post_one(body) 
      .then((new_employee) => {
        res.status(201).json(new_employee)
        })
        .catch((err) => { 
            next(err) 
    });
}

module.exports.update_employee = (req, res, next) => {
    update_employee_model(req.params.id, req.body)
    .then((updated_employee) => {
        res.status(200).json(updated_employee)
        })
        .catch((err) => {
            next(err)
        });
}