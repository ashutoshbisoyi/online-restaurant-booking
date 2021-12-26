const mongoose = require('mongoose');
const { imageSchema } = require("./restro");

const itemSchema = new mongoose.Schema({
    categoryID: {
        type: String,
        required: true,
        min: 3
    },
    itemID: {
        type: String,
        required: true,
        unique: true,
        min: 3
    },
    itemName: {
        type: String,
        required: true,
        min: 3
    },
    itemPrice: {
        type: Number,
        required: true
    },
    veg: {
        type: Boolean,
        required: true
    },
    nonveg: {
        type: Boolean,
        required: true
    },
    images: [imageSchema],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('items', itemSchema);