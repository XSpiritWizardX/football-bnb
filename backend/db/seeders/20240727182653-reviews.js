'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Review.bulkCreate([
      {
       spotId: 1,
       userId: 1,
       review: 'fireland',
       stars: 3,
       createdAt: timestamp,
       updatedAt:timestamp
      },
      {
        spotId: 2,
        userId: 2,
        review: 'find',
        stars: 5,
        createdAt: timestamp,
        updatedAt:timestamp
       }

    ], { validate: true });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
