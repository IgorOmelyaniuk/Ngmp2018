import stringParser from '../helpers/stringParser';

const cookieParser = () => (req, res, next) => {
  const { cookie } = req.headers;

  if (!cookie) return next();

  req.parsedCookie = stringParser(cookie, ';');
  console.log(req.parsedCookie);
  return next();
}

export default cookieParser;
