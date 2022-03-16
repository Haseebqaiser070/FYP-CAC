var mongoose = require("mongoose");

var MeetingSchema = new mongoose.Schema({
  subject: { type: String },
  meetingAgenda: { type: String },
  time: { type: Date },
  availability: { type: Array, required: true },
});

module.exports = mongoose.model("Meeting", MeetingSchema);
