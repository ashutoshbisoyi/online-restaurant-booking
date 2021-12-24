const restroSchema = require('../models/restro');

const addCategory = async (req, res) => {
    const restaurantID = req.params.restaurantID;
    const data = { category: req.body };

    const restroDetails = await restroSchema.findOne({ "restaurantID": restaurantID });
    if (!restroDetails)
        return res.status(404).json({ status: false });

    await restroSchema.findByIdAndUpdate(restroDetails._id, { ...data }, { new: true });
    res.status(200).json({ status: true });
};

const viewCatByRestroID = async (req, res) => {
    const restaurantID = req.params.restaurantID;

    const restroDetails = await restroSchema.findOne({ "restaurantID": restaurantID });
    if (!restroDetails)
        return res.status(404).json({ status: false });
    else
        res.status(200).json(restroDetails.category);
};
const deleteCategory = async (req, res) => {
    const restaurantID = req.params.restaurantID;
    const data = {category:[]};

    const restroDetails = await restroSchema.findOne({ "restaurantID": restaurantID });
    if (!restroDetails)
        return res.status(404).json({ status: false });

    await restroSchema.findByIdAndUpdate(restroDetails._id, { ...data }, { new: true });
    res.status(200).json({ status: true });
};

module.exports = {
    addCategory,
    viewCatByRestroID,
    deleteCategory
};