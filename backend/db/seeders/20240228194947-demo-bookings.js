'use strict';

/** @type {import('sequelize-cli').Migration} */

const {Bookings} = require('../models');

let options = { tableName: 'Bookings'};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {
    await Bookings.bulkCreate([
      {
        spotId: 1,
        userId: 1,
        startDate: '2024-01-01',
        endDate: '2024-01-10'
      },
      {
        spotId: 2,
        userId: 2,
        startDate: '2024-02-10',
        endDate: '2024-02-20'
      },
      {
        spotId: 3,
        userId: 3,
        startDate: '2023-11-02',
        endDate: '2023-12-10'
      }
    ],options, { validate: true})
  },

  async down (queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      spotId: { [Op.in]: [1,2,3]}
    }, {});
  }
};
