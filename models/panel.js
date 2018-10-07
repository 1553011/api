'use strict';
module.exports = (sequelize, DataTypes) => {
  const Panel = sequelize.define('Panel', {
    imageUrl: DataTypes.STRING
  }, {});
  Panel.associate = function(models) {
    // associations can be defined here
  };
  return Panel;
};