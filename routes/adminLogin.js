const express = require('express');
const { registerAdmin, loginAdmin } = require('../controllers/adminLogin');
const app = express.Router();

app.post("/register", registerAdmin);
app.get("/login", loginAdmin);

module.exports = app;