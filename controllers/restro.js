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
        foodCategory: req.body.foodCategory,
        availability: req.body.availability,
    });
    try {
        const savedRestro = await restro.save();
        res.status(201).json({
            restaurantID: savedRestro.restaurantID,
            restaurantName: savedRestro.restaurantName,
            status: true
        });
    } catch (err) {
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

module.exports = {
    addRestro,
    viewRestro
};