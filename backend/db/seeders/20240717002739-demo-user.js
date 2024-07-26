'use strict';

const { User } = require('../models');
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {
    await User.bulkCreate([
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        firstName: 'Dustin',
        lastName: 'Bovee',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user1@user.io',
        username: 'swordGuy2000',
        firstName: 'Sokka',
        lastName: 'Sokka',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        email: 'user2@user.io',
        username: 'metal-muscles',
        firstName: 'Toph',
        lastName: 'Beifong',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        email: 'user3@user.io',
        username: 'The-last-airbender',
        firstName: 'Aang',
        lastName: 'Aang',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        email: 'user4@user.io',
        username: 'BloodBender',
        firstName: 'Katara',
        lastName: 'Katara',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        email: 'user5@user.io',
        username: 'PrinceofFire',
        firstName: 'Zuko',
        lastName: 'Zuko',
        hashedPassword: bcrypt.hashSync('password3')
      }
    ], { validate: true });
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Users';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
