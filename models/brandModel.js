const mongoose = require("mongoose");

const brandSchema = mongoose.Schema({});

module.exports = mongoose.model(process.env.BRANDCOLLECTION, brandSchema);
