const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/producto");

router.post("/SignProducts", ProductController.signProduct);
router.get("/ManageProducts/AllProducts", ProductController.getAllProducts);
router.get("/ManageProducts/SearchByName", ProductController.searchByName);

module.exports = router;