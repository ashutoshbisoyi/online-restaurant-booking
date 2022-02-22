const express = require('express');
const { addOrder, updateOrder, viewOrderID,deleteOrderID, viewOrder } = require('../controllers/order');

const app = express.Router();

app.post("/add", addOrder);
app.put("/update/:orderID", updateOrder);
app.get("/view/:orderID", viewOrderID);
app.get("/view", viewOrder);
app.delete("/delete/:orderID", deleteOrderID);

module.exports = app;