'use strict';

const sqlite3 = require('sqlite3').verbose();
const moment = require('moment');
//need to require in the database once named
const db = new sqlite3.Database('./db/bangazonStore.sqlite');
var DATE_RFC2822 = "ddd, DD MMM YYYY HH:mm:ss ZZ";


let get_date = (id) => {
  return new Promise((resolve,reject)=>{
    db.get(`SELECT start_date FROM programs WHERE program_id = ${id}`, (err, date)=>{
      if(err) {
        console.log(`error from model`, err);
        return reject (err)
      }
      resolve(date) 
    });
  });
};


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
      db.run(`INSERT INTO programs (program_id, start_date, end_date) VALUES(
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
        get_date(id)
        .then((date)=>{
          console.log(moment().isBefore(date.start_date))
          console.log("today", moment(), "date", date.start_date);
          if(moment().isBefore(date.start_date)===true){
            db.run(`DELETE FROM programs WHERE program_id = ${id}`, 
            (err, data) => {
              if (err) return reject(err);
              resolve(data);
            })
          }
        });
    });
  }
}