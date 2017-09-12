'use strict';

const { get_all_customers, get_one_customer } = require('../models/customerModel.js');

module.exports.get_customers = (req, res, next) => {
    get_all_customers()
}



module.exports.get_one_customer = (req, res, next) => {

}