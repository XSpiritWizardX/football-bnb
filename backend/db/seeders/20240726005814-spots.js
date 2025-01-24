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
       ownerId: 1,
       address: '1 Arrowhead Dr',
       city: 'Kansas City',
       state: 'MO',
       zipcode: 64129,
       country: 'United States',
       lat: 39.048786,
       lng: -94.484566,
       name: 'Arrowhead Stadium',
       description: 'Home to the Kansas City Chiefs',
       price: 1000.00
      },
      {
        ownerId: 1,
        address: '1 AT&T Way',
        city: 'Arlington',
        state: 'TX',
        zipcode: 76011,
        country: 'United States',
        lat: 32.747841,
        lng: -97.093628,
        name: 'AT&T Stadium',
        description: 'Home to the Dallas Cowboys',
        price: 1000.00
       },
       {
        ownerId: 1,
        address: '800 S Mint St',
        city: 'Charlotte',
        state: 'NC',
        zipcode : 28202,
        country: 'United states',
        lat: 35.225845,
        lng: -80.853607,
        name: 'Bank of America Stadium',
        description: 'Home to the Carolina Panthers',
        price: 1000.00
       },
       {
        ownerId: 1,
        address: '1701 Bryant St',
        city: 'Denver',
        state: 'CO',
        country: 'United States',
        lat: 39.743890,
        lng: -105.020109,
        name: 'Sports Authority Field at Mile High',
        description: 'Home to the Denver Broncos',
        price: 1000.00
       },
       {
        ownerId: 1,
        address: '800 Occidental Ave S',
        city: 'Seattle',
        state: 'WA',
        country: 'United States',
        lat: 47.595152,
        lng: -122.331639,
        name: 'Century Link Field',
        description: 'Home to the Seattle Seahawks',
        price: 1000.00
       },
       {
        ownerId: 1,
        address: '1600 Ring Rd',
        city: 'Landover',
        state: 'MD',
        country: 'United states',
        lat: 38.9047,
        lng: -76.8587,
        name: 'Fedex Field',
        description: 'Home to the Washington Commanders',
        price: 1000.00
       },
       {
        ownerId: 1,
        address: '100 Alfred Lerner Way',
        city: 'Cleveland',
        state: 'OH',
        country: 'United States',
        lat: 41.506035,
        lng: -81.700058,
        name: 'First Energy Stadium',
        description: 'Home to the Cleveland Browns',
        price: 1000.00
       },
       {
        ownerId: 1,
        address: '2000 Brush St',
        city: 'Detroit',
        state: 'MI',
        country: 'United States',
        lat: 42.340115,
        lng: -83.046341,
        name: 'Ford Field',
        description: 'Home to the Detroit Lions',
        price: 1000.00
       },
       {
        ownerId: 1,
        address: '1 Patriot Pl ',
        city: 'Foxborough',
        state: 'MA',
        country: 'United States',
        lat: 42.0878,
        lng: -71.2587,
        name: 'Gillette Stadium',
        description: 'Home to the New England Patriots',
        price: 1000.00
       },
       {
        ownerId: 1,
        address: '347 Don Shula Dr',
        city: 'Miami Gardens',
        state: 'FL',
        country: 'United States',
        lat: 25.957960,
        lng: -80.239311,
        name: 'Hard Rock Stadium',
        description: 'Home to the Miami Dolphins',
        price: 1000.00
       },
       {
        ownerId: 1,
        address: '100 Art Rooney Ave',
        city: 'Pittsburg',
        state: 'PA',
        country: 'United States',
        lat: 40.446765,
        lng: -80.015760,
        name: 'Heinz Field',
        description: 'Home to the Pittsburg Steelers',
        price: 1000.00
       },
       {
        ownerId: 1,
        address: '1265 Lombardi Ave',
        city: 'Green Bay',
        state: 'WI',
        country: 'United States',
        lat: 44.501341,
        lng: -88.062208,
        name: 'Lambeau Field',
        description: 'Home to the Green Bay Packers',
        price: 1000.00
       },
       {
        ownerId: 1,
        address: '4900 Marie P DeBartolo Way',
        city: 'Santa Clara',
        state: 'CA',
        country: 'United States',
        lat: 37.4020,
        lng: -121.9689,
        name: 'Levis Stadium',
        description: 'Home to the San Francisco 49ers',
        price: 1000.00
       },
       {
        ownerId: 1,
        address: 'One Lincoln Financial Field Way',
        city: 'Philadelphia',
        state: 'PA',
        country: 'United States',
        lat: 39.900898,
        lng: -75.168098,
        name: 'Lincoln Financial Field',
        description: 'Home to the Philadelphia Eagles',
        price: 1000.00
       },
       {
        ownerId: 1,
        address: '3911 Figueroa Street',
        city: 'Los Angeles',
        state: 'CA',
        country: 'United States',
        lat: 34.014091,
        lng: -118.288422,
        name: 'Los Angeles Memorial Coliseum',
        description: 'Home to the Los Angeles Rams',
        price: 1000.00
       },
       {
        ownerId: 1,
        address: '500 S Capitol Ave',
        city: 'Indianapolis',
        state: 'IN',
        country: 'United States',
        lat: 39.7560,
        lng: -86.1583,
        name: 'Lucas Oil Stadium',
        description: 'Home to the Indianapolis Colts',
        price: 1000.00
       },
       {
        ownerId: 1,
        address: '1101 Russell St',
        city: 'Baltimore',
        state: 'MD',
        country: 'United States',
        lat: 39.278088,
        lng: -76.623322,
        name: 'M&T Bank Stadium',
        description: 'Home to the Baltimore Ravens',
        price: 1000.00
       },
       {
        ownerId: 1,
        address: '1500 Sugar Bowl Dr',
        city: 'New Orleans',
        state: 'LA',
        country: 'United States',
        lat: 29.951439,
        lng: -90.081970,
        name: 'Mercedes-Benz Superdome',
        description: 'Home to the New Orleans Saints',
        price: 1000.00
       },
       {
        ownerId: 1,
        address: '1 MetLife Stadium Drive',
        city: 'East Rutherford',
        state: 'NJ',
        country: 'United States',
        lat: 40.813778,
        lng: -74.074310,
        name: 'Met Life Stadium',
        description: 'Home to the New York Giants and the New York Jets',
        price: 1000.00
       },
       {
        ownerId: 1,
        address: '114 Russell St',
        city: 'Nashville',
        state: 'TN',
        country: 'United States',
        lat: 36.166479,
        lng: -86.771290,
        name: 'Nissan Stadium',
        description: 'Home to the Tennessee Titans',
        price: 1000.00
       },
       {
        ownerId: 1,
        address: '8825 Kirby Drive',
        city: 'Houston',
        state: 'TX',
        country: 'United States',
        lat: 29.684860,
        lng: -95.411667,
        name: 'NRG Stadium',
        description: 'Home to the Houston Texans',
        price: 1000.00
       },
       {
        ownerId: 1,
        address: '3333 Al Davis Way',
        city: 'Las Vegas',
        state: 'NV',
        country: 'United States',
        lat: 36.090794,
        lng: -115.183952,
        name: 'Allegiant Stadium',
        description: 'Home to the Las Vegas Raiders',
        price: 1000.00
       },
       {
        ownerId: 1,
        address: '1 Paul Brown Stadium',
        city: 'Cincinnati',
        state: 'OH',
        country: 'United States',
        lat: 39.096306,
        lng: -84.516846,
        name: 'Paul Brown Stadium',
        description: 'Home to the Cincinnati Bengals',
        price: 1000.00
       },
       {
        ownerId: 1,
        address: '4201 N Dale Mabry Hwy',
        city: 'Tampa',
        state: 'FL',
        country: 'United States',
        lat: 27.9722,
        lng: -82.5020,
        name: 'Raymond James Stadium',
        description: 'Home to the Tampa Bay Buccaneers',
        price: 1000.00
       },
       {
        ownerId: 1,
        address: '1410 Museum Campus Dr',
        city: 'Chicago',
        state: 'IL',
        country: 'United States',
        lat: 41.862366,
        lng: -87.617256,
        name: 'Soldier Field',
        description: 'Home to the Chicago Bears',
        price: 1000.00
       },
       {
        ownerId: 1,
        address: '18400 Avalon Blvd',
        city: 'Carson',
        state: 'CA',
        country: 'United States',
        lat: 33.864378,
        lng: -118.261143,
        name: 'Stubhub Center',
        description: 'Home to the LA Chargers',
        price: 1000.00
       },
       {
        ownerId: 1,
        address: '1 E1 TIAA Bank Field Dr',
        city: 'Jacksonville',
        state: 'FL',
        country: 'United States',
        lat: 30.323471,
        lng: -81.636528,
        name: 'EverBank Field',
        description: 'Home to the Jacksonville Jaguars',
        price: 1000.00
       },
       {
        ownerId: 1,
        address: '1 Cardinals Dr',
        city: 'Glendale',
        state: 'AZ',
        country: 'United States',
        lat: 33.528839,
        lng: -112.263901,
        name: 'University of Pheonix Stadium',
        description: 'Home to the Arizona Cardinals',
        price: 1000.00
       },
       {
        ownerId: 1,
        address: '401 Chicago Ave',
        city: 'Minneapolis',
        state: 'MN',
        country: 'United States',
        lat: 44.973774,
        lng: -93.258736,
        name: 'US Bank Stadium',
        description: 'Home to the Minnesota Vikings',
        price: 1000.00
       },
       {
        ownerId: 1,
        address: '1 Bills Dr',
        city: 'Orchard Park',
        state: 'NY',
        country: 'United States',
        lat: 42.773773,
        lng: -78.787460,
        name: 'Highmark Stadium',
        description: 'Home to the Buffalo Bills',
        price: 1000.00
       },
       {
        ownerId: 1,
        address: '1 AMB Drive NW',
        city: 'Atlanta',
        state: 'GA',
        country: 'United States',
        lat: 33.755489,
        lng: -84.401993,
        name: 'Mercedes-Benz Stadium',
        description: 'Home to the Atlanta Falcons',
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
