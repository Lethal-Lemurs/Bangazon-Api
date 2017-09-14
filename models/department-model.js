'use strict';

const sqlite3 = require('sqlite3').verbose();

//need to require in the database once named
const db = new sqlite3.Database('./db/bangazonStore.sqlite');

module.exports = {
  get_all: () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM departments`,
    (err, department_data) => {
      if (err) return reject(err);
      resolve(department_data);
    });
  });
  },
  
  get_one: (id) => {
  return new Promise((resolve, reject) => {
    db.get(`SELECT * FROM departments WHERE dept_id = ${id}`,
    (err, department) => {
      if (err) return reject(err);
      resolve(department);
    });
  });
  },

  post_one: (new_department) => {
  return new Promise((resolve, reject) => {
    db.run(`INSERT INTO departments (dept_name, expense_budget) VALUES(
    "${new_department.dept_name}",
    ${new_department.expense_budget})`,
    (err, department) => {
      if (err) return reject(err);
      resolve(department);
    });
  });
  },

  update_department_model: (id, body) => {
    return new Promise((resolve, reject) => {
      db.run(`DELETE FROM departments WHERE dept_id = ${id}`);
      db.run(`INSERT INTO departments (dept_id, dept_name, expense_budget) VALUES(
        ${id}, "${body.dept_name}", ${body.expense_budget})`,
      (err, data) => {
        if (err) return reject(err);
        resolve(data);
      });
    });
  }
}