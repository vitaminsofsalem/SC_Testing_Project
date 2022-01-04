import mongoose from "mongoose";
const Schema = mongoose.Schema;

const IphoneSchema = new Schema({
  name: {
    type: String,
  },

  price: {
    type: String,
  },

  link: {
    type: String,
  },
});

module.exports = Iphone = mongoose.model("iphone", IphoneSchema);
