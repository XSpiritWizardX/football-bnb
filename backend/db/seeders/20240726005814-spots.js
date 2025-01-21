'use strict';
const {Spot} = require("../models")

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}


module.exports = {
  async up (queryInterface, Sequelize) {
    await Spot.bulkCreate([
      {
       ownerId: 1,
       address: '1 Arrowhead Dr',
       city: 'Kansas City',
       state: 'MO',
       country: 'United States',
       lat: 39.048786,
       lng: -94.484566,
       name: 'Arrowhead Stadium',
       description: 'Home to the Kansas City Chiefs',
       price: 1000.00
      },
      {
        ownerId: 1,
        address: '1 AT&T Way',
        city: 'Arlington',
        state: 'TX',
        country: 'United States',
        lat: 32.747841,
        lng: -97.093628,
        name: 'AT&T Stadium',
        description: 'Home to the Dallas Cowboys',
        price: 1000.00
       },
       {
        ownerId: 1,
        address: '800 S Mint St',
        city: 'Charlotte',
        state: 'NC',
        country: 'United states',
        lat: 35.225845,
        lng: -80.853607,
        name: 'Bank of America Stadium',
        description: 'Home to the Carolina Panthers',
        price: 1000.00
       },
       {
        ownerId: 1,
        address: '1701 Bryant St',
        city: 'Denver',
        state: 'CO',
        country: 'United States',
        lat: 39.743890,
        lng: -105.020109,
        name: 'Sports Authority Field at Mile High',
        description: 'Home to the Denver Broncos',
        price: 1000.00
       },
       {
        ownerId: 1,
        address: '800 Occidental Ave S',
        city: 'Seattle',
        state: 'WA',
        country: 'United States',
        lat: 47.595152,
        lng: -122.331639,
        name: 'Centruy Link Field',
        description: 'Home to the Seattle Seahawks',
        price: 1000.00
       },
       {
        ownerId: 1,
        address: '1600 Ring Rd',
        city: 'Landover',
        state: 'MD',
        country: 'United states',
        lat: 38.9047,
        lng: -76.8587,
        name: 'Fedex Field',
        description: 'Home to the Washington Commanders',
        price: 1000.00
       },
       {
        ownerId: 1,
        address: '100 Alfred Lerner Way',
        city: 'Cleveland',
        state: 'OH',
        country: 'United States',
        lat: 41.506035,
        lng: -81.700058,
        name: 'First Energy Stadium',
        description: 'Home to the Cleveland Browns',
        price: 1000.00
       },
       {
        ownerId: 1,
        address: '2000 Brush St',
        city: 'Detroit',
        state: 'MI',
        country: 'United States',
        lat: 42.340115,
        lng: -83.046341,
        name: 'First Energy Stadium',
        description: 'Home to the Detroit Lions',
        price: 1000.00
       },


    ], { validate: true, });
  },



  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'Spots';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      ownerId: { [Op.in]: [1,4] }
    }, {});

  }
};
