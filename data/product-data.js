'use strict';

const faker = require('faker');

module.exports.generateProducts = () => {
  let products = [];

  for (let i = 0; i < 10; i++) {
    let title = faker.commerce.productName();
    let price = faker.commerce.price();
    let description = faker.company.catchPhraseDescriptor();

    products.push({
      title,
      price,
      description

    });
  }

  return products;
};