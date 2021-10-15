const mongoose = require('mongoose');

const producto = mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    stock: {type: Boolean, required: true}
});

module.exports = mongoose.model("Producto", producto);