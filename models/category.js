const mongoose = require('mongoose');
const itemSchema = require('./item');

const categorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: true,
        min: 3
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    items: [itemSchema.itemSchema]
});

module.exports.categorySchema = categorySchema;