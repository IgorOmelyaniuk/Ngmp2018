import Sequelize from 'sequelize';
import userModel from '../models/user';
import productModel from '../models/product';
import dbConfig from './db.json';

const { username, password, database, host, dialect } = dbConfig.development;

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
});

const users = userModel(sequelize, Sequelize);
const products = productModel(sequelize, Sequelize);

const db = {
  sequelize,
  Sequelize,
  users,
  products,
};

export default db;
