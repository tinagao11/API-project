'use strict';

/** @type {import('sequelize-cli').Migration} */
const { SpotImages } = require('../models');

let options = { tableName: 'SpotImages'};

if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
};

module.exports = {
  async up (queryInterface, Sequelize) {

    await SpotImages.bulkCreate([
      {
        spotId: 1,
        url: 'https://example.com/image1.jpg',
        preview: true
      },
      {
        spotId: 1,
        url: 'https://example.com/image2.jpg',
        preview: true
      },
      {
        spotId: 3,
        url: 'https://example.com/image3.jpg',
        preview: true
      }

    ], options, { validate: true})
  },

  async down (queryInterface, Sequelize) {

    const Op = Sequelize.Op
    return queryInterface.bulkDelete(options, {
      spotId: { [Op.in]: [1,2]}
    })
  }
};
