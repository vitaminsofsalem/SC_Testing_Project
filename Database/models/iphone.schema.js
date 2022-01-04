import mongoose from "mongoose";
const { Schema } = mongoose;

const iphoneSchema = Schema({
  title: String,

  price: String,

  link: String,
});

const iphone = mongoose.model("iphone", iphoneSchema);
export default iphone;
