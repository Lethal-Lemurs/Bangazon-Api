'use strict';

const sqlite3 = require('sqlite3').verbose();

//need to require in the database once named
const db = new sqlite3.Database('./db/bangazonStore.sqlite');

module.exports = {
  get_all: () => {
    return new Promise((resolve, reject) => {
      db.all(`SELECT * FROM employees`,
      (err, employee_data) => {
        if (err) return reject(err);
        resolve(employee_data);
      });
    });
  },
  
  get_one: (id) => {
    return new Promise((resolve, reject) => {
      db.get(`SELECT * FROM employees WHERE emp_id = ${id}`,
      (err, employee) => {
        if (err) return reject(err);
        resolve(employee);
      });
    });
  },

  post_one: (new_employee) => {
    return new Promise((resolve, reject) => {
      db.run(`INSERT INTO employees (first_name, last_name, phone, position_title) VALUES(
      "${new_employee.first_name}",
      "${new_employee.last_name}",
      "${new_employee.phone}",
      "${new_employee.position_title}")`,
      (err, employee) => {
        if (err) return reject(err);
        resolve(employee);
      });
    });
  },

  update_employee_model: (id, body) => {
    return new Promise((resolve, reject) => {
      db.run(`DELETE FROM employees WHERE emp_id = ${id}`);
      db.run(`INSERT INTO employees (emp_id, first_name, last_name, phone, position_title) VALUES(
      ${id}, "${body.first_name}", "${body.last_name}", "${body.phone}", "${body.position_title}")`,
      (err, data) => {
        if (err) return reject(err);
        resolve(data);
      });
    });
  }
}