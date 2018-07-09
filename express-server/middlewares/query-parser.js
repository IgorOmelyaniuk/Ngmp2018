import stringParser from '../helpers/stringParser';

const queryParser = () => (req, res, next) => {
  const url = req.url.slice(2);

  if (!url) return next();

  req.parsedQuery = stringParser(url, '&');
  return next();
}

export default queryParser;
