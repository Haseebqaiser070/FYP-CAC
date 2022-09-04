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
                Name:{
                    type: String, 
                    required:true    
                },
                Base64:{
                    type: String, 
                    required:true
                }
            },
            Solution:{
                Name:{
                    type: String, 
                    required:true    
                },
                Base64:{
                    type: String, 
                    required:true
                }
            },
            Awardlist:{
                Name:{
                    type: String, 
                    required:true    
                },
                Base64:{
                    type: String, 
                    required:true
                }
            },
            Best:{
                Name:{
                    type: String, 
                    required:true    
                },
                Base64:{
                    type: String, 
                    required:true
                }
            },
            Average:{
                Name:{
                    type: String, 
                    required:true    
                },
                Base64:{
                    type: String, 
                    required:true
                }
            },
            Worst:{
                Name:{
                    type: String, 
                    required:true    
                },
                Base64:{
                    type: String, 
                    required:true
                }
            }
        },
        default:"none"
        }
    ],
    LabTheory:{
        type:String,
        default:""
    },
    LectureDeliveryRecord:{
        type:String,
        default:""
    },
    ICEF:{
        type:String,
        default:""
    },
    Obe:{
        type:String,
        default:""
    },
    Round1:{
        type:Boolean,
        default:false
    },
    Round2:{
        type:Boolean,
        default:false
    },
       
});

module.exports = mongoose.model('Folder', FolderSchema);