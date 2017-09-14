'use strict';

const { get_all, get_one, post_one, put_one } = require('../models/product-type-model.js');

module.exports.get_product_types = (req, res, next) => {
  get_all()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      next(err);
    })
};

module.exports.get_single_product_type = ({ params: { id } }, res, next) => {  
  get_one(id)
  .then((data) => {
    res.status(200).json(data);
  })
  .catch((err) => {
    next(err);
  })
};

module.exports.post_single_product_type = ({body}, res, next) => {
  post_one(body)
  .then((prod_type) => {
    res.status(201).json(prod_type);
  })
  .catch((err) => {
    next(err);
  })
};

module.exports.put_single_product_type = (req, res, next) => {
  put_one(req.params.id, req.body)
  .then((updated_prod_type) => {
    res.status(200).json(updated_prod_type);
  })
  .catch((err) => {
    next(err);
  })
};
