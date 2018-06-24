import stringParser from '../helpers/stringParser';

const cookieParser = () => (req, res, next) => {
  const { cookie } = req.headers;

  if (!cookie) return next();

  req.parsedCookie = stringParser(cookie, ';');
  return next();
}

export default cookieParser;
