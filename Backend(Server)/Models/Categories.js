var mongoose = require("mongoose");
var CategorySchema = new mongoose.Schema({
    Degree:{
        type: mongoose.Schema.ObjectId,
        ref: 'Course',
    },
    CategoryName:{
        type:String,
        required:true
    },

    EnteredCourse:[
        { 
            type: mongoose.Schema.ObjectId,
            ref: 'Course',
            default:'none'
        }
    ]

});

module.exports = mongoose.model("Category", CategorySchema);
