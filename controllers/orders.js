'use strict';

const { get_all, get_one, delete_one } = require('../models/orders-model.js');

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
    remove_one(id)
        .then((order) => {
            res.status(200).json(order)
        })
        .catch((err) => next(err));
}