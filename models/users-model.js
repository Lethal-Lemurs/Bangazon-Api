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
  }