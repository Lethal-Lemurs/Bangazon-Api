'use strict';

const { get_all, get_one, delete_one, post_one, put_one } = require('../models/orders-model.js');

module.exports.get_orders = (req, res, next) => {
    get_all()
        .then((orders) => {
            res.status(200).json(orders);
        })
        .catch((err) => {
            next(err);
        })
};

module.exports.get_one_order = ({ params: { id } }, res, next) => {
    get_one(id)
        .then((order) => {
            res.status(200).json(order)
        })
        .catch((err) => next(err));
};

module.exports.delete_one_order = ({ params: { id } }, res, next) => {
    delete_one(id)
        .then((order) => {
            res.status(200).json(order)
        })
        .catch((err) => next(err));
};

module.exports.post_one_order = ({body}, res, next) => {
  post_one(body) 
      .then((new_order) => {
          res.status(201).json(new_order)
      })
      .catch((err ) => { 
          next(err)
      })  
};

module.exports.put_one_order = (req, res, next) => {
  put_one(req.params.id, req.body) 
      .then((updated_order) => {
          res.status(201).json(updated_order);
      })
      .catch((err) => { 
          next(err)
      })
};
