import mongoose from '../config/mongoose';
import products from '../data/products';

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  count: {
    type: Number,
  },
  price: {
    type: Number,
    required: true,
  },
  reviews: {
    type: String,
  },
  lastModifiedDate: Date,
});

ProductSchema.pre('save', function(next) {
  const date = new Date();
  this.lastModifiedDate = date;
  next();
});

const Product = mongoose.model('Product', ProductSchema, 'products');

// Import mock data in collection
// Product.insertMany(products)
//   .then(data => console.log(data, 'Products are imported from mock data'))
//   .catch(err => console.log(err.message));

export default Product;
