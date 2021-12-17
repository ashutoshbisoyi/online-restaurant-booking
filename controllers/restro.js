const restroSchema = require('../models/restro');
const mongoose = require('mongoose');
const uniqid = require('uniqid');

const addRestro = async (req, res) => {
    const restro = new restroSchema({
        restaurantID: uniqid('EatIt-'),
        restaurantName: req.body.restaurantName,
        location: req.body.location,
        openTime: req.body.openTime,
        closeTime: req.body.closeTime,
        veg: req.body.veg,
        nonveg: req.body.nonveg,
        availability: req.body.availability,
        images: req.body.images
    });
    try {
        const savedRestro = await restro.save();
        res.status(201).json({
            restaurantID: savedRestro.restaurantID,
            restaurantName: savedRestro.restaurantName,
            status: true
        });
    } catch (err) {
        // console.log(err);
        res.status(400).json({
            status: false
        });
    }
};

const viewRestro = async (req, res) => {
    try {
        const restro = await restroSchema.find();
        res.status(200).json(restro);
    } catch (err) {
        return res.status(404).json({ status: false });
    }
};

const viewRestroID = async (req, res) => {
    const restaurantID = req.params.id;

    const restroDetails = await restroSchema.findOne({ "restaurantID": restaurantID });
    if (!restroDetails)
        return res.status(404).json({ status: false });
    else
        res.status(200).json(restroDetails);
};

const updateRestro = async (req, res) => {
    const restaurantID = req.params.id;
    const data = req.body;

    const restroDetails = await restroSchema.findOne({ "restaurantID": restaurantID });
    if (!restroDetails)
        return res.status(404).json({ status: false });

    await restroSchema.findByIdAndUpdate(restroDetails._id, { ...data }, { new: true });
    res.status(200).json({ status: true });
};

const deleteRestro = async (req, res) => {
    const restaurantID = req.params.id;

    const restroDetails = await restroSchema.findOne({ "restaurantID": restaurantID });
    if (!restroDetails)
        return res.status(404).json({ status: false });

    await restroSchema.findByIdAndRemove(restroDetails._id);
    res.status(200).json({ status: true });
};

module.exports = {
    addRestro,
    viewRestro,
    viewRestroID,
    updateRestro,
    deleteRestro
};