'use strict';

const faker = require('faker');

module.exports.generateComputers = () => {
  let computers = [];

  for (let i = 0; i < 10; i++) {
    let purchased_date = faker.date.past();
    let model_number = faker.random.number();

    computers.push({
      purchased_date,
      model_number
    });
  }

  return computers;
};