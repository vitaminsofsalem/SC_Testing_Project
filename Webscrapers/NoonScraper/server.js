const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

const db =  'mongodb+srv://sohila2001:Sohila2001@cluster0.wvl0d.mongodb.net/Iphone?retryWrites=true&w=majority';

//connect to mongo
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected..'))
  .catch(err => console.log(err));

app.listen(3000, async (req, res) => {
  console.log(`Server listening on Port ${3000}`);


});