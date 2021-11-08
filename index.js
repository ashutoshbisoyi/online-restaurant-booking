const express = require('express');
const app = express();
const shortid = require('shortid');
const cors = require('cors');
const dotenv = require('dotenv');
const Razorpay = require('razorpay');

app.use(cors());
dotenv.config();
app.use(express.json());

const razorpay = new Razorpay({
    key_id: process.env.KEY_ID,
    key_secret: process.env.KEY_SECRET
});

const PORT = process.env.PORT || 3000;

app.post('/razorpay', async (req, res) => {
    const payment_capture = 1
    const amount = 499
    const currency = 'INR'

    const options = {
        amount: amount * 100,
        currency,
        receipt: shortid.generate(),
        payment_capture
    }

    try {
        const response = await razorpay.orders.create(options)
        console.log(response)
        res.json({
            id: response.id,
            currency: response.currency,
            amount: response.amount
        })
    } catch (error) {
        console.log(error)
    }
})

app.listen(PORT, () => {
    console.log(`Server is up and running on port: ${PORT}`);
});