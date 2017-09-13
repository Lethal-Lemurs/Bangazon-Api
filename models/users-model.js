'use strict';

const sqlite3 = require('sqlite3').verbose();

//need to require in the database once named
const db = new sqlite3.Database('./db/bangazonStore.sqlite');

module.exports = {
  get_all: () => {
    return new Promise((resolve, reject) => {
      db.all(`SELECT * FROM users`,
        (err, user_data) => {
          if (err) return reject(err);
          resolve(user_data);
        });
    });
  },
  
  get_one: (id) => {
    return new Promise((resolve, reject) => {
      db.get(`SELECT * FROM users WHERE user_id = ${id}`,
        (err, user) => {
          if (err) return reject(err);
          resolve(user);
        });
    });
  }
}