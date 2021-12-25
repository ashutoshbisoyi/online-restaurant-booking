const mongoose = require('mongoose');

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

module.exports = mongoose.model('items', itemSchema);