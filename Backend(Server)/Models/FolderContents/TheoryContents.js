var mongoose = require('mongoose');
var TheoryContentsSchema = new mongoose.Schema({
    Round1:
        {
        Quiz:{
            type: String,
            default:""},
        Assignment:{
            type: String,
            default:""},
        MidorSessioanls:{
            type: String,
            default:""},
        },
    Round2:{
        Quiz:{
            type: String,
            default:""},
        Assignment:{
            type: String,
            default:""}
        }
});

module.exports = mongoose.model('TheoryContents', TheoryContentsSchema);