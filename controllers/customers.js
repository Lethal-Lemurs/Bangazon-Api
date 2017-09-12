'use strict';

const { get_all, get_one } = require('../models/customer-model.js');

module.exports.get_customers = (req, res, next) => {
    get_all()
        .then((customers) => {
            res.status(200).json(customers);
        })
        .catch((err) => {
            next(err);
        })
};

module.exports.get_one_customer = ({ params: { id } }, res, next) => {
    get_one(id)
        .then((customer) => {
            res.status(200).json(customer)
        })
        .catch((err) => next(err));
}