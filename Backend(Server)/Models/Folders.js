var mongoose = require('mongoose');

var FolderSchema = new mongoose.Schema({
    Program: {
        type: String,
        required: true,
    },
    Course:{        
        type: mongoose.Schema.ObjectId,
        ref: 'ProgramCourses'        
    },
    Section:{
        type:String,
        default:""  
    },
    User:{
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    files:[
            {type:{
            Title:{
                type: String, 
                required:true
            },
            Question:{
                type: String, 
                required:true
            },
            Awardlist:{
                type: String, 
                required:true
            },
            Best:{
                type: String, 
                required:true
            },
            Average:{
                type: String, 
                required:true
            },
            Worst:{
                type: String, 
                required:true
            }
        },
        default:"none"
        }
    ],
    LectureDeliveryRecord:{
        type:String,
        default:""
    },
    ICEF:{
        type:String,
        default:""
    }
        
});

module.exports = mongoose.model('Folder', FolderSchema);