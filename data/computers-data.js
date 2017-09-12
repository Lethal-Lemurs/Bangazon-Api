'use strict';

const faker = require('faker');

module.exports.generateComputers = () => {
  let computers = [];

  for (let i = 0; i < 10; i++) {
    let purchased_date = faker.date.past();

    computers.push({
      purchased_date
    });
  }

  return computers;
};