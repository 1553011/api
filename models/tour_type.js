'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tour_Type = sequelize.define('Tour_Type', {
    imageUrl: DataTypes.STRING,
    country: DataTypes.STRING,
    province: DataTypes.STRING
  }, {});
  Tour_Type.associate = function(models) {
    // associations can be defined here
  };
  return Tour_Type;
};