import mongoose from '../config/mongoose';

const Schema = mongoose.Schema;

const CitySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  county: {
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
});

export default mongoose.model('City', CitySchema, 'cities');
