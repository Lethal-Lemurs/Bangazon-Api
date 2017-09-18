const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/bangazonStore.sqlite');

module.exports = {
  get_all: () => {
    return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM products`,
      (err, products_data) => {
      if (err) return reject(err);
      resolve(products_data);
      });
    });
  },

  get_one: (id) => {
    return new Promise((resolve, reject) => {
    db.get(`SELECT * FROM products WHERE product_id = ${id}`,
      (err, product_data) => {
      if (err) return reject(err);
      resolve(product_data);
      });
    });
  },

  remove_one: (id) => {
    return new Promise((resolve, reject) => {
      db.run(`DELETE FROM products WHERE product_id = ${id}`,
      (err, product_data) => {
        if (err) return reject(err);
        resolve(product_data);
      });
    })
  },

    post_one: (products) => {
      return new Promise((resolve, reject) => {
      db.run(`INSERT INTO products (title, price, description) VALUES(
      "${products.title}",
      "${products.price}",
      "${products.description}")`,
        (err, data) => {
        if (err) return reject(err);
        resolve(data);
        });
      })
    },

    put_one: (id, body) => {
      return new Promise((resolve, reject) => {
      db.run(`DELETE FROM products WHERE product_id = ${id}`);
      db.run(`INSERT INTO products (product_id, title, price, description) VALUES(
        ${id}, "${body.title}", "${body.price}", "${body.description}")`,
        (err, data) => {
        if (err) return reject(err);
        resolve(data);
      });
    });
  }
}
