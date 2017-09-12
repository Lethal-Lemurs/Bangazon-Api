'use strict';

const { getAllCustomers, getOneCustomer } = require('../models/customerModel.js');

module.exports.getCustomers = (req, res, next) => {
    getAllCustomers()
}



module.exports.getOneCustomer = (req, res, next) => {

}