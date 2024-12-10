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
       address: 'firePalace',
       city: 'fireland',
       state: 'fireman',
       country: 'fireNation',
       lat: 110.0078,
       lng: 34.0086,
       name: 'Fire palace',
       description: 'stay in prince zukos room',
       price: 1000.00
      },
      {
        ownerId: 4,
        address: 'flace',
        city: 'find',
        state: 'firen',
        country: 'fireNon',
        lat: 110.0078,
        lng: 34.0086,
        name: 'Fire pace',
        description: 'stay room',
        price: 1000.00
       }

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
