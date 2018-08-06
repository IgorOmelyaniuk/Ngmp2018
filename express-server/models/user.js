import mongoose from '../config/mongoose';
import users from '../data/users';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    validate: {
      validator(value) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(val);
      },
      message: '{VALUE} is not a valid email'
    }
  },
  lastModifiedDate: Date,
});

UserSchema.pre('save', function(next) {
  const date = new Date();
  this.lastModifiedDate = date;
  next();
});

const User = mongoose.model('User', UserSchema, 'users');

// Import mock data in collection
// User.insertMany(users)
//   .then(data => console.log(data, 'Users are imported from mock data'))
//   .catch(err => console.log(err.message));

export default User;
