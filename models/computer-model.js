'use strict';

const sqlite3 = require('sqlite3').verbose();

//need to require in the database once named
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
  }
}