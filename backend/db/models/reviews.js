'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reviews extends Model {

    static associate(models) {
      Reviews.belongsTo(
        models.Spots, {
          foreignKey: 'spotId'
        }
      );

      Reviews.belongsTo(
        models.User, {
          foreignKey: 'userId'
        }
      )

    }
  }
  Reviews.init({
    spotId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    review: {
      type: DataTypes.STRING,
      allowNull:false
    },
    stars: {
      type:DataTypes.INTEGER,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Reviews',
  });
  return Reviews;
};
