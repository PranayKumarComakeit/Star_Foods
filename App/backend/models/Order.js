const mongoose = require('mongoose');
const OrderSchema=mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category' 
    },
    
})
const Order = mongoose.model('Order',OrderSchema);
module.exports = Order;