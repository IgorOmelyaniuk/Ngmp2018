import jwt from 'jsonwebtoken';
import config from '../../config/config.json';

const verifyToken = () => (req, res, next) => {
  let token = req.headers['x-access-token'];

  if (token) {
    jwt.verify(token, config.token, function(err, decoded) {
      if (err) {
        res.json({ success: false, message: 'Failed to authenticate token' });
      } else {
        next();
      }
    });
  } else {
    res.status(403).send({ success: false, message: 'No token provided' });
  }

}

export default verifyToken;