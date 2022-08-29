var mongoose = require('mongoose');
var LabContentsSchema = new mongoose.Schema({
    Round1:{
        Assignment:{
            type: String,
            default:""},
        MidorSessioanls:{
            type: String,
            default:""},
        },
    Round2:{
        Assignment:{
            type: String,
            default:""}
        }
});

module.exports = mongoose.model('LabContents', LabContentsSchema);