import db from '../config/db';

const Product = db.products;

export const getProducts = (req, res) => {
  Product.findAll({}).
    then(data => res.send({
      message: 'Return all products',
      data,
    }))
    .catch(error => res.send(`Error: ${error}`));
}

export const createProduct = (req, res) => {
  const { name, count, price, reviews } = req.body;

  Product.create({ name, count, price, reviews })
    .then(data => res.send({
      message: 'Create new product and return it',
      data,
    }))
    .catch(error => res.send(`Error: ${error}`));
}

export const getProductById = (req, res) => {
  Product.findById(req.params.id)
    .then(data => res.send({
      message: `Get product by id = ${req.params.id}`,
      data,
    }))
    .catch(error => res.send(`Error: ${error}`));
}

export const getReviewsForProduct = (req, res) => {
  Product.findById(req.params.id)
    .then(data => res.send({
      message: `Return all reviews for product by id = ${req.params.id}`,
      data: data.reviews
    }))
    .catch(error => `Error: ${error}`);
}
