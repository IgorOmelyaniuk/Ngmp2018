import mongoose from '../config/mongoose';

const Schema = mongoose.Schema;

const CitySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  country: {
    type: String,
  },
  captial: {
    type: Boolean,
    default: false,
  },
  location: {
    lat: {
      type: Number,
      default: 0,
    },
    long: {
      type: Number,
      default: 0
    }
  },
  lastModifiedDate: Date,
});

CitySchema.pre('save', function(next) {
  const date = new Date();
  this.lastModifiedDate = date;
  next();
});

export default mongoose.model('City', CitySchema, 'cities');
