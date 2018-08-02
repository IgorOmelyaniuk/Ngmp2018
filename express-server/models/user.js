'use strict';

const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    email: Sequelize.STRING
  }, {});

  return User;
};