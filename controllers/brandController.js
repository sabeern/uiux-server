const brandModel = require("../models/brandModel");

const fetchBrand = async (req, res) => {
  try {
    const brands = await brandModel.find({});
    res.status(200).send(brands);
  } catch (err) {
    res.status(500).send({ errMsg: "Internal server error" });
  }
};

module.exports = { fetchBrand };
