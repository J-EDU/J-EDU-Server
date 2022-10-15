const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

require('dotenv').config();

const middlewares = require('./middlewares');
const routes = require('./Routes');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Home',
  });
});

app.use('/root/', routes);

function start(port) {
  app.listen(port, () => {
    /* eslint-disable no-console */
    console.log(`Listening: http://localhost:${port}`);
    /* eslint-enable no-console */
  });
}

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = {
  app,
  start,
};
