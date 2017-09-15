'use strict';

const sqlite3 = require('sqlite3').verbose();

//need to require in the database once named
const db = new sqlite3.Database('./db/bangazonStore.sqlite');

module.exports = {
  get_all: () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM programs`,
    (err, training_data) => {
      if (err) return reject(err);
      resolve(training_data);
    });
  });
  },
  
  get_one: (id) => {
  return new Promise((resolve, reject) => {
    db.get(`SELECT * FROM programs WHERE program_id = ${id}`,
    (err, program) => {
      if (err) return reject(err);
      resolve(program);
    });
  });
  },

  post_one: (new_program) => {
  return new Promise((resolve, reject) => {
    db.run(`INSERT INTO programs (start_date, end_date) VALUES(
    "${new_program.start_date}",
    "${new_program.end_date}")`,
    (err, program) => {
      if (err) return reject(err);
      resolve(program);
    });
  });
  },

  update_training_model: (id, body) => {
    return new Promise((resolve, reject) => {
      db.run(`DELETE FROM programs WHERE program_id = ${id}`);
      db.run(`INSERT INTO programs (user_id, first_name, last_name, phone, email, address_street, address_city, address_state, address_zip) VALUES(
        ${id}, "${body.start_date}", "${body.end_date}")`,
      (err, data) => {
        if (err) return reject(err);
        resolve(data);
      });
    });
  },
  //TODO:make programs delete based on start date
  delete_one: (id) => {
    return new Promise((resolve, reject) => {
      db.run(`DELETE FROM programs WHERE program_id = ${id}`, 
      (err, data) => {
        if (err) return reject(err);
        resolve(data);
      });
    });
  }
}