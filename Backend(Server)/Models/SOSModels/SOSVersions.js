var mongoose = require("mongoose");
var SOSVersionSchema = new mongoose.Schema({
    Program: {
        type: String
    },
    Year: {
        type: String,
    },
    Categories:{type:[
       { Category:{ 
            type:String
        },
        Courses:[{
            type: mongoose.Schema.ObjectId,
            ref: 'SOSCourse',}]}
    ],
    }
});

module.exports = mongoose.model("SOSVersion", SOSVersionSchema);
