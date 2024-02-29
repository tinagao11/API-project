'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bookings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Bookings.belongsTo(
        models.Spots, {
          foreignKey: 'spotId'
        }
      );

      Bookings.belongsTo(
        models.User, {
          foreignKey: 'userId'
        }
      )

    }
  }
  Bookings.init({
    spotId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    startDate: {
      type:DataTypes.DATE,
      allowNull: false
    },
    endDate: {
      type:DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Bookings',
  });
  return Bookings;
};
