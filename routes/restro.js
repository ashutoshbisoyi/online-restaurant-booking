const express = require('express');
const { addRestro,viewRestro } = require('../controllers/restro');

const app = express.Router();

app.post("/restaurant", addRestro);
app.get("/restaurant", viewRestro);

module.exports = app;