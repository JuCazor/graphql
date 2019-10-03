'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: {
      type :DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: typeDataTypes.STRING,
      allowNull: false
    },
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};