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
        url:"https://dt1jqiolganbd.cloudfront.net/wp-content/uploads/2024/08/arrowheadstadium3.jpg.webp",
        preview:true
      },
      {
        spotId: 2,
        url:"https://visit-dallas-proxy.imgix.net/https%3A%2F%2Fassets.simpleviewinc.com%2Fsimpleview%2Fimage%2Fupload%2Fc_fit%2Cw_800%2Ch_600%2Fcrm%2Fdallas%2FATTStadium-Dallas-MeetingPlannersImg0-9bff72b25056b3a_9bff73fb-5056-b3a8-491379cce29657b5.png?auto=compress%2Cformat&fit=max&position=50%2050&q=80&w=1024&s=fe67ea0ed20e587b3850b992d6c9ba9a",
        preview:true
      },
       {
        spotId: 3,
        url:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/BofAStadium2015.JPG/1280px-BofAStadium2015.JPG",
        preview:true
      },
      {
        spotId: 4,
        url:"https://images.squarespace-cdn.com/content/v1/5ccb368dc46f6d6ffe57cae2/1582667748060-7HZ8BQOZ66TH516EX75B/shutterstock_419846731_2_.jpg?format=2500w",
        preview:true
       },
       {
        spotId: 5,
        url:"https://cdn.geekwire.com/wp-content/uploads/2020/11/40109761251_33ec56ca5b_k-630x473.jpeg",
        preview:true
       },
       {
        spotId: 6,
        url:"https://static.wikia.nocookie.net/collegefootballmania/images/0/07/FedExField01.jpg/revision/latest/scale-to-width-down/310?cb=20141230020035",
        preview:true
       },
       {
        spotId: 7,
        url:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/FirstEnergy_Stadium_panorama_2016.jpg/220px-FirstEnergy_Stadium_panorama_2016.jpg",
        preview:true
       },
       {
        spotId: 8,
        url:"https://static.clubs.nfl.com/image/upload/f_auto/lions/fmr2emhlhoc98zdavot4",
        preview:true
       },
       {
        spotId: 9,
        url:"https://blog.ticketmaster.com/wp-content/uploads/step-inside-gillette-stadium.png",
        preview:true
       },
       {
        spotId: 10,
        url:"https://assets.simpleviewinc.com/simpleview/image/upload/c_fit,w_1440,h_900/crm/miamifl/Dolphin_Raiders_Nov19_2023_Hard_Rock_Stadium_1440x900_571343FD-F4DC-51B7-A69DB59865AC37AF-57133915b150615_571351b9-9611-5b1b-721674ef80691e2d.jpg",
        preview:true
       },
       {
        spotId: 11,
        url:"https://www.pgh-sea.com/base/image/facilities/HF_opening_day_R.jpg",
        preview:true
       },
       {
        spotId: 12,
        url:"https://www.stadiumsofprofootball.com/wp-content/uploads/2016/07/lamb23950-1.jpg",
        preview:true
       },
       {
        spotId: 13,
        url:"https://www.hntb.com/wp-content/uploads/2019/10/LS-03_3511A1-565x400-1.jpg",
        preview:true
       },
       {
        spotId: 14,
        url:"https://static2.gensler.com/uploads/hero_element/5232/thumb_desktop/thumbs/project_lincoln-financial-field_01_1024x576_1417652319_1024x576.jpg",
        preview:true
       },
       {
        spotId: 15,
        url:"https://www.discoverlosangeles.com/sites/default/files/images/2023-01/LA%20Memorial%20Coliseum%20Official%20Photo%202023.jpeg",
        preview:true
       },
       {
        spotId: 16,
        url:"https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_400,q_75,w_720/v1/crm/demo/DMS_image_3168_cf71eead-5056-854c-b63aa499b5a913fc.jpg",
        preview:true
       },
       {
        spotId: 17,
        url:"https://media.wusa9.com/assets/WUSA/images/c4a201b2-f2f7-4450-bd95-a74b10fe2bc3/20241008T150455/c4a201b2-f2f7-4450-bd95-a74b10fe2bc3_1140x641.jpg",
        preview:true
       },
       {
        spotId: 18,
        url:"https://www.musco.com/wp-content/uploads/2019/03/superdome-1024x512.jpg",
        preview:true
       },
      //  {
      //   spotId: 19,
      //   url:"",
      //   preview:true
      //  },
      //  {
      //   spotId: 20,
      //   url:"",
      //   preview:true
      //  },
      //  {
      //   spotId: 21,
      //   url:"",
      //   preview:true
      //  },
      //  {
      //   spotId: 22,
      //   url:"",
      //   preview:true
      //  },
      //  {
      //   spotId: 23,
      //   url:"",
      //   preview:true
      //  },
      //  {
      //   spotId: 24,
      //   url:"",
      //   preview:true
      //  },
      //  {
      //   spotId: 25,
      //   url:"",
      //   preview:true
      //  },
      //  {
      //   spotId: 26,
      //   url:"",
      //   preview:true
      //  },
      //  {
      //   spotId: 27,
      //   url:"",
      //   preview:true
      //  },
      //  {
      //   spotId: 28,
      //   url:"",
      //   preview:true
      //  },
      //  {
      //   spotId: 29,
      //   url:"",
      //   preview:true
      //  },
      //  {
      //   spotId: 30,
      //   url:"",
      //   preview:true
      //  },
      //  {
      //   spotId: 31,
      //   url:"",
      //   preview:true
      //  },
      //  {
      //   spotId: 32,
      //   url:"",
      //   preview:true
      //  },



























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
      spotId: { [Op.in]: [1,18] }
    }, {});

  }
};
