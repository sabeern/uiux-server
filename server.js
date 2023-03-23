const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
mongoose.connect(process.env.DBCONNECT);
const cors = require("cors");

app.use(cors());
const productRoutes = require("./routes/productRoutes");
const brandRoutes = require("./routes/brandRoutes");
app.use("/products", productRoutes);
app.use("/brand", brandRoutes);
app.listen(3000, () => console.log("server connected"));
