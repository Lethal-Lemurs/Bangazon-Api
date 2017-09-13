'use strict';

const faker = require('faker');

module.exports.generateProductTypes = () => {
  let productTypes = [];

  for (let i = 0; i < 10; i++) {
    let type = faker.commerce.productMaterial();

    productTypes.push({
      type
    });
  }

  return productTypes;
};