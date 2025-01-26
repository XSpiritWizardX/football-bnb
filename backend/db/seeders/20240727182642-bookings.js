'use strict';
const {Booking} = require("../models")

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}


module.exports = {
  async up (queryInterface, Sequelize) {
    await Booking.bulkCreate([
      {
        spotId: 1,
        userId: 5,
        startDate: "12/12/2025",
        endDate: "12/15/2025"
      },
      {
        spotId: 6,
        userId: 6,
        startDate: "12/30/2025",
        endDate: "01/05/2025"
      },
      {
        spotId: 4,
        userId: 2,
        startDate: "12/21/2025",
        endDate: "12/28/2025"
      },
      {
        spotId: 7,
        userId: 4,
        startDate: "02/02/2025",
        endDate: "02/23/2025"
      },
      {
        spotId: 11,
        userId: 1,
        startDate: "12/12/2025",
        endDate: "12/15/2025"
      },
      {
        spotId: 8,
        userId: 1,
        startDate: "12/12/2025",
        endDate: "12/15/2025"
      },
      {
        spotId: 9,
        userId: 1,
        startDate: "12/12/2025",
        endDate: "12/15/2025"
      },
      {
        spotId: 22,
        userId: 1,
        startDate: "12/12/2025",
        endDate: "12/15/2025"
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
    options.tableName = 'Bookings';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      spotId: { [Op.in]: [1,4] },
      userId: { [Op.in]: [1,4] },
    }, {});

  }
};
