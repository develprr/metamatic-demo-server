const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const Database = require('./lib/Database');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

app.get('/api/cars', function (req, res) {
  const id = req.params.id;
  res.json(Database.getCars());
});

app.get('/api/cars/:id', function (req, res) {
  const id = req.params.id;
  res.json(Database.getCarById(id));
});

module.exports = app;
app.listen(PORT);
