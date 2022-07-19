var Task = require("../../../Models/Tasks");
var Userdoc = require("../../../Models/User");
var InitTask = require("../../../Models/InitTask");

module.exports.Add = async (req, res) => {
  try {
    if (!req.user) return await res.status(401).json("Timed Out");
    if (!req.user.Roles.includes("Admin")) return await res.status(401).json("UnAutherized");
    const Tasks=await Promise.all(req.body.obj.map(async(e)=>{
     try{
      const task = await Task.create({taskType:e.taskType,User:e.User,Deadline:e.Deadline
        ,Status:e.Status,Course :e.Course})
        return task}
      catch(er){
          console.error(er);
      }
    }))
    console.log("body",req.body)
    req.body.obj.forEach(async(e)=> {
    console.log("\n\n\n\n\n\n",e)
    if(e.taskType=="Create Catalog Description"){
        e.User.CourseCreation=[...e.User.CourseCreation,e.Course._id]
    }
    
    else if(e.taskType=="Create CDF"){
        e.User.CourseCDF=[...e.CourseCDF,e.Course._id]
    }
    else if(e.taskType=="Create Syllabus"){
        e.User.CourseSyllabus=[...e.User.CourseSyllabus,e.Course._id]
    }
    console.log("user obj",e.User)
    const up = await Userdoc.findOneAndUpdate({ _id: e.User._id },e.User);
    console.log("User Updated",up)
    

    });
    const ini = await InitTask.findOne({_id: req.body.id})
    ini.Task =  Tasks
    const up2 = await InitTask.findOneAndUpdate({ _id: req.body.id },ini);
    console.log("Task added", Tasks);
    await res.status(201).json(Tasks);
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
    const abc = await Task.findById(req.params.id)
    const up = await Userdoc.findOneAndUpdate({ _id: abc.User._id },{$pullAll:{Task:req.params.id}});    
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