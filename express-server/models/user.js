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
  },
});

const User = mongoose.model('User', UserSchema, 'users');

// Import mock data in collection
// User.insertMany(users)
//   .then(data => console.log(data, 'Users are imported from mock data'))
//   .catch(err => console.log(err.message));

export default User;
