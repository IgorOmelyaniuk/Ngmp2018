'use strict';

const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define('Product', {
    name: Sequelize.STRING,
    count: Sequelize.STRING,
    price: Sequelize.STRING,
    reviews: Sequelize.STRING,
  }, {});

  return Product;
};