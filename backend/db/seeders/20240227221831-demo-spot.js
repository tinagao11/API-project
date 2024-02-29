'use strict';
/** @type {import('sequelize-cli').Migration} */

const {Spots}=require('../models');

let options = { tableName: 'Spots'};

if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
};



module.exports = {
  async up (queryInterface, Sequelize) {

   await Spots.bulkCreate([
    {
      ownerId: 1,
      address: '1234 Main St',
      city: 'town1',
      state: 'Anystate',
      country: 'Anycountry',
      lat: 40,
      lng: -74,
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
      lat: 34,
      lng: -118,
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
      lat: 37,
      lng: -122,
      name: 'Urban Spot',
      description: 'Experience the heart of the city.',
      price: 150.00,

    },
    {
      ownerId: 1,
      address: '303 Crystal Lake',
      city: 'Reflection',
      state: 'Clarity',
      country: 'Serenity',
      lat: 60,
      lng: -120,
      name: 'Lakeview Retreat',
      description: 'Find clarity and peace by the serene Crystal Lake. Reflections that tell stories of the soul.',
      price: 500.99

    }
   ],options,{validate:true})
  },

  async down (queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      ownerId: { [Op.in]: [1,2,3] }
    }, {});
  }
};
