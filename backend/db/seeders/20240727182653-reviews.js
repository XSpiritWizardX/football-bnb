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
        review: 'its not too bad if you arnt a prisoner',
        stars: 1,
        createdAt:Date.now(),
        updatedAt:Date.now()
       },
       {
         spotId: 2,
         userId: 2,
         review: 'very spacey people but love the atmosphere, i would recommend',
         stars: 4,
         createdAt:Date.now(),
         updatedAt:Date.now()
        },
        {
          spotId: 3,
          userId: 1,
          review: 'they serve the best tea and tell the best stories',
          stars: 5,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 4,
          userId: 5,
          review: 'I kissed my true love here. ',
          stars: 5,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 1,
          userId: 3,
          review: 'its not too bad if you arnt a prisoner',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 1,
          userId: 3,
          review: 'its not too bad if you arnt a prisoner',
          stars: 2,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 1,
          userId: 3,
          review: 'its not too bad if you arnt a prisoner',
          stars: 2,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 1,
          userId: 3,
          review: 'its not too bad if you arnt a prisoner',
          stars: 5,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 1,
          userId: 3,
          review: 'its not too bad if you arnt a prisoner',
          stars: 1,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 1,
          userId: 3,
          review: 'its not too bad if you arnt a prisoner',
          stars: 3,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 1,
          userId: 3,
          review: 'its not too bad if you arnt a prisoner',
          stars: 2,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          spotId: 1,
          userId: 3,
          review: 'its not too bad if you arnt a prisoner',
          stars: 4,
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
