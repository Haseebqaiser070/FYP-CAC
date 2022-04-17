var mongoose = require("mongoose");
var CategorySchema = new mongoose.Schema({
    Degree:{
        type:String,
        required:true
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
