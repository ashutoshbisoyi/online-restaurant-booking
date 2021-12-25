const express = require("express");
const { addItem, viewItems, viewItemByID, viewItemID, updateItemByID, deleteItemByID } = require("../controllers/item");

const app = express.Router();

app.post("/item/add/:categoryID", addItem);
app.get("/item/view", viewItems);
app.get("/item/:categoryID", viewItemByID);
app.get("/item/view/:itemID", viewItemID);
app.put("/item/view/:itemID", updateItemByID);
app.delete("/item/view/:itemID", deleteItemByID);

module.exports = app;