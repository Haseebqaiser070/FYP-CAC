var mongoose = require("mongoose");
var CourseSchema = new mongoose.Schema({
  Code: {
    type: String,
    unique: true,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  Credit: {
    type: String,
    required: true,
  },
  LectureHoursWeek: {
    type: String,
    required: true,
  },
  LabHoursWeek: {
    type: String,
    required: true,
  },
  Category:{
    type:String,
    required:true
  },
  PreRequisites: {
    type: [{
      PreId:{
          type: mongoose.Types.ObjectId,
          ref:"Course"
        }
      }
    ],
    default:"none",
  },
  catalogue: {
    type:String,
  },
  objectiveList: {
    type:[{
      id:{
        type:String
      },
      title:{
          type:String
        }
    }],
    required:true
  }
  
});

module.exports = mongoose.model("Course", CourseSchema);
