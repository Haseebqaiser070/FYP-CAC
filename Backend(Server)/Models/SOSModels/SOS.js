var mongoose = require("mongoose");

var SOSSchema = new mongoose.Schema({

    Program: {
        type: String,
        required: true,
    },
    Year: {
        type: String,
        required: true,
    },
    Categories:{type:[
       { Category:{ 
            type:String
        },
        Courses:[{
            type: mongoose.Schema.ObjectId,
            ref: 'SOSCourse',}]
        }
    ],
    required:true}
});

module.exports = mongoose.model("SOS", SOSSchema);
