'use strict';

const { get_all, get_one } = require('../models/product-type-model.js');

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
