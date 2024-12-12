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
       ownerId: 6,
       address: 'firePalace',
       city: 'fireland',
       state: 'fire',
       country: 'fireNation',
       lat: 110.0078,
       lng: 34.0086,
       name: 'Fire palace',
       description: 'stay in prince zukos room',
       price: 1000.00
      },
      {
        ownerId: 4,
        address: 'southern air temple',
        city: 'south air',
        state: 'air',
        country: 'air nation',
        lat: 110.0078,
        lng: 34.0086,
        name: 'Southern Air Temple',
        description: 'stay the night in aangs old room',
        price: 1000.00
       },
       {
        ownerId: 6,
        address: 'jasmine dragon',
        city: 'ba seng sei',
        state: 'earth',
        country: 'earth nation',
        lat: 110.0078,
        lng: 34.0086,
        name: 'Jasmine Dragon',
        description: 'stay in the jasmine dragon and visit uncle Iroh',
        price: 1000.00
       },
       {
        ownerId: 3,
        address: 'The Secret Tunnels',
        city: 'Ginsen Temple',
        state: 'earth',
        country: 'Earth Nation',
        lat: 110.0078,
        lng: 34.0086,
        name: 'Secret Tunnels',
        description: 'Get lost and find love in the secret tunnels',
        price: 1000.00
       },
       {
        ownerId: 5,
        address: 'Southern Water Tribe',
        city: 'Shuen City',
        state: 'water',
        country: 'water nation',
        lat: 110.0078,
        lng: 34.0086,
        name: 'Kataras Home',
        description: 'Defend the southern water tribe from fire nation invaders',
        price: 1000.00
       },
       {
        ownerId: 1,
        address: 'Kyoshi Statue',
        city: 'Kyoshi',
        state: 'earth',
        country: 'earth nation',
        lat: 110.0078,
        lng: 34.0086,
        name: 'Kyoshi Island',
        description: 'stay with the kyoshi warriors',
        price: 1000.00
       },
       {
        ownerId: 2,
        address: 'Hokage',
        city: 'Hokage',
        state: 'fire',
        country: 'fire nation',
        lat: 110.0078,
        lng: 34.0086,
        name: 'Master Swordsmith',
        description: 'stay and train under a legendary master swordsman',
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
