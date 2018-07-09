import express from 'express';
import passport from 'passport';
import session from "express-session";
import { cookieParser, queryParser } from './middlewares';

import { products, users, auth, cities } from './routes';
import config from '../config/config.json';

export default express()
  .use(cookieParser())
  .use(queryParser())
  .use(express.json())
  .use(session(config.session))
  .use('/api/products', products)
  .use('/api/users', users)
  .use('/api/cities', cities)
  .use('/api/auth', auth);
