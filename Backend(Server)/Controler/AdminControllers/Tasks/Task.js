var Task = require("../../../Models/Tasks");
var Userdoc = require("../../../Models/User");
var InitTask = require("../../../Models/InitTask");

module.exports.Add = async (req, res) => {
  try {
    if (!req.user) return await res.status(401).json("Timed Out");
    if (!req.user.Roles.includes("Admin")) return await res.status(401).json("UnAutherized");
    const task = await Task.create(req.body.obj);
    
    if(req.body.taskType=="Add New Course"){
        req.body.User.CourseCreation=[...req.body.obj.User.CourseCreation,req.body.obj.Course]
    }
    
    else if(req.body.taskType=="Create CDF"){
        req.body.User.CourseCDF=[...req.body.obj.User.CourseCDF,req.body.obj.Course]
    }
    else if(req.body.taskType=="Create Syllabus"){
        req.body.User.CourseSyllabus=[...req.body.obj.User.CourseCreation,req.body.obj.Course]
    }
    
    const up = await Userdoc.findOneAndUpdate({ _id: req.body.obj.User._id },req.body.obj.User);
    const ini = await InitTask.Task.find({_id: req.body.id})
    ini.Task = task._id 
    const up2 = await InitTask.findOneAndUpdate({ _id: req.body.id },ini);
    console.log("Task added", task);
    console.log("User Updated",req.body.User)
    await res.status(201).json(task);
  } catch (err) {
    console.log(err);
  }
};
module.exports.Showall = async (req, res) => {
  try {
    if (!req.user) return await res.status(401).json("Timed Out");
    if (!req.user.Roles.includes("Admin")) return await res.status(401).json("UnAutherized");
    const Tasks = await Task.find({}).populate("User").populate("Course");
    console.log("all Tasks", Tasks);
    await res.json(Tasks);
  } catch (err) {
    console.log(err);
  }
};


module.exports.Delete = async (req, res) => {
  try {
    if (!req.user) return await res.status(401).json("Timed Out");
    if (!req.user.Roles.includes("Admin")) return await res.status(401).json("UnAutherized");
    const task = await Task.deleteOne({ _id: req.params.id });
    console.log("all Tasks", task);
    await res.json(task);
  } catch (err) {
    console.log(err);
  }
};
module.exports.showUsers= async (req, res) => {
  try {
    if (!req.user) return await res.status(401).json("Timed Out");
    const task = await Task.find({ User: req.user._id }).populate("User").populate("Course");
    console.log("all Tasks", task);
    await res.json(task);
  } catch (err) {
    console.log(err);
  }
};