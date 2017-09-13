'use strict';

const faker = require('faker');

module.exports.generateTransactionType = () => {
  let transactionType = [];

  for (let i = 0; i < 10; i++) {
    let type = faker.finance.accountName();

    transactionType.push({
      type
    });
  }

  return transactionType;
};