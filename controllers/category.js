const categorySchema = require("../models/category");
const itemSchema = require("../models/item");
const uniqid = require('uniqid');

const addCategory = async (req, res) => {
    const params = req.params.restaurantID;

    const categoryCheck = await categorySchema
        .find({ "restaurantID": params });
    for (var i = 0; i < categoryCheck.length; i++) {
        if (categoryCheck[i].categoryName === req.body.categoryName) {
            return res.status(400).json("duplicate category name");
        }
    }
    const category = new categorySchema({
        restaurantID: params,
        categoryID: uniqid('EatIt-Cat-'),
        categoryName: req.body.categoryName
    });
    try {
        const savedCat = await category.save();
        res.status(201).json({
            categoryID: savedCat.categoryID,
            restaurantID: savedCat.restaurantID,
            status: true
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: false
        });
    }
};

// view all categories
const viewCategory = async (req, res) => {
    try {
        const category = await categorySchema.find();
        res.status(200).json(category);
    } catch (err) {
        return res.status(404).json({ status: false });
    }
};

// view all categories of the particular restro
const viewCategoryByID = async (req, res) => {
    try {
        const category = await categorySchema.find({ "restaurantID": req.params.restaurantID });
        res.status(200).json(category);
    } catch (err) {
        return res.status(404).json({ status: false });
    }
};

// view categoryByID
const viewCategoryID = async (req, res) => {
    const categoryID = req.params.categoryID;

    const category = await categorySchema.findOne({ "categoryID": categoryID });
    if (!category)
        return res.status(404).json({ status: false });
    else
        res.status(200).json(category);
};

// update categoryByID
const updateCategoryByID = async (req, res) => {
    const categoryID = req.params.categoryID;
    const data = req.body;

    const category = await categorySchema.findOne({ "categoryID": categoryID });
    if (!category)
        return res.status(404).json({ status: false });

    await categorySchema.findByIdAndUpdate(category._id, { ...data }, { new: true });
    res.status(200).json({ status: true });
};

// delete categoryByID
const deleteCategoryByID = async (req, res) => {
    const categoryID = req.params.categoryID;

    const category = await categorySchema.findOne({ "categoryID": categoryID });
    if (!category)
        return res.status(404).json({ status: false });

    await categorySchema.findByIdAndRemove(category._id);
    res.status(200).json({ status: true });
};

module.exports = {
    addCategory,
    viewCategory,
    viewCategoryByID,
    viewCategoryID,
    updateCategoryByID,
    deleteCategoryByID
}