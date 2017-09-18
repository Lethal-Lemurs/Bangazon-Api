'use strict';

const faker = require('faker');

module.exports.generatePaymentTypes = () => {
  let paymentTypes = [];

  for (let i = 0; i < 10; i++) {
    let account_number = faker.finance.account();
    let user_id = faker.random.number();


    paymentTypes.push({
      account_number,
      user_id
    });
  }

  return paymentTypes;
};