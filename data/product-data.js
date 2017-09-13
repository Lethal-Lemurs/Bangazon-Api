'use strict';

const faker = require('faker');

module.exports.generateProduct = () => {
  let product = [];

  for (let i = 0; i < 10; i++) {
    let title = faker.commerce.productName();
    let price = faker.commerce.price();
    let description = faker.company.catchPhraseDescriptor();

    product.push({
      title,
      price,
      description

    });
  }

  return product;
};