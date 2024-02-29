'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ReviewImages extends Model {

    static associate(models) {
      ReviewImages.belongsTo(
        models.Spots, {
          foreignKey: 'reviewId'
        }
      );
    }
  }
  ReviewImages.init({
    reviewId: DataTypes.INTEGER,
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ReviewImages',
  });
  return ReviewImages;
};
