const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  productCode: {
    type: String,
    required: true,
    unique: true,
  },
  productName: {
    type: String,
    required: true,
  },
  productRating: String,
  totalReviews: Number,
  productPrice: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model(process.env.PRODUCTCOLLECTION, productSchema);
