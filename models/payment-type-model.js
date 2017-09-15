const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/bangazonStore.sqlite');

module.exports = {
  get_all: () => {
    return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM paymentTypes`,
      (err, paymentType_data) => {
      if (err) return reject(err);
      resolve(paymentType_data);
      });
    });
  },

  get_one: (id) => {
    return new Promise((resolve, reject) => {
    db.get(`SELECT * FROM paymentTypes WHERE payType_id = ${id}`,
      (err, paymentType_data) => {
      if (err) return reject(err);
      resolve(paymentType_data);
      });
    });
  },

  delete_one: (id) => {
    return new Promise((resolve, reject) => {
      db.run(`DELETE FROM paymentTypes WHERE payType_id = ${id}`,
      (err, data) => {
        if (err) return reject(err);
        resolve(data);
        });
      })
    },
    post_one: (payment_type) => {
      return new Promise((resolve, reject) => {
      db.run(`INSERT INTO paymentTypes (account_number, user_id, transactionType_id) VALUES(
      ${payment_type.account_number},
      ${payment_type.user_id},
      ${payment_type.transactionType_id})`,
        (err, data) => {
        if (err) return reject(err);
        resolve(data);
        });
      })
    },

    put_one: (id, body) => {
      return new Promise((resolve, reject) => {
      db.run(`DELETE FROM paymentTypes WHERE payType_id = ${id}`),
      db.run(`INSERT INTO paymentTypes (payType_id, account_number, user_id, transactionType_id) VALUES(${id}, ${body.account_number}, ${body.user_id}, ${body.transactionType_id})`,
        (err, data) => {
        if (err) return reject(err);
        resolve(data);
      });
    });
  }
}