'use strict';
const {ReviewImage}=require("../models");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await ReviewImage.bulkCreate([
      {
        reviewId: 1,
        url:"http://img3.wikia.nocookie.net/__cb20130916095007/avatar/images/2/23/Restored_Southern_Air_Temple.png"
      },
      {
        reviewId: 2,
        url:"https://tse2.mm.bing.net/th?id=OIP.KJn-2oSVWGR6_zC8rDe1iAHaEK&pid=Api&P=0&h=220"
       }

    ], { validate: true });
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
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
