const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const adminLoginRoute = require("./routes/adminLogin");
const restroRoute = require("./routes/restro");
const categoryRoute = require("./routes/category");
const itemRoute = require("./routes/item");
const paymentRoute = require("./routes/payment-gateway");

const app = express();
const PORT = process.env.PORT || 3000;
dotenv.config();

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log(`MongoDB connection established`);
});

app.use(cors());
app.use(express.json());
app.use("/api", restroRoute);
app.use("/api/restaurant", categoryRoute);
app.use("/api/admin", adminLoginRoute);
app.use("/api/restaurant/category", itemRoute);
app.use("/api/eatit/payment", paymentRoute);

app.listen(PORT, () => {
    console.log(`Server is up and running on port: ${PORT}`);
});