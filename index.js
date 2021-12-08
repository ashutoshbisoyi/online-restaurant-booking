const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const restroRoute = require("./routes/restro");

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


app.listen(PORT, () => {
    console.log(`Server is up and running on port: ${PORT}`);
});