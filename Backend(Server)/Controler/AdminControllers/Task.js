var Task = require("../../Models/Tasks");
var Userdoc = require("../../Models/User");

module.exports.Add = async (req, res) => {
  try {
    if (!req.user) return await res.status(401).json("Timed Out");
    if (!req.user.Roles.includes("Admin")) return await res.status(401).json("UnAutherized");
    const task = await Task.create(req.body);
    if(req.body.taskType=="Add New Course"){
        req.body.User.CourseCreation=[...req.body.User.CourseCreation,req.body.Course]
    }
    else if(req.body.taskType=="Create Course CDF"){
        req.body.User.CourseCDF=[...req.body.User.CourseCDF,req.body.Course]
    }
/*    else if(req.body.taskType=="Create Syllabus"){
        req.body.User.CourseCreation=[...req.body.User.CourseCreation,req.body.Course]
    }*/
    const up = await Userdoc.findOneAndUpdate({ _id: req.body.User._id },req.body.User);
    console.log("Task added", task);
    console.log("User Updated",req.body.User)
    await res.json(task);
  } catch (err) {
    console.log(err);
  }
};
module.exports.Showall = async (req, res) => {
  try {
    if (!req.user) return await res.status(401).json("Timed Out");
    if (!req.user.Roles.includes("Admin")) return await res.status(401).json("UnAutherized");
    const Tasks = await Task.find({});
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
    const task = await Task.find({ User: req.user._id });
    console.log("all Tasks", task);
    await res.json(task);
  } catch (err) {
    console.log(err);
  }
};