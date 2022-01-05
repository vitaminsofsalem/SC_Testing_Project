const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const iphoneSchema = new Schema({
    price:{
        type: String,
        required: false
    },
    title:{
        type: String,
        required: false
    },
    link : { 
        type: String, 
        required: false
    },
   
});

module.exports = mongoose.model('iphone', iphoneSchema);