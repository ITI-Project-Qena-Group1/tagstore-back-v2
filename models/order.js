const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');

const orderSchema = mongoose.Schema({
    products: { type: [{String}], required: true, trim: true},
    orderUser: {type: mongoose.Schema.ObjectId, ref: 'User'},
    seller: {type: 'string'}
})

orderSchema.plugin(timestamps);

const orderModel = mongoose.model('Order', orderSchema);
module.exports = orderModel;