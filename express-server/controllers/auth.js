import jwt from 'jsonwebtoken';
import user from '../config/user.json';

export const signin = (req, res) => {
  const { username, email } = req.body;

  if (username === user.username || email === user.email) {
    let payload = { 'sub': user.username };
    let token = jwt.sign(payload, 'secret', { expiresIn: 1000 });
    res.status(200).json({
      code: 200,
      message: 'OK',
      data: {
        user: {
          email: user.email,
          username: user.username
        }
      },
      token
    });
  } else {
    res.status(404).send({
      code: 404,
      message: 'Not Found',
      data: 'Username or email is wrong'
    });
  }
}
