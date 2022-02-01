const Insta = require("instamojo-nodejs");
const dotenv = require('dotenv');

dotenv.config();

const BASE_URL = process.env.URL;
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
    data.phone = mobile;

    Insta.createPayment(data, function (error, response) {
        if (error) {
            return res.status(404).json({ status: false });
        } else {
            var responseData = JSON.parse(response);
            console.log(responseData);
            // res.send("Please check your email to make payment")
            res.redirect(responseData.payment_request.longurl);

        }
    });
};

const paymentSuccess = async (req, res) => {
    Insta.getPaymentDetails(
        req.query.payment_request_id,
        req.query.payment_id,
        function (error, response) {
            if (error) {
                return res.status(404).json({ status: false });
            } else {
                return res.status(200)
                    .json(response);
                // var temp = JSON.stringify(response);
                // var responseData = JSON.parse(temp);
                // console.log(responseData.payment_request);
            }
        });
};

module.exports = {
    paymentInit,
    paymentSuccess
}