const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
    itemID: {
        type: String,
        required: true,
        unique: false
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
    quantity: {
        type: Number,
        required: true
    }
});

const orderSchema = new mongoose.Schema({
    orderID: {
        type: String,
        required: true,
        unique: true
    },
    restaurantID: {
        type: String,
        required: true
    },
    restaurantName: {
        type: String,
        required: true
    },
    orderItem: [orderItemSchema],
    buyerName: {
        type: String,
        required: true
    },
    buyerMobile: {
        type: Number,
        min: 10,
        required: true
    },
    buyerEmail: {
        type: String,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    paymentDetails: [Array],
    createdAt: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('orderSchema', orderSchema);