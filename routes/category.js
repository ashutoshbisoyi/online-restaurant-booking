const express = require('express');
const { addCategory, viewCategory, viewCategoryByID, viewCategoryID, updateCategoryByID, deleteCategoryByID } = require('../controllers/category');

const app = express.Router();

app.post("/category/:restaurantID", addCategory);
app.get("/category/view", viewCategory);
app.get("/category/:restaurantID", viewCategoryByID);
app.get("/category/view/:categoryID", viewCategoryID);
app.put("/category/view/:categoryID", updateCategoryByID);
app.delete("/category/view/:categoryID", deleteCategoryByID);

module.exports = app;