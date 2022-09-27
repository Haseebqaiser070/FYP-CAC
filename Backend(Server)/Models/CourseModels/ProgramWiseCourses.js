var mongoose = require("mongoose");
var ProgramCoursesSchema = new mongoose.Schema({
  
 Program: {
    type: String,
    required: true,
    },  
  Code: {
    type: String,
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
  PreRequisites: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Repo",
      default: "none",
    },
  ],
});

module.exports = mongoose.model("ProgramCourses", ProgramCoursesSchema);
