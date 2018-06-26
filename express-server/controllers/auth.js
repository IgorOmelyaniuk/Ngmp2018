import jwt from 'jsonwebtoken';
import user from '../config/user.json';
import config from '../../config/config.json';

export const signin = (req, res) => {
  const { username, email } = req.body;

  if (username === user.username && email === user.email) {
    let payload = { 'sub': user.username };
    let token = jwt.sign(payload, config.token, { expiresIn: 1000 });
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

export const useLocalStrategy = (req, res) => {
  res.send('Local Strategy');
};

export const useFacebookStrategy = (req, res) => {
  passport.authenticate('facebook'),
  (req, res) => res.send('Facebook Strategy');
}

export const useTwitterStrategy = (req, res) => {
  passport.authenticate('twitter'),
  (req, res) => res.send('Twitter Strategy');
}

export const useGoogleStrategy = (req, res) => {
  passport.authenticate('google'),
  (req, res) => res.send('Google Strategy');
}
