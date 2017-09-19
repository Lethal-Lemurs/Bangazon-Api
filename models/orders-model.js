'use strict';

const sqlite3 = require('sqlite3').verbose();

//need to require in the database once named
const db = new sqlite3.Database('./db/bangazonStore.sqlite');

let user_cart = (cart, count) => {
  let cart_obj = {
    "order_id": cart[0].order_id,
    "buyer_id": cart[0].buyer_id,
    "paymentType_id": cart[0].paymentType_id,
    "products": []
  };
  cart.forEach(products => {
    cart_obj.products.push({
      "product_id": products.product_id,
      "title": products.title,
      "price": products.price,
      "quantity": products.quantity
    });      
  });
  return cart_obj;
}

module.exports = {
  get_all: () => {
    return new Promise((resolve, reject) => {
      db.all(`SELECT * FROM orders`,
        (err, order_data) => {
          if (err) return reject(err);
          resolve(order_data);
        });
    });
  },

  get_one: (id) => {
    return new Promise((resolve, reject) => {
      db.all(`SELECT *, COUNT(orderProduct.product_id) AS quantity
              FROM orderProduct  
              JOIN products 
              WHERE orderProduct.order_id = ${id}
              AND orderProduct.product_id = products.product_id
              GROUP BY orderProduct.product_id`,
      (err, cart) => {
        if (err) return reject(err);
        let customer_cart = user_cart(cart);
        if (cart.length) resolve(customer_cart);
      });
    });
  },

  delete_one: (id) => {
    return new Promise((resolve, reject) => {
      db.run(`DELETE FROM orders WHERE order_id = ${id}`,
      (err, order) => {
        if (err) return reject(err);
        resolve(order);
      });
    });
  },

  post_one: (new_order) => {
    return new Promise((resolve, reject) => {
      db.run(`INSERT INTO orders (order_date, buyer_id, paymentType_id) VALUES(
      "${new_order.order_date}", ${new_order.buyer_id}, ${new_order.paymentType_id})`,
      function (err, order) {
        if (err) {
          return reject(err);
        }
      db.run(`INSERT INTO orderProduct VALUES (
      ${this.lastID}, ${new_order.product_id})`, 
      function (err) {
        if (err) return reject(err);
        resolve(this.lastID);
        })
      });
    });
  },

  put_one: (id, body) => {
    return new Promise((resolve, reject) => {
      db.run(`DELETE FROM orders WHERE order_id = ${id}`);
      db.run(`INSERT INTO orders (order_id, order_date, buyer_id, paymentType_id) VALUES(
      ${id},
      "${body.order_date}",
      ${body.buyer_id},
      ${body.paymentType_id})`,
      function (err, data) {
        if (err) {
          return reject(err);
        }
      db.run(`INSERT INTO orderProduct VALUES (${this.lastID}, ${body.product_id})`,
      function (err) {
        if (err) return reject(err)
        resolve(this.lastID);
        })
      });
    });
  } 
}