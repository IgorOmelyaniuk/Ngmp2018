export const getUsers = (req, res) => {
  res.send('Return all users');
}

export const login = (req, res) => {
  console.log(req.body)
  res.json({message: 'Hi'});
}
