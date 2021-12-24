const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true,
        min: 3
    },
    itemDesc: {
        type: String,
        required: true,
        min: 3
    },
    itemPrice: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports.itemSchema = itemSchema;