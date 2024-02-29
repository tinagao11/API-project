'use strict';

/** @type {import('sequelize-cli').Migration} */

const { ReviewImages } = require('../models')
let options = { tableName: 'ReviewImages'}
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {
    await ReviewImages.bulkCreate([
      {
        reviewId:1,
        url:'https://example.com/reviewimage1.jpg'

      },
      {
        reviewId:2,
        url:'https://example.com/reviewimage2.jpg'
      },
      {
        reviewId:3,
        url:'https://example.com/reviewimage3.jpg'
      }
    ], options, { validate: true})
  },

  async down (queryInterface, Sequelize) {
    const Op = Sequelize.Op
    return queryInterface.bulkDelete(options, {
      reviewId: { [Op.in]: [1,2,3]}
    }, {})
  }
};
