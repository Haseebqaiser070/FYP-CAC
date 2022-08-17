var mongoose = require("mongoose");

var CDFSchema = new mongoose.Schema({

    Topics:{
        type:[{
            Unit:{
                type:String,
                required:true}, 
            Topic:{
                type:String,
                required:true},
            TeachingHours:{
                type:String,
                required:true},
            
        }],
        required:true
    },
    CLOs:{
        type:[{
            sr:{
                type:String,
                required:true},
            Unit:{
                type:String,
                required:true},
            CLO:{
                type:String,
                required:true},
            BTL:[{
                type: mongoose.Schema.ObjectId,
                ref: 'BTL',}],
            So: [{
                type: mongoose.Schema.ObjectId,
                ref: 'SO',}],
            Quizzes: [{
                type:String,
                required:true},],
            Assignment: [{
                type:String,
                required:true},],
            Mid: {
                type:String,
                required:true},
            Final: {
                type:String,
                required:true},
            Project: {
                type:String,
                default:""},
        }],required:true},
        textBook:[{
            id:{
              type:String
            },
            BookName: {
            type:String,
            },
            BookWriter: {
                type:String,
            },
            BookYear: {
                type:String,
            }}
          ],
        referenceBook:[{
            id:{
              type:String
            },
            BookName: {
            type:String,
            },
            BookWriter: {
                type:String,
            },
            BookYear: {
                type:String,
            }}
          ]

});

module.exports = mongoose.model("CDF", CDFSchema);
