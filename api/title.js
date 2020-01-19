const consola = require('consola');
const express = require('express');
const axios = require('axios');

const app = express();
const jsonParser = express.json();

app.use(jsonParser);

// GET - /api/title
app.get('/', (req, res) => {
  // consola.ready({
  //   message: `req.body ${req.json()}`,
  //   badge: true,
  // });
  const title = 'and then there were none'; // this is just until data is coming from user input

  const replaceSpaces = (str) => str.split(' ').join('+');

  axios
    .get('https://tastedive.com/api/similar', {
      params: {
        q: replaceSpaces(title),
        type: 'books',
        info: 1,
        limit: 7,
        k: process.env.TASTE_DIVE_KEY,
      },
    })
    .then(({ data }) => {
      consola.ready({
        message: `data from axios server ${JSON.stringify(data)}`,
        badge: true,
      });
      res.json(data);
    })
    .catch((error) => {
      res.status(400).json(error);
      consola.error({
        message: `error from axios server ${error}`,
        badge: true,
      });
    });
});

module.exports = app;
