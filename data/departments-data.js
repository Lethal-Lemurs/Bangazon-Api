'use strict';

const faker = require('faker');

module.exports.generateDepartments = (employeesLen) => {
  let departments = [];

  for (let i = 0; i < 10; i++) {
    let dept_name = faker.commerce.department();
    let expense_budget = faker.commerce.price();

    departments.push({
      dept_name,
      expense_budget
    });
  }

  return departments;
};