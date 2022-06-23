var Task = require("../../../Models/Tasks");
var Userdoc = require("../../../Models/User");
var InitTask = require("../../../Models/InitTask");

module.exports.Add = async (req, res) => {
  try {
    if (!req.user) return await res.status(401).json("Timed Out");
    if (!req.user.Roles.includes("Admin")) return await res.status(401).json("UnAutherized");
    const task = await Task.create(req.body.obj);
    console.log("body",req.body)
    if(req.body.obj.taskType=="Create Course"){
        req.body.obj.User.CourseCreation=[...req.body.obj.User.CourseCreation,req.body.obj.Course._id]
    }
    
    else if(req.body.obj.taskType=="Create CDF"){
        req.body.obj.User.CourseCDF=[...req.body.obj.User.CourseCDF,req.body.obj.Course._id]
    }
    else if(req.body.obj.taskType=="Create Syllabus"){
        req.body.obj.User.CourseSyllabus=[...req.body.obj.User.CourseSyllabus,req.body.obj.Course._id]
    }
    console.log("user obj",req.body.obj.User)
    const up = await Userdoc.findOneAndUpdate({ _id: req.body.obj.User._id },req.body.obj.User);
    const ini = await InitTask.findOne({_id: req.body.id})
    ini.Task = task
    const up2 = await InitTask.findOneAndUpdate({ _id: req.body.id },ini);
    console.log("Task added", task);
    console.log("User Updated",up)
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