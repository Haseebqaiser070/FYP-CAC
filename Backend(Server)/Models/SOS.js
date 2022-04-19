var mongoose = require("mongoose");

var SOSSchema = new mongoose.Schema({

    Start: {
        type: String,
        required: true,
    },End: {
        type: String,
        required: true,
    },
    Program: {
        type: String,
        required: true,
    },
    Notification: {
        type: String,
        required: true,
    },
    Meeting: {
        type: String,
        required: true,
    },
    MeetDate: {
        type: String,
        required: true,
    },
    Registrar: {
        type: String,
        required: true,
    },
    Selected:[
        { 
            type: mongoose.Schema.ObjectId,
            ref: 'Category',
        }
    ]
});

module.exports = mongoose.model("SOS", SOSSchema);
