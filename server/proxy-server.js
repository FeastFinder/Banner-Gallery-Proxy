/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const newRelic = require('newrelic');
const express = require('express');
const axios = require('axios');
// const bodyParser = require('body-parser');

const app = express();

const port = 3000;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use('/:id/', express.static('public'));

app.get('/api/:listing/photos', (req, res) => {
  const { listing } = req.params;
  axios.get(`http://localhost:3001/api/${listing}/photos`)
    .then((data) => {
      res.status(200).send(data.data);
    })
    .catch((error) => {
      console.log(error);
      res.send(error);
    });
});

app.listen(port, () => { console.log(`Proxy server listening on port ${port}`); });
