const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('bangazonStore.sqlite');

const { productTypes } = require('../data/product-types');
const { employeeTypes } = require('../data/employee-types');

const { generateEmployees } = require('../data/employees');
const { generateDepartments } = require('../data/departments');
const { generatePrograms } = require('../data/programs');
const { generateComputers } = require('../data/computers');

let employees = generateEmployees(employeeTypes);

let departments = generateDepartments();

let programs = generatePrograms();

let computers = generateComputers();

db.serialize(function() {
  db.run(`DROP TABLE IF EXISTS employees`);
  db.run(`DROP TABLE IF EXISTS departments`);
  db.run(`DROP TABLE IF EXISTS programs`);
  db.run(`DROP TABLE IF EXISTS computers`);

  db.run(`CREATE TABLE IF NOT EXISTS employees (
    emp_id INTEGER NOT NULL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    phone INT NOT NULL,
    position_title)`
  );

  db.run(`CREATE TABLE IF NOT EXISTS departments (
    dept_id INTEGER NOT NULL PRIMARY KEY,
    dept_name TEXT NOT NULL,
    expense_budget INTEGER NOT NULL,
    employee_id INTEGER NULL,
      FOREIGN KEY (employee_id) REFERENCES employees(emp_id) )`
  );

  db.run(`CREATE TABLE IF NOT EXISTS programs (
    program_id INTEGER NOT NULL PRIMARY KEY,
    start_date TEXT NOT NULL,
    end_date TEXT NOT NULL)`
  );

  db.run(`CREATE TABLE IF NOT EXISTS computers (
    computer_id INTEGER NOT NULL PRIMARY KEY,
    purchased_date TEXT NOT NULL,
    decomissioned_date TEXT NULL,
    employee_id INT NULL,
      FOREIGN KEY (employee_id) REFERENCES employees(emp_id) )`
  );


  employees.forEach( ({first_name, last_name, phone, position_title }) => {
    db.run(`INSERT INTO employees (first_name, last_name, phone, position_title)
      VALUES ("${first_name}", "${last_name}", ${phone}, "${position_title}") `);
  });

  departments.forEach( ({dept_name, expense_budget}) => {
    db.run(`INSERT INTO departments (dept_name, expense_budget)
      VALUES ("${dept_name}", ${expense_budget}) `);
  });

  programs.forEach( ({start_date, end_date}) => {
    db.run(`INSERT INTO programs (start_date, end_date)
      VALUES ("${start_date}", "${end_date}") `);
  });

  computers.forEach( ({purchased_date}) => {
    db.run(`INSERT INTO computers (purchased_date)
      VALUES ("${purchased_date}")`);
  });

});