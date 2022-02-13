var mongoose = require('mongoose');
var CourseSchema = new mongoose.Schema({
  	Code: {
    	type: String,
   	 	unique: true,
    	required: true,
  	},
    Name: {
        type: String,
        required: true
    },
    Credit: {
        type:String,
        required: true
    }

});

module.exports = mongoose.model('Course', CourseSchema);