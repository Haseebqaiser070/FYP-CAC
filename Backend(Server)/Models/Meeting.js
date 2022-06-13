var mongoose = require("mongoose");

var MeetingSchema = new mongoose.Schema({
  subject: { type: String },
  meetingAgenda: { type: String },
  time: { type: Date },
  availability: [
    {
      teacher_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      time: { type: Object },
    },
  ],
});

module.exports = mongoose.model("Meeting", MeetingSchema);
