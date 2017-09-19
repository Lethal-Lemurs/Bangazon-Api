'use strict';

const { get_all, get_one, remove_one, post_one, put_one } = require('../models/products-model.js');

module.exports.get_products = (req, res, next) => {
  get_all()
  .then((products) => {
    res.status(200).json(products);
  })
  .catch((err) => next(err));  
};

module.exports.get_one_product = ({ params: { id } }, res, next) => {
  get_one(id)
  .then((product) => {
    res.status(200).json(product)
  })
  .catch((err) => next(err));
};

module.exports.delete_one_product = ({ params: { id } }, res, next) => {
  remove_one(id)
  .then((product) => {
    res.status(200).json(product)
  })
  .catch((err) => next(err));
};

module.exports.post_single_product = ({ body }, res, next) => {
  post_one(body)
  .then((product) => {
    res.status(201).json(product);
  })
  .catch((err) => next(err));  
};

module.exports.put_single_product = (req, res, next) => {
  put_one(req.params.id, req.body)
  .then((updated_product) => {
    res.status(200).json(updated_product);
  })
  .catch((err) => next(err));  
};