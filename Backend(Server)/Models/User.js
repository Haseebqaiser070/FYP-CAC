var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Email:{
    type:String,
      required: true,
      unique:true
    },
    Password:{
      type:String,
      required: true  
    },
    Phone:{
        type:String,
        required: true  
      },
    Roles:[
        {
        type: String, 
        required:true
    }]
    ,
    CourseCreation:[
        {
        type: mongoose.Schema.ObjectId,
        ref: 'Repo',
        default:'none'
        }]
    ,
    CourseCDF:[
        {
        type: mongoose.Schema.ObjectId,
        ref: 'Repo',
        default:'none'
        }]
    ,
    CourseFolders:[
        {
        type: mongoose.Schema.ObjectId,
        ref: 'Course',
        default:'none'
        }]
    ,
    EvaluateFolders:[
        {
        type: mongoose.Schema.ObjectId,
        ref: 'Course',
        default:'none'
        }]
    
});

module.exports = mongoose.model('User', UserSchema);