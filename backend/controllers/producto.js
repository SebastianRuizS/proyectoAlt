const Producto = require('../models/producto');

exports.signProduct = (req, res) => {
    const productSigned = Producto({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        stock: req.body.stock,
    });

    productSigned.save().then((createdProducto) => {
        console.log(createdProducto);
        res.status(201).json("Creado satisfactoriamente");
    });
};

exports.getAllProducts = (req, res) => {
    Producto.find().then((postResult) => {
        res.status(200).json(postResult);
    });
};

exports.searchByName = (req, res) => {
    Producto.findOne({ name: req.body.name }).then((postResult) => {
        res.status(200).json(postResult);
    });
};

exports.updateProduct = (req, res) => {
    Producto.updateOne()
};