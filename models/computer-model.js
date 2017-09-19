'use strict';

const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./db/bangazonStore.sqlite');

module.exports = {
  get_all: () => {
    return new Promise((resolve, reject) => {
      db.all(`SELECT * FROM computers`,
      (err, computer_data) => {
        if (err) return reject(err);
        resolve(computer_data);
      });
    });
  },
  
  get_one: (id) => {
    return new Promise((resolve, reject) => {
      db.get(`SELECT * FROM computers WHERE computer_id = ${id}`,
      (err, computer) => {
        if (err) return reject(err);
        resolve(computer);
      });
    });
  },
  
  post_one: (new_computer) => {
    return new Promise((resolve, reject) => {
      db.run(`INSERT INTO computers (purchased_date, model_number) VALUES(
      "${new_computer.purchased_date}", ${new_computer.model_number})`,
      (err, computer) => {
        if (err) return reject(err);
        resolve(computer);
      });
    });
  },

  put_one: (id, body) => {
    return new Promise((resolve, reject) => {
      db.run(`DELETE FROM computers WHERE computer_id = ${id}`)
      db.run(`INSERT INTO computers (computer_id, purchased_date, model_number) VALUES(
        ${id},
        "${body.purchased_date}", ${body.model_number})`,
      (err, data) => {
        if (err) return reject(err);
        resolve(data);
      })
    })
  },

  remove_one: (id) => {
    return new Promise((resolve, reject) => {
      db.run(`DELETE FROM computers WHERE computer_id = ${id}`,
      (err, computer_data) => {
        if (err) return reject(err);
        resolve(computer_data);
      });
    });
  }

}