const loginSchema = require('../models/adminLogin');
const bcrypt = require('bcryptjs');

const registerAdmin = async (req, res) => {
    // check existing mail or new one
    const emailExist = await loginSchema.findOne({ email: req.body.email });
    if (emailExist) return res.status(400).json({
        status: false,
        message: 'email already exist'
    });

    // hashing password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const admin = new loginSchema({
        fullname: req.body.fullname,
        email: req.body.email,
        password: hashPassword
    });
    try {
        const savedAdmin = await admin.save();
        res.status(201).json({
            fullname: savedAdmin.fullname,
            email: savedAdmin.email,
            status: true
        });
    } catch (err) {
        res.status(400).json({
            status: false
        });
    }
};

const loginAdmin = async (req, res) => {
    // check mail
    const admin = await loginSchema.findOne({ email: req.body.email });
    if (!admin) return res.status(400).json({
        status: false
    });

    // match hashing password with input password
    const validPass = await bcrypt.compare(req.body.password, admin.password);
    if (!validPass) return res.status(400).json({
        status: false
    });

    res.status(200).json({
        status: true
    });
};

module.exports = {
    registerAdmin,
    loginAdmin
}