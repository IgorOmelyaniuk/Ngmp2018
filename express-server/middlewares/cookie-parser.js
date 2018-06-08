const cookieParser = () => (req, res, next) => {
  const { cookies } = req.headers;

  if (!cookies) return next();

  req.parsedCookies = cookies;

  return next();
}

export default cookieParser;
