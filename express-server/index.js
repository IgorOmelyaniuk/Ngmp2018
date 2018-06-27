import app from './app';
import db from './config/db';

const port = process.env.PORT || 8080;

db.sequelize.sync()
  .then(() => {
    app.listen(port, () => console.log(`App listening on port ${port}`));
  })
  .catch(error => console.error(error));
