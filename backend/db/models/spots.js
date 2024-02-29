'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Spots extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Spots.belongsTo(
        models.User, {
          foreignKey: 'ownerId'
        }
      );
      Spots.hasMany(
        models.SpotImages, {
          foreignKey:'spotId',
          onDelete: 'CASCADE',
          hooks: true
        }
      );

      Spots.hasMany(
        models.Bookings, {
          foreignKey:'spotId',
          onDelete: 'CASCADE',
          hooks: true
        }
      );

      Spots.hasMany(
        models.Reviews, {
        foreignKey: 'spotId',
        onDelete: 'CASCADE',
        hooks:true
      })


    }
  }
  Spots.init({
    ownerId: {
      type: DataTypes.INTEGER,
  },
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    lat: DataTypes.NUMERIC,
    lng: DataTypes.NUMERIC,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.NUMERIC
  }, {
    sequelize,
    modelName: 'Spots',
  });
  return Spots;
};
