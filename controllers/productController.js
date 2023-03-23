const productModel = require("../models/productModel");
const getFeaturedProducts = async (req, res) => {
  try {
    const products = await productModel
      .find({ productCategory: "Featured" })
      .limit(4);
    res.status(200).send(products);
  } catch (err) {
    res.status(500).send({ errMsg: "Internal server error" });
  }
};
const getSuggestedProducts = async (req, res) => {
  try {
    const ratedProducts = await productModel
      .find({ productCategory: "Top Rated" })
      .limit(3);
    const offerProducts = await productModel
      .find({ productCategory: "Special Offer" })
      .limit(3);
    const bestSellerProducts = await productModel
      .find({ productCategory: "BestSeller" })
      .limit(3);
    res.status(200).send({ ratedProducts, offerProducts, bestSellerProducts });
  } catch (err) {
    res.status(500).send({ errMsg: "Internal server error" });
  }
};

module.exports = {
  getFeaturedProducts,
  getSuggestedProducts,
};
