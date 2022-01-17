const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 8
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('adminLogin', loginSchema);;