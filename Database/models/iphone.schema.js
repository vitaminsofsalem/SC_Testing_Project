import mongoose from "mongoose";

const iphoneSchema = new mongoose.Schema({
  name: String,

  price: String,

  link: String,
});

module.exports = mongoose.model("iphone", iphoneSchema);
