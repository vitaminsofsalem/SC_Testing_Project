import mongoose from "mongoose";

const iphoneSchema = new mongoose.Schema({
  title: String,

  price: String,

  link: String,
});

module.exports = mongoose.model("iphone", iphoneSchema);
