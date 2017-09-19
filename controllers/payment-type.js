'use strict';

const { get_all, get_one, post_one, put_one, delete_one } = require('../models/payment-type-model');

module.exports.get_payment_types = (req, res, next) => {
  get_all()
  .then((data) => {
    res.status(200).json(data);
  })
  .catch((err) => next(err));  
};

module.exports.get_single_payment_type = ({ params: { id } }, res, next) => {
  get_one(id)
  .then((data) => {
    res.status(200).json(data)
  })
  .catch((err) => next(err));
};

module.exports.delete_single_payment_type = ({ params: { id } }, res, next) => {
  delete_one(id)
  .then((payment_type) => {
    res.status(200).json(payment_type)
  })
  .catch((err) => next(err));
};

module.exports.post_single_payment_type = ({ body }, res, next) => {
  post_one(body)
  .then((payment_type) => {
    res.status(201).json(payment_type);
  })
  .catch((err) => next(err));  
};

module.exports.put_single_payment_type = (req, res, next) => {
  put_one(req.params.id, req.body)
  .then((updated_payment_type) => {
    res.status(200).json(updated_payment_type);
  })
  .catch((err) => next(err));  
};