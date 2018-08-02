import db from '../config/db';

const User = db.users;

export const getUsers = (req, res) => {
  User.findAll({})
    .then(data => res.send({
      message: 'Return all users',
      data, 
    }))
    .catch(error => res.send(`Error: ${error}`));
}
