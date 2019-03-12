'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    weight: DataTypes.STRING,
    price: DataTypes.STRING
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};