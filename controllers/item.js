const itemSchema = require("../models/item");
const uniqid = require('uniqid');

const addItem = async (req, res) => {
    const params = req.params.categoryID;

    const itemCheck = await itemSchema
        .find({ "categoryID": params });
    for (var i = 0; i < itemCheck.length; i++) {
        if (itemCheck[i].itemName === req.body.itemName) {
            return res.status(400).json("duplicate item name");
        }
    }
    const item = new itemSchema({
        categoryID: params,
        itemID: uniqid('Item-Code-'),
        itemName: req.body.itemName,
        itemPrice: req.body.itemPrice,
        veg: req.body.veg,
        nonveg: req.body.nonveg,
        images: req.body.images
    });
    try {
        const savedItem = await item.save();
        res.status(201).json({
            categoryID: savedItem.categoryID,
            itemID: savedItem.itemID,
            status: true
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: false
        });
    }
};

// view all items
const viewItems = async (req, res) => {
    try {
        const item = await itemSchema.find();
        res.status(200).json(item);
    } catch (err) {
        return res.status(404).json({ status: false });
    }
};

// view all items of the particular category
const viewItemByID = async (req, res) => {
    try {
        const item = await itemSchema.find({ "categoryID": req.params.categoryID });
        res.status(200).json(item);
    } catch (err) {
        return res.status(404).json({ status: false });
    }
};

// view ItemByID
const viewItemID = async (req, res) => {
    const itemID = req.params.itemID;

    const item = await itemSchema.findOne({ "itemID": itemID });
    if (!item)
        return res.status(404).json({ status: false });
    else
        res.status(200).json(item);
};

// update itemByID
const updateItemByID = async (req, res) => {
    const itemID = req.params.itemID;
    const data = req.body;

    const item = await itemSchema.findOne({ "itemID": itemID });
    if (!item)
        return res.status(404).json({ status: false });

    await itemSchema.findByIdAndUpdate(item._id, { ...data }, { new: true });
    res.status(200).json({ status: true });
};

// delete itemByID
const deleteItemByID = async (req, res) => {
    const itemID = req.params.itemID;

    const item = await itemSchema.findOne({ "itemID": itemID });
    if (!item)
        return res.status(404).json({ status: false });

    await itemSchema.findByIdAndRemove(item._id);
    res.status(200).json({ status: true });
};

module.exports = {
    addItem,
    viewItems,
    viewItemByID,
    viewItemID,
    updateItemByID,
    deleteItemByID
}