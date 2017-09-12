'use strict';

const faker = require('faker')

module.exports.generateUsers = () => {
  let users = [];

  for (let i = 0; i < 50; i++) {
    let first_name = faker.name.firstName();
    let last_name = faker.name.lastName();
    let phone = faker.phone.phoneNumberFormat();
    let email = faker.internet.email();
    let address_street = faker.address.streetAddress();
    let address_city = faker.address.city();
    let address_state = faker.address.state();
    let address_zip = faker.address.zipCode();

    users.push({
      first_name,
      last_name,
      phone,
      email,
      address_street,
      address_city,
      address_state,
      address_zip
    });
  }

  return users;
}