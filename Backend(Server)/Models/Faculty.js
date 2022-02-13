var mongoose = require('mongoose');
var FacultySchema = new mongoose.Schema({
    
    FirstName: {
        type: String,
        required: true
    },
    SecondName: {
        type:String,
        required: true
    },
    Email:{
    	type:String,
      required: true
    },
    Password:{
      type:String,
      required: true  
    },
    Course:{
      Type:mongoose.Types.ObjectId,
      ref:"Course"
    }
});

module.exports = mongoose.model('Faculty', FacultySchema);