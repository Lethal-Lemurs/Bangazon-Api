const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('bangazonStore.sqlite');

const { employeeTypes } = require('../data/employee-types');
const { orderStatus } = require('../data/order-status');

const { generateEmployees } = require('../data/employees-data');
const { generateDepartments } = require('../data/departments-data');
const { generatePrograms } = require('../data/programs-data');
const { generateComputers } = require('../data/computers-data');
const { generateUsers } = require('../data/users-data');
const { generateProductType } = require('../data/product-type-data');
const { generateTransactionType } = require('../data/transaction-type-data');
const { generateProduct } = require('../data/product-data');
const { generateOrders } = require('../data/order-data');
const { generatePaymentType } = require('../data/payment-type-data');

let employees = generateEmployees(employeeTypes);
let departments = generateDepartments();
let programs = generatePrograms();
let computers = generateComputers();

let user = generateUsers();
let productType = generateProductType();
let transactionType = generateTransactionType();
let product = generateProduct();
let paymentType = generatePaymentType();
console.log(paymentType)
let orders = generateOrders(orderStatus);

db.serialize(function() {
  db.run(`DROP TABLE IF EXISTS employees`);
  db.run(`DROP TABLE IF EXISTS departments`);
  db.run(`DROP TABLE IF EXISTS programs`);
  db.run(`DROP TABLE IF EXISTS computers`);
  db.run(`DROP TABLE IF EXISTS user`);
  db.run(`DROP TABLE IF EXISTS productType`);
  db.run(`DROP TABLE IF EXISTS product`);
  db.run(`DROP TABLE IF EXISTS paymentType`);
  db.run(`DROP TABLE IF EXISTS orders`);

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

  // ******* USER TABLES
  db.run(`CREATE TABLE IF NOT EXISTS user (
    user_id INTEGER NOT NULL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT NOT NULL,
    address_street TEXT NOT NULL,
    address_city TEXT NOT NULL,
    address_state TEXT NOT NULL,
    address_zip INT NOT NULL)`
  );

  db.run(`CREATE TABLE IF NOT EXISTS productType (
    productType_id INTEGER NOT NULL PRIMARY KEY,
    type TEXT NOT NULL)`
  );

  db.run(`CREATE TABLE IF NOT EXISTS product (
    product_id INTEGER NOT NULL PRIMARY KEY,
    title TEXT NOT NULL,
    price TEXT NOT NULL,
    description TEXT NOT NULL,
    seller_id INT NULL,
      FOREIGN KEY (seller_id) REFERENCES user(user_id) )`
  );

  db.run(`CREATE TABLE IF NOT EXISTS transactionType (
    tranType_id INTEGER NOT NULL PRIMARY KEY,
    type TEXT NOT NULL)`
  );

  db.run(`CREATE TABLE IF NOT EXISTS paymentType (
    payType_id INTEGER NOT NULL PRIMARY KEY,
    account_number INT NOT NULL,
    user_id INT NULL,
    transactionType_id INT NULL,
      FOREIGN KEY (user_id) REFERENCES user(user_id),
      FOREIGN KEY (transactionType_id) REFERENCES transactionType(tranType_id))`
  );

  db.run(`CREATE TABLE IF NOT EXISTS orders (
    order_id INTEGER NOT NULL PRIMARY KEY,
    order_date TEXT NOT NULL,
    order_status TEXT NOT NULL,
    buyer_id INT NULL,
    paymentType_id TEXT NULL,
      FOREIGN KEY (buyer_id) REFERENCES user(user_id),
      FOREIGN KEY (paymentType_id) REFERENCES paymentType(payType_id))`
  );

  employees.forEach( ({first_name, last_name, phone, position_title}) => {
    db.run(`INSERT INTO employees (first_name, last_name, phone, position_title)
    VALUES ("${first_name}", "${last_name}", ${phone}, "${position_title}")`);
  });
  
  departments.forEach( ({dept_name, expense_budget}) => {
    db.run(`INSERT INTO departments (dept_name, expense_budget)
    VALUES ("${dept_name}", ${expense_budget})`);
  });
  
  programs.forEach( ({start_date, end_date}) => {
    db.run(`INSERT INTO programs (start_date, end_date)
    VALUES ("${start_date}", "${end_date}")`);
  });
  
  computers.forEach( ({purchased_date}) => {
    db.run(`INSERT INTO computers (purchased_date)
    VALUES ("${purchased_date}")`);
  });
  
  // ******* USER TABLES
  user.forEach( ({first_name, last_name, phone, email, address_street, address_city, address_state, address_zip}) => {
    db.run(`INSERT INTO user (first_name, last_name, phone, email, address_street, address_city, address_state, address_zip)
      VALUES ("${first_name}", "${last_name}", "${phone}", "${email}", "${address_street}", "${address_city}", "${address_state}", ${address_zip})`);
  });

  productType.forEach( ({type}) => {
    db.run(`INSERT INTO productType (type)
    VALUES ("${type}")`);
  });

  product.forEach( ({title, price, description}) => {
    db.run(`INSERT INTO product (title, price, description)
    VALUES ("${title}", ${price}, "${description}")`);
  });

  transactionType.forEach( ({type}) => {
    db.run(`INSERT INTO transactionType (type)
    VALUES ("${type}")`);
  });

  paymentType.forEach( ({account_number}) => {
    db.run(`INSERT INTO paymentType (account_number)
    VALUES (${account_number})`);
  });

  orders.forEach( ({order_date, order_status}) => {
    db.run(`INSERT INTO orders (order_date, order_status)
    VALUES ("${order_date}", "${order_status}")`);
  });
});