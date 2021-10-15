var express = require('express');
var mongoose = require('mongoose');
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

mongoose.connect("mongodb+srv://SebastianRuiz:79053791@cluster0.ybuem.mongodb.net/Cluster0?retryWrites=true&w=majority"
).then(()=>{
    console.log("Estamos conectados");
});

const productsRoutes = require("./routes/producto");

app.use("/api/products", productsRoutes)


module.exports = app;