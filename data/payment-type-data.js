'use strict';

const faker = require('faker');

module.exports.generatePaymentType = () => {
  let paymentType = [];

  for (let i = 0; i < 10; i++) {
    let account_number = faker.finance.account();

    paymentType.push({
      account_number
    });
  }

  return paymentType;
};