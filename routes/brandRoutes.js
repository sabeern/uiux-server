const express = require("express");
const router = express.Router();
const brandController = require("../controllers/brandController");

router.get("/allBrands", brandController.fetchBrand);

module.exports = router;
