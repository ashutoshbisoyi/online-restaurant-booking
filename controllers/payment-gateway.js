const orderSchema = require("../models/order");
const Insta = require("instamojo-nodejs");
const dotenv = require('dotenv');

dotenv.config();

// const BASE_URL = process.env.TEST_URL; // testing
const BASE_URL = process.env.URL; // production
const API_KEY = process.env.TEST_API_KEY;
const AUTH_KEY = process.env.TEST_AUTH_KEY;

Insta.setKeys(API_KEY, AUTH_KEY);
Insta.isSandboxMode(true);

const paymentInit = async (req, res) => {

    const REDIRECT_URL = `${BASE_URL}/api/eatit/payment/status`;
    var name = req.body.name;
    var email = req.body.email;
    var amount = req.body.amount;
    var mobile = req.body.mobile;
    var orderID = req.body.orderID;

    var data = new Insta.PaymentData();

    data.setRedirectUrl(REDIRECT_URL);
    data.send_email = true;
    data.send_sms = true;
    data.purpose = "Eat-It Test"; // REQUIRED
    data.currency = 'INR';
    data.allow_repeated_payments = false;
    data.amount = amount;
    data.buyer_name = name;
    data.email = email; // REQUIRED
    data.phone = mobile; // REQUIRED

    async function updatePayment(responseData) {
        const orderUpdate = await orderSchema.findOne({ "orderID": orderID });
        if (!orderUpdate)
            return res.status(404).json({ status: false });
        orderSchema.findByIdAndUpdate(orderUpdate._id, {
            paymentDetails: [responseData.payment_request]
        },
            function (err, docs) {
                if (err) return res.status(404).json({ status: false });
                else console.log("Updated Data : ", docs);
            });
    }

    Insta.createPayment(data, function (error, response) {
        if (error) {
            return res.status(404).json({ status: false });
        } else {
            var responseData = JSON.parse(response);
            // console.log(responseData.payment_request);
            if (responseData.success === false) return res.status(404).json(responseData.message);
            // res.send("Please check your email to make payment")
            updatePayment(responseData);
            return res.status(200).json(responseData.payment_request.longurl)

        }
    });
};

const paymentSuccess = async (req, res) => {
    // Insta.getPaymentDetails(
    //     req.query.payment_request_id,
    //     req.query.payment_id,
    //     function (error, response) {
    //         if (error) {
    //             return res.status(404).json({ status: false });
    //         } else {
    //             return res.status(200)
    //                 .json(response);
    //             // var temp = JSON.stringify(response);
    //             // var responseData = JSON.parse(temp);
    //             // console.log(responseData.payment_request);
    //         }
    //     });
    if (req.query.payment_status === 'Credit')
        return res.status(200).redirect("https://eatit-services.netlify.app/payment-success");
    else
        return res.status(200).redirect("https://eatit-services.netlify.app/payment-failed");
};

module.exports = {
    paymentInit,
    paymentSuccess
}