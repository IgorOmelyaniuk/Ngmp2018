const queryParser = () => (req, res, next) => {
  const { query } = req;

  if (!query) return next();

  req.parsedQuery = query;

  return next();
}

export default queryParser;
