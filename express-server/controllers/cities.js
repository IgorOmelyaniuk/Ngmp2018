import City from '../models/city';

export const getRandomCity = (req, res) => {
  City.find({}, (err, cities) => {
    if (err) res.send(err);
    const random = Math.round(Math.random() * (cities.length - 1));
    res.send(cities[random]);
  });
}
