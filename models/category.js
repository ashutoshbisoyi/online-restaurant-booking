const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    restaurantID: {
        type: String,
        required: true
    },
    categoryID: {
        type: String,
        required: true,
        unique: true
    },
    categoryName: {
        type: String,
        required: true,
        min: 3
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('category', categorySchema);;