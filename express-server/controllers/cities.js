import City from '../models/city';

export const getRandomCity = (req, res) => {
  City.find({}, (err, cities) => {
    if (err) res.send(err);
    const random = Math.round(Math.random() * (cities.length - 1));
    res.send(cities[random]);
  });
}

export const getCities = (req, res) => {
  City.find({}, (err, cities) => {
    if (err) res.send(err);

    res.send(cities);
  });
};

export const createCity = (req, res) => {
  const { name, country, capital, location } = req.body;

  const newCity = new City({
    name,
    country,
    capital,
    location,
  });

  City.create(newCity, (err, city) => {
    if (err) res.send(err);

    res.send(city);
  });
};

export const updateCity = (req, res) => {
  City.findByIdAndRemove(
    req.params.id,
    req.body,
    { new: true },
    (err, city) => {
      if (err) res.send(err);

      res.send(city);
    }
  );
};

export const deleteCity = (req, res) => {
  City.findByIdAndRemove(req.params.id, (err, city) => {
    if (err) res.send(err);

    res.send(city);
  });
};

