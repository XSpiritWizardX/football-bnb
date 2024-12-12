'use strict';
const {SpotImage} = require("../models")

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}


module.exports = {
  async up (queryInterface, Sequelize) {
    await SpotImage.bulkCreate([


      {
        spotId: 1,
        url:"http://img3.wikia.nocookie.net/__cb20130916095007/avatar/images/2/23/Restored_Southern_Air_Temple.png",
        preview:false
      },
      {
        spotId: 2,
        url:"https://tse2.mm.bing.net/th?id=OIP.KJn-2oSVWGR6_zC8rDe1iAHaEK&pid=Api&P=0&h=220",
        preview:true
      },
       {
        spotId: 3,
        url:"http://img3.wikia.nocookie.net/__cb20130916095007/avatar/images/2/23/Restored_Southern_Air_Temple.png",
        preview:true
      },
      {
        spotId: 4,
        url:"https://tse2.mm.bing.net/th?id=OIP.KJn-2oSVWGR6_zC8rDe1iAHaEK&pid=Api&P=0&h=220",
        preview:true
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
    options.tableName = 'SpotImages';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      spotId: { [Op.in]: [1,4] }
    }, {});

  }
};
