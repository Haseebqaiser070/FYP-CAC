var mongoose = require("mongoose");

var SOSReturnSchema = new mongoose.Schema({

    Program: {
        type: String,
        required: true,
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
            ref: 'SOSCourse',}]
        }
    ],
    }
});

module.exports = mongoose.model("SOSReturn", SOSReturnSchema);
