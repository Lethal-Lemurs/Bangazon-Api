'use strict';

const sqlite3 = require('sqlite3').verbose();

//need to require in the database once named
const db = new sqlite3.Database('./db/bangazonStore.sqlite');

module.exports = {
  get_all: (req) => {
    return new Promise((resolve, reject) => {
      if (req.query.active === "false") {
        db.all(`SELECT * FROM users
        LEFT JOIN orders ON users.user_id = orders.buyer_id
        WHERE orders.buyer_id IS NULL`,
        (err, user_data) => {
          if (err) return reject(err);
          resolve(user_data);
        });
      } else if (req.query.active === "true") {
        db.all(`SELECT * FROM users
        LEFT JOIN orders ON users.user_id = orders.buyer_id
        WHERE orders.buyer_id IS NOT NULL`,
        (err, user_data) => {
          if (err) return reject(err);
          resolve(user_data);
        });
      } else {
        db.all(`SELECT * FROM users`,
        (err, user_data) => {
          if (err) return reject(err);
          resolve(user_data);
        });
      }
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
  },

  post_one: (new_user) => {
    return new Promise((resolve, reject) => {
      db.run(`INSERT INTO users (first_name, last_name, phone, email, address_street, address_city, address_state, address_zip) VALUES(
      "${new_user.first_name}",
      "${new_user.last_name}",
      "${new_user.phone}",
      "${new_user.email}",
      "${new_user.address_street}",
      "${new_user.address_city}",
      "${new_user.address_state}",  
      ${new_user.address_zip})`,
      (err, user) => {
        if (err) return reject(err);
        resolve(user);
      });
    });
  },
  
  update_user_model: (id, body) => {
    return new Promise((resolve, reject) => {
      db.run(`DELETE FROM users WHERE user_id = ${id}`);
      db.run(`INSERT INTO users (user_id, first_name, last_name, phone, email, address_street, address_city, address_state, address_zip) VALUES(
      ${id}, "${body.first_name}", "${body.last_name}", "${body.phone}", "${body.email}", "${body.address_street}", "${body.address_city}", "${body.address_state}", ${body.address_zip})`,
      (err, data) => {
        if (err) return reject(err);
        resolve(data);
      });
    });
  },

  delete_one: (id) => {
    return new Promise((resolve, reject) => {
      db.get(`SELECT * FROM users WHERE user_id = ${id}`,
      (err, user) => {
        if (err) return reject(err);
        resolve(user);
      });
    });
  }
}

