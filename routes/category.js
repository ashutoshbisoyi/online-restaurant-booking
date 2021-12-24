const express = require('express');
const { addCategory, viewCatByRestroID, deleteCategory } = require('../controllers/category');

const app = express.Router();

app.post("/category/:restaurantID", addCategory);
app.get("/category/:restaurantID", viewCatByRestroID);
app.delete("/category/:restaurantID", deleteCategory);

module.exports = app;