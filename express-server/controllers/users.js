import User from '../models/user';

export const getUsers = (req, res) => {
  User.find({}, (err, users) => {
    if (err) res.send(err);

    res.send(users);
  });
};

export const deleteUser = (req, res) => {
  User.findByIdAndRemove(req.params.id, (err, user) => {
    if (err) res.send(err);

    res.send(user);
  });
};
