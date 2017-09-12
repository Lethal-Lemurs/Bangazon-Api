'use strict';

const faker = require('faker');

module.exports.generatePrograms = () => {
  let programs = [];

  for (let i = 0; i < 10; i++) {
    let start_date = faker.date.past();
    let end_date = faker.date.future();

    programs.push({
      start_date,
      end_date
    });
  }

  return programs;
};