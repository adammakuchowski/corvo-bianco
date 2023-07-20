import mongoose from 'mongoose'

const OrderSchema = new mongoose.Schema({

})

const OrderModel = mongoose.model('OrderModel', OrderSchema);

module.exports = OrderModel
