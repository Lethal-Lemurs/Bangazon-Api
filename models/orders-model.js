'use strict';

const sqlite3 = require('sqlite3').verbose();

//need to require in the database once named
const db = new sqlite3.Database('./db/bangazonStore.sqlite');

module.exports = {
  get_all: () => {
    return new Promise((resolve, reject) => {
      db.all(`SELECT * FROM orders`,
        (err, order_data) => {
          if (err) return reject(err);
          resolve(order_data);
        });
    });
  },
  get_one: (id) => {
    return new Promise((resolve, reject) => {
      db.get(`SELECT * FROM orders WHERE order_id = ${id}`,
        (err, order) => {
          if (err) return reject(err);
          resolve(order);
        });
    });
  },
  delete_one: (id) => {
    return new Promise((resolve, reject) => {
      db.get(`DELETE * FROM orders WHERE order_id = ${id}`,
        (err, order) => {
          if (err) return reject(err);
          resolve(order);
        });
    });
  }
}