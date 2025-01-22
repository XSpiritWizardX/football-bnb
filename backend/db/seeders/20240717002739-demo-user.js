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
        email: 'lionsqb@lions.io',
        username: 'qb-lions',
        firstName: 'Jared',
        lastName: 'Goff',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        email: 'user3@user.io',
        username: 'coachoftheyear',
        firstName: 'Dan',
        lastName: 'Campbell',
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'user4@user.io',
        username: 'sunGoD',
        firstName: 'Amon Ra',
        lastName: 'St Brown',
        hashedPassword: bcrypt.hashSync('password4')
      },
      {
        email: 'user5@user.io',
        username: 'the ladies man',
        firstName: 'Jake',
        lastName: 'Bates',
        hashedPassword: bcrypt.hashSync('password5')
      },
      {
        email: 'user6@user.io',
        username: 'Knuckles',
        firstName: 'David',
        lastName: 'Montgomery',
        hashedPassword: bcrypt.hashSync('password6')
      },
      {
        email: 'user7@user.io',
        username: 'Sonic',
        firstName: 'Jamyr',
        lastName: 'Gibbs',
        hashedPassword: bcrypt.hashSync('password7')
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
