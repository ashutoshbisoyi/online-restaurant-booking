const express = require("express");
const { paymentInit, paymentSuccess } = require("../controllers/payment-gateway");

const app = express.Router();

app.post("/initiate", paymentInit);
app.get("/status", paymentSuccess);

module.exports = app;