'use strict';

const faker = require('faker');

module.exports.generateEmployees = (employeeType) => {
  let employees = [];

  for (let i = 0; i < 50; i++) {
    let first_name = faker.name.firstName();
    let last_name = faker.name.lastName();
    let phone = faker.phone.phoneNumberFormat();
    let position =  Math.floor(Math.random() * employeeType.length) + 0;
    let new_position = employeeType[position];
    let position_title = new_position.position;

    employees.push({
      first_name,
      last_name,
      phone,
      position_title
    });
  }

  return employees;
}