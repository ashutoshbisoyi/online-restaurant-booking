const orderSchema = require("../models/order");
const Insta = require("instamojo-nodejs");
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const handlebars = require('handlebars');
const fs = require('fs');

dotenv.config();

// testing
const BASE_URL = process.env.TEST_URL; 
var path = __dirname + '\\..\\views\\' + '\index.html';

// production
// const path = __dirname + '/../views' + '/index.html';
// const BASE_URL = process.env.URL; 

const API_KEY = process.env.TEST_API_KEY;
const AUTH_KEY = process.env.TEST_AUTH_KEY;

var readHTMLFile = function (path, callback) {
    fs.readFile(path, { encoding: 'utf-8' }, function (err, html) {
        if (err) {
            callback(err);
            throw err;
        }
        else {
            callback(null, html);
        }
    });
};

let transporter = nodemailer.createTransport({
    host: 'smtp.zoho.in',
    port: 465,
    secure: true, //ssl
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

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
                // else console.log("Updated Data : ", docs);
            });
    }

    Insta.createPayment(data, function (error, response) {
        if (error) {
            return res.status(404).json({ status: false });
        } else {
            var responseData = JSON.parse(response);
            // console.log(responseData.payment_request);
            if (responseData.success === false)
                return res.status(404).json(responseData.message);
            // res.send("Please check your email to make payment")
            updatePayment(responseData);
            return res.status(200).json(responseData.payment_request.longurl)

        }
    });
};

const paymentSuccess = async (req, res) => {
    console.log(req.query);
    if (req.query.payment_status === 'Credit') {
        const reqID = req.query.payment_request_id;
        const orderUpdate = await orderSchema.findOne({ "id": reqID });
        if (!orderUpdate)
            return res.status(404).json({ status: false });
        else {
            const buyerEmail = orderUpdate.buyerEmail;
            const buyerName = orderUpdate.buyerName;
            const restroEmail = orderUpdate.restaurantMail;
            const totalPrice = orderUpdate.totalPrice;
            const buyerOrderID = orderUpdate.orderID;
            const buyerOrderItems = JSON.parse(JSON.stringify(orderUpdate.orderItem));
            const restaurantName = orderUpdate.restaurantName;
            const restaurantLocation = orderUpdate.restaurantLocation;
            const itemDetails = buyerOrderItems
                .map((value) => {
                    return value.itemName;
                })
                .join(', ');
            readHTMLFile(path, function (err, html) {
                var template = handlebars.compile(html);
                var replacements = {
                    buyerName: buyerName,
                    orderID: buyerOrderID,
                    totalPrice: totalPrice,
                    orderDetails: itemDetails,
                    restaurantName: restaurantName,
                    restaurantLocation: restaurantLocation
                };
                var htmlToSend = template(replacements);
                // sending email
                let mailOptions = {
                    from: '"Eat-IT Services" noreply@goeatit.com', // TODO: email sender
                    to: buyerEmail, // TODO: email receiver 'ashutoshbisoyi205@gmail.com',
                    bcc: restroEmail,
                    subject: 'Congratulations! Your Order is Placed',
                    html: htmlToSend
                };
                transporter.sendMail(mailOptions, (err, data) => {
                    if (err) {
                        console.log('Error occurs: ' + err);
                    }
                    else {
                        console.log(`Order Placed Successfully for ${buyerEmail}\nStatus:`
                            + data.response);
                    }
                });
            });
        }
        return res.status(200).redirect("https://eatit-services.netlify.app/payment-success");
    }
    else
        return res.status(200).redirect("https://eatit-services.netlify.app/payment-failed");
};

module.exports = {
    paymentInit,
    paymentSuccess
}