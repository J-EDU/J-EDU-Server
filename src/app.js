const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const fileUpload = require('express-fileupload');

require('dotenv').config();

const middlewares = require('./middlewares');
const routes = require('./Routes');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(fileUpload({
  useTempFiles: true,
  limits: { fileSize: 50 * 2024 * 1024 },
}));

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
