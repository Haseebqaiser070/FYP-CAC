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
  PreRequisites: {
    type: String,
    required: true,
  },
  CatalogueDescription: {
    type: Array,
  },
});

module.exports = mongoose.model("Course", CourseSchema);
