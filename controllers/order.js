const orderSchema = require("../models/order");

const addOrder = async (req, res) => {
    const orderUpdate = await orderSchema.findOne({ "orderID": req.body.orderID });
    if (orderUpdate)
        return res.status(404).json({ status: false });
    const order = new orderSchema(req.body);
    try {
        const savedorder = await order.save();
        res.status(201).json({
            status: true,
            orderID: savedorder.orderID,
            buyerName: savedorder.buyerName,
            buyerEmail: savedorder.buyerEmail
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: false,
            // message: err
        });
    }
};

const updateOrder = async (req, res) => {
    const orderID = req.params.orderID;
    const data = req.body;

    const orderUpdate = await orderSchema.findOne({ "orderID": orderID });
    if (!orderUpdate)
        return res.status(404).json({ status: false });

    await orderSchema.findByIdAndUpdate(orderUpdate._id, { ...data }, { new: true });
    res.status(200).json({ status: true });
};

const viewOrderID = async (req, res) => {
    const orderID = req.params.orderID;

    const orderUpdate = await orderSchema.findOne({ "orderID": orderID });
    if (!orderUpdate)
        return res.status(404).json({ status: false });
    else
        res.status(200).json(orderUpdate);
};

const viewOrder = async (req, res) => {
    const orderUpdate = await orderSchema.find();
    if (!orderUpdate)
        return res.status(404).json({ status: false });
    else
        res.status(200).json(orderUpdate);
};

// const deleteOrderID = async (req, res) => {
//     const orderID = req.params.orderID;

//     const orderUpdate = await orderSchema.findOne({ "orderID": orderID });
//     if (!orderUpdate)
//         return res.status(404).json({ status: false });
    
//     await orderUpdate.findByIdAndRemove(orderUpdate._id);
//     res.status(200).json({ status: true });
// };

module.exports = {
    addOrder,
    updateOrder,
    viewOrderID,
    viewOrder,
    // deleteOrderID
}