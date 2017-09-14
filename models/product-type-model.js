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
  },

  post_one: (prod_type) => {
    return new Promise((resolve, reject) => {
      db.run(`INSERT INTO productTypes (type) VALUES(
        "${prod_type.type}")`,
        (err, data) => {
          if (err) return reject(err);
          resolve(data);
        });
      });
    },

  put_one: (id, body) => {
    return new Promise((resolve, reject) => {
      db.run(`DELETE FROM productTypes WHERE productType_id = ${id}`)
      db.run(`INSERT INTO productTypes (productType_id, type) VALUES(
        ${id},
        "${body.type}")`,
      (err, data) => {
        if (err) return reject(err);
        resolve(data);
      });
    });
  },

  delete_one: (id) => {
    return new Promise((resolve, reject) => {
      db.run(`DELETE FROM productTypes WHERE productType_id = ${id}`, 
      (err, data) => {
        if (err) return reject(err);
        resolve(data);
      });
    });
  }
}