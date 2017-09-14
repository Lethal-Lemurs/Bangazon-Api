'use strict';

const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./db/bangazonStore.sqlite');

module.exports = {
  get_all: () => {
    return new Promise((resolve, reject) => {
      db.all(`SELECT * FROM productTypes`,
      (err, prod_data) => {
        if (err) return reject(err);
        resolve(prod_data);
      });
    });
  },

  get_one: (id) => {
    return new Promise((resolve, reject) => {
      db.get(`SELECT * FROM productTypes WHERE productType_id = ${id}`,
      (err, prod_data) => {
        if (err) return reject(err);
        resolve(prod_data);
      });
    });
  }

}