const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IphoneSchema = new Schema({
    price:{
        type: Int16Array,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    websiteName : { 
        type: String, 
        required: true
    },
   
});

module.exports = Iphone = mongoose.model('iphone', IphoneSchema);