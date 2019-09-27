/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const newRelic = require('newrelic');
const express = require('express');
const axios = require('axios');

const app = express();

const port = 3000;

app.use('', express.static('public'));
app.use('/:id/', express.static('public'));

app.get('/api/:listing/photos', (req, res) => {
  const { listing } = req.params;
  axios.get(`http://13.57.229.60:3001/api/${listing}/photos`)
    .then((data) => {
      res.status(200).send(data.data);
    })
    .catch((error) => {
      console.log(error);
      res.send(error);
    });
});

app.listen(port, () => { console.log(`Proxy server listening on port ${port}`); });
