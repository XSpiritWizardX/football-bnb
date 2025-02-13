'use strict';
const {Review} = require("../models")

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}


module.exports = {
  async up (queryInterface, Sequelize) {
    await Review.bulkCreate([

      {
        spotId: 1,
        userId: 3,
        review: 'example review',
        stars: 1,
        createdAt:Date.now(),
        updatedAt:Date.now()
       },
       {
         spotId: 2,
         userId: 2,
         review: 'example review',
         stars: 4,
         createdAt:Date.now(),
         updatedAt:Date.now()
        },
        {
          spotId: 3,
          userId: 1,
          review: 'example review',
          stars: 5,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 4,
          userId: 5,
          review: 'example review',
          stars: 5,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 1,
          userId: 3,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 1,
          userId: 3,
          review: 'example review',
          stars: 2,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 1,
          userId: 3,
          review: 'example review',
          stars: 4,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 1,
          userId: 3,
          review: 'example review',
          stars: 5,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 1,
          userId: 3,
          review: 'example review',
          stars: 4,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 1,
          userId: 3,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 1,
          userId: 3,
          review: 'example review',
          stars: 4,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 1,
          userId: 3,
          review: 'example review',
          stars: 4,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 5,
          userId: 3,
          review: 'example review',
          stars: 4,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 6,
          userId: 3,
          review: 'example review',
          stars: 4,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 7,
          userId: 3,
          review: 'example review',
          stars: 4,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 8,
          userId: 3,
          review: 'example review',
          stars: 4,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 9,
          userId: 3,
          review: 'example review',
          stars: 4,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 10,
          userId: 3,
          review: 'example review',
          stars: 4,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 11,
          userId: 3,
          review: 'example review',
          stars: 4,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 12,
          userId: 3,
          review: 'example review',
          stars: 4,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 13,
          userId: 3,
          review: 'example review',
          stars: 4,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 14,
          userId: 3,
          review: 'example review',
          stars: 4,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 15,
          userId: 3,
          review: 'example review',
          stars: 4,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 16,
          userId: 3,
          review: 'example review',
          stars: 4,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 17,
          userId: 3,
          review: 'example review',
          stars: 4,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 18,
          userId: 3,
          review: 'example review',
          stars: 4,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 19,
          userId: 3,
          review: 'example review',
          stars: 4,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 20,
          userId: 3,
          review: 'example review',
          stars: 4,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 21,
          userId: 3,
          review: 'example review',
          stars: 4,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 22,
          userId: 3,
          review: 'example review',
          stars: 4,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 23,
          userId: 3,
          review: 'example review',
          stars: 4,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 24,
          userId: 3,
          review: 'example review',
          stars: 4,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 25,
          userId: 3,
          review: 'example review',
          stars: 4,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 26,
          userId: 3,
          review: 'example review',
          stars: 4,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 27,
          userId: 3,
          review: 'example review',
          stars: 4,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 28,
          userId: 3,
          review: 'example review',
          stars: 4,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 29,
          userId: 3,
          review: 'example review',
          stars: 4,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 30,
          userId: 3,
          review: 'example review',
          stars: 4,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 31,
          userId: 3,
          review: 'example review',
          stars: 4,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 2,
          userId: 1,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 3,
          userId: 1,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 4,
          userId: 1,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 5,
          userId: 1,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 6,
          userId: 1,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 7,
          userId: 1,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 8,
          userId: 1,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 9,
          userId: 1,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 10,
          userId: 1,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 11,
          userId: 1,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 12,
          userId: 1,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 13,
          userId: 1,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 14,
          userId: 1,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 15,
          userId: 1,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 16,
          userId: 1,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 17,
          userId: 1,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 18,
          userId: 1,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 19,
          userId: 1,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 20,
          userId: 1,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 21,
          userId: 1,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 22,
          userId: 1,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 23,
          userId: 1,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 24,
          userId: 1,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 25,
          userId: 1,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 26,
          userId: 1,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 27,
          userId: 1,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 28,
          userId: 1,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 29,
          userId: 1,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 30,
          userId: 1,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 31,
          userId: 1,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 2,
          userId: 2,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 3,
          userId: 2,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 4,
          userId: 2,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 5,
          userId: 2,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 6,
          userId: 2,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 7,
          userId: 2,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 8,
          userId: 2,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 9,
          userId: 2,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 10,
          userId: 2,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 11,
          userId: 2,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 12,
          userId: 2,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 13,
          userId: 2,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 14,
          userId: 2,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 15,
          userId: 2,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 16,
          userId: 2,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 17,
          userId: 2,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 18,
          userId: 2,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 19,
          userId: 2,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 20,
          userId: 2,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 21,
          userId: 2,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 22,
          userId: 2,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 23,
          userId: 2,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 24,
          userId: 2,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 25,
          userId: 2,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 26,
          userId: 2,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 27,
          userId: 2,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 28,
          userId: 2,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 29,
          userId: 2,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 30,
          userId: 2,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 31,
          userId: 2,
          review: 'example review',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 8,
          userId: 6,
          review: 'example review',
          stars: 5,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 8,
          userId: 4,
          review: 'example review',
          stars: 5,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 8,
          userId: 5,
          review: 'example review',
          stars: 5,
          createdAt:Date.now(),
          updatedAt:Date.now()
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
    options.tableName = 'Reviews';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      spotId: { [Op.in]: [1,4] },
      userId: { [Op.in]: [1,4] },
    }, {});

  }
};
