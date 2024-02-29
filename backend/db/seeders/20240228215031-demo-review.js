'use strict';

/** @type {import('sequelize-cli').Migration} */

const { Reviews } = require('../models')
let options = { tableName: 'Reviews'}
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {
    await Reviews.bulkCreate([
      {
        spotId:1,
        userId:1,
        review: 'would like to give zero star if I can',
        stars: 1
      },
      {
        spotId:2,
        userId:2,
        review: 'We had a great time here!',
        stars: 5
      },
      {
        spotId:3,
        userId:3,
        review: 'Great views, but no A/C.',
        stars: 4
      }
    ], options, { validate: true})
  },

  async down (queryInterface, Sequelize) {
    const Op = Sequelize.Op
    return queryInterface.bulkDelete(options, {
      spotId: { [Op.in]: [1,2,3]}
    }, {})
  }
};
