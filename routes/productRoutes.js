const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/featured", productController.getFeaturedProducts);
router.get("/suggestedProducts", productController.getSuggestedProducts);

module.exports = router;
