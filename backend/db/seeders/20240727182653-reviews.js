'use strict';
const {Review}=require("../models");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Review.bulkCreate([
      {
       spotId: 1,
       userId: 1,
       review: 'fireland',
       stars: 3,
       createdAt:Date.now(),
       updatedAt:Date.now()
      },
      {
        spotId: 2,
        userId: 2,
        review: 'find',
        stars: 5,
        createdAt:Date.now(),
        updatedAt:Date.now()
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
