import Product from '../models/product';

export const getProducts = (req, res) => {
  res.send('Return all products');
}

export const createProduct = (req, res) => {
  res.send('Create new product and return it');
}

export const getProductById = (req, res) => {
  res.send(`Get product by id = ${req.params.id}`);
}

export const getReviewsForProduct = (req, res) => {
  res.send(`Return all reviews for product by id = ${req.params.id}`);
}
