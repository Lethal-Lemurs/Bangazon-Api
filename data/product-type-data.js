'use strict';

const faker = require('faker');

module.exports.generateProductType = () => {
  let productType = [];

  for (let i = 0; i < 10; i++) {
    let type = faker.commerce.productMaterial();

    productType.push({
      type
    });
  }

  return productType;
};