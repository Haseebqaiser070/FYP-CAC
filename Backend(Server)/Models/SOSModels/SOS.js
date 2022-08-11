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
        Optional:{ 
            type:String,
            default:""
        },
        Track:{ 
            type:String,
            default:""
        },
        Courses:[{
            type: mongoose.Schema.ObjectId,
            ref: 'SOSCourse',}],
        Note:{ 
            type:String,
            default:""
        },}
    ],
    required:true}
});

module.exports = mongoose.model("SOS", SOSSchema);
