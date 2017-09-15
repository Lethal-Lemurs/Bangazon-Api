'use strict';

const faker = require('faker');
const moment = require('moment');
var DATE_RFC2822 = "ddd, DD MMM YYYY HH:mm:ss ZZ";
module.exports.generatePrograms = () => {
  let programs = [];

  for (let i = 0; i < 10; i++) {
    let start_date = moment(faker.date.past()).format(DATE_RFC2822);
    let end_date = moment(faker.date.future()).format(DATE_RFC2822);

    programs.push({
      start_date,
      end_date
    });
  }

  return programs;
};