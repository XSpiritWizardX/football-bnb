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
        url:"https://www.knoxtntoday.com/wp-content/uploads/2024/11/6-view-of-field-from-end-zone-4.jpg",
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
       {
        spotId: 19,
        url:"https://dims.apnews.com/dims4/default/1464b50/2147483647/strip/false/crop/5472x3648+0+0/resize/1486x991!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F87%2F87%2F4a159a1925b8bf8a7385b7fa19af%2Fe3c3710511e643edb8eacb552f1b9512",
        preview:true
       },
       {
        spotId: 20,
        url:"https://tsutigers.com/images/2023/3/1/623b7932a187c.image.jpg",
        preview:true
       },
       {
        spotId: 21,
        url:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/c4/f9/24/view.jpg?w=900&h=500&s=1",
        preview:true
       },
       {
        spotId: 22,
        url:"https://www.arup.com/globalassets/images/projects/a/allegiant-stadium/allegiant-stadium-hero.jpg",
        preview:true
       },
       {
        spotId: 23,
        url:"https://cdn.vox-cdn.com/thumbor/cewvl7w0-8FqEQLQEbNrS7gJm8M=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23932071/1288669970.jpg",
        preview:true
       },
       {
        spotId: 24,
        url:"https://www.stadiumsofprofootball.com/wp-content/uploads/2016/07/ray23950.jpg",
        preview:true
       },
       {
        spotId: 25,
        url:"https://a.espncdn.com/photo/2008/0730/soldier_580.jpg",
        preview:true
       },
       {
        spotId: 26,
        url:"https://cdn.vox-cdn.com/thumbor/MYF9uewZybI_1DMxIMssZr4Li8Y=/0x0:4032x3024/1200x0/filters:focal(0x0:4032x3024):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/9099429/IMG_3848.JPG",
        preview:true
       },
       {
        spotId: 27,
        url:"https://www.sportsbusinessjournal.com/-/media/Images/Daily/2023/06/07/Olivia-DAILY-June-7/Jaguars-reno/Jaguars-stadium-renderings-3.ashx",
        preview:true
       },
       {
        spotId: 28,
        url:"https://www.sierraclub.org/sites/default/files/styles/amp_1200x900_4_3/public/sierra/articles/big/Fans%20attending%20an%20Arizona%20Cardinals%20game%20played%20under%20Ephesus%20LED%20Lighting.jpg.webp?itok=rOa5DVJE",
        preview:true
       },
       {
        spotId: 29,
        url:"https://www.usbankstadium.com/assets/img/Untitled-design-51-bd77e4a23a.png",
        preview:true
       },
       {
        spotId: 30,
        url:"https://static.clubs.nfl.com/image/upload/t_new_photo_album/bills/ns4swz69l4fa2ab4bb7l.jpg",
        preview:true
       },
       {
        spotId: 31,
        url:"https://media.licdn.com/dms/image/v2/C4E1BAQFq73NoMVNlkQ/company-background_10000/company-background_10000/0/1584452890553/mercedes_benz_stadium_cover?e=2147483647&v=beta&t=2skKOlVLDzmLjGdSwH5WcZTfjeZOelQ8b_V-_qxYSzQ",
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
      spotId: { [Op.in]: [1,18] }
    }, {});

  }
};
