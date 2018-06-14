import express from 'express';
import { cookieParser, queryParser } from './middlewares';
import { products, users, auth } from './routes';

export default express()
  .use(cookieParser())
  .use(queryParser())
  .use(express.json())
  .use('/api/products', products)
  .use('/api/users', users)
  .use('/api/auth', auth);
