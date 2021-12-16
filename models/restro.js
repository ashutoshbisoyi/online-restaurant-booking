const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    base64: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    }
});

const restroSchema = new mongoose.Schema({
    restaurantID: {
        type: String,
        required: true,
    },
    restaurantName: {
        type: String,
        required: true,
        min: 3
    },
    location: {
        type: String,
        required: true,
        min: 3
    },
    openTime: {
        type: String,
        required: true,
        min: 3
    },
    closeTime: {
        type: String,
        required: true,
        min: 3
    },
    foodCategory: {
        type: String,
        required: true,
        min: 3
    },
    availability: {
        type: Boolean,
        required: true
    },
    images: [imageSchema],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('restroSchema', restroSchema);