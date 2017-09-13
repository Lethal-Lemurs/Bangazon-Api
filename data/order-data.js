'use strict';

const faker = require('faker');

module.exports.generateOrders = (orderStatus) => {
  let orders = [];

  for (let i = 0; i < 10; i++) {
    let order_date = faker.date.recent();
    let status =  Math.floor(Math.random() * orderStatus.length) + 0;
    let new_status = orderStatus[status];
    let order_status = new_status.status;

    orders.push({
      order_date,
      order_status
    });
  }

  return orders;
};