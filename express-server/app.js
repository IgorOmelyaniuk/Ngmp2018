import express from 'express';
import { cookieParser, queryParser } from './middlewares';
import { products, users, cities } from './routes';

export default express()
  .use(cookieParser())
  .use(queryParser())
  .use('/api/products', products)
  .use('/api/users', users)
  .use('/api/cities', cities);
