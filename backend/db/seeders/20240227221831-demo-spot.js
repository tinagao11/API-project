'use strict';
const {Spots}=require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
};


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await Spots.bulkCreate([
    {
      ownerId: 1,
      address: '1234 Main St',
      city: 'town1',
      state: 'Anystate',
      country: 'Anycountry',
      lat: 40.7128,
      lng: -74.0060,
      name: 'Central Spot',
      description: 'A cozy spot in the center of the city.',
      price: 100.00,
    },
    {
      ownerId: 2,
      address: '5678 Second St',
      city: 'town2',
      state: 'Otherstate',
      country: 'Othercountry',
      lat: 34.0522,
      lng: -118.2437,
      name: 'Beachside Spot',
      description: 'Beautiful views of the ocean.',
      price: 200.00,

    },
    {
      ownerId: 3,
      address: '91011 Third Ave',
      city: 'town3',
      state: 'Smallstate',
      country: 'Smallcountry',
      lat: 37.7749,
      lng: -122.4194,
      name: 'Urban Spot',
      description: 'Experience the heart of the city.',
      price: 150.00,

    }
   ])
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
      city: { [Op.in]: ['town1', 'town2', 'town3'] }
    }, {});
  }
};
