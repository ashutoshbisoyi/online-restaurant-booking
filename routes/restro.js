const express = require('express');
const { addRestro, viewRestro, updateRestro, deleteRestro } = require('../controllers/restro');

const app = express.Router();

app.post("/restaurant", addRestro);
app.get("/restaurant", viewRestro);
app.put("/restaurant/:id", updateRestro);
app.delete("/restaurant/:id", deleteRestro);

module.exports = app;