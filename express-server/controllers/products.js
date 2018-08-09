import Product from '../models/product';

export const getProducts = (req, res) => {
  Product.find({}, (err, products) => {
    if (err) res.send(err);

    res.send(products);
  });
};

export const createProduct = (req, res) => {
  const { name, count, price } = req.body;
  const newProduct = new Product({
    name,
    count,
    price,
    reviews: '',
  });

  Product.create(newProduct, (err, product) => {
    if (err) res.send(err);

    res.send(product);
  });
};

export const getProductById = (req, res) => {
  Product.findById(req.params.id, (err, product) => {
    if (err) res.send(err);

    res.send(product);
  });
};

export const getReviewsForProduct = (req, res) => {
  Product.findById(req.params.id, (err, product) => {
    if (err) res.send(err);

    res.send(product.reviews);
  });
};

export const deleteProduct = (req, res) => {
  Product.findByIdAndRemove(req.params.id, (err, product) => {
    if (err) res.send(err);

    res.send(product);
  });
};
