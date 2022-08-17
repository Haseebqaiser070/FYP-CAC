var mongoose = require('mongoose');

var SOSchema = new mongoose.Schema({
    
    Number:{
      type:String,
      required: true,
      unique:true
    },
    GA:{
        type:String,
        required: true,     
    },
    SO:{
      type:String,
      required: true  
    }
});

module.exports = mongoose.model('SO', SOSchema);