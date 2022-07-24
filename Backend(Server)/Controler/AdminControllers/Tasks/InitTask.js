var InitTask = require("../../../Models/InitTask");
var Task = require("../../../Models/Tasks");
var Userdoc = require("../../../Models/User");

module.exports.Add = async (req, res) => {
  try {
    if (!req.user) return await res.status(401).json("Timed Out");
    if (!req.user.Roles.includes("Admin")) return await res.status(401).json("UnAutherized");
    console.log(req.body)
    const Inittask = await InitTask.create(req.body);
    console.log("InitTask added", Inittask);
    await res.status(201).json(Inittask);
  } catch (err) {
    console.log(err);
  }
};

module.exports.UpdateTaskInit = async (req, res) => {
  try {
    if (!req.user) return await res.status(401).json("Timed Out");
    if (!req.user.Roles.includes("Admin")) return await res.status(401).json("UnAutherized");
    const InitTask = await InitTask.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    );
    console.log("all InitTasks", InitTask);
    await res.json(InitTask);
  } catch (err) {
    console.log(err);
  }
};

  
  module.exports.ShowOne = async (req, res) => {
    try {
      if (!req.user) return await res.status(401).json("Timed Out");
      if (!req.user.Roles.includes("Admin")) return await res.status(401).json("UnAutherized");
      const InitTasks = await InitTask.findById(req.params.id).populate("AssignMember").populate("Task").populate({path:"Task",model:"Task",populate:{path: 'User', model: 'User'}})
      .populate ({path:"Task",model:"Task",populate:{path:'Course',model:'Repo'}});
      console.log("one task", InitTasks);
      await res.status(200).json(InitTasks);
    } catch (err) {
      console.log(err);
    }
  };
  
  
module.exports.Delete = async (req, res) => {
  try {
    if (!req.user) return await res.status(401).json("Timed Out");
    if (!req.user.Roles.includes("Admin")) return await res.status(401).json("UnAutherized");
    const Inis1 = await InitTask.findById(req.params.id).populate("AssignMember")
    console.log("ini",Inis1.Task)
    Inis1.Task.forEach(async(e) => {
      const abc = await Task.findById(e).populate("User")
      if(abc.taskType=="Create Catalog Description"){   
        var clone = abc.User.CourseCreation.filter((i)=>{
          console.log("aaaaaaaa",abc.Course)
          console.log("iiiii",i)
          console.log("iiiiaai",!i.equals(abc.Course))
          if(!i.equals(abc.Course)){
            return i
          }
        })
        
        abc.User.CourseCreation=[...clone]
    }
    
    else if(abc.taskType=="Create CDF"){
      abc.User.CourseCDF=abc.User.CourseCDF=abc.User.CourseCDF.filter((i)=>{
        if(i!=abc.Course)return i
      })
    }
    else if(abc.taskType=="Create Syllabus"){
      abc.User.CourseSyllabus=abc.User.CourseSyllabus=abc.User.CourseSyllabus.filter((i)=>{
        if(i!=abc.Course)return i
      }) 
    } 
      await Userdoc.findOneAndUpdate({ _id: abc.User._id },abc.User);    
      await Task.deleteOne({ _id: e });
    })        
    const Inittask = await InitTask.deleteOne({ _id: req.params.id });
    await res.status(204).json(Inittask);
  } catch (err) {
    console.log(err);
  }
};
module.exports.Showall = async (req, res) => {
    try {
      if (!req.user) return await res.status(401).json("Timed Out");
      if (!req.user.Roles.includes("Admin")) return await res.status(401).json("UnAutherized");
      const InitTasks = await InitTask.find({}).populate("AssignMember")
      console.log("all InitTasks", InitTasks);
      await res.json(InitTasks);
    } catch (err) {
      console.log(err);
    }
  };

// module.exports.Showallnotass = async (req, res) => {
//   try {
//     if (!req.user) return await res.status(401).json("Timed Out");
//     if (!req.user.Roles.includes("Admin")) return await res.status(401).json("UnAutherized");
//     const InitTasks = await InitTask.find({}).populate("AssignMember");
//     const response = InitTasks.filter((i)=>{
//         if(i.Task==null)return i
//     }) 
//     console.log("all InitTasks", response);
//     await res.json(response);
//   } catch (err) {
//     console.log(err);
//   }
// };

// module.exports.Showallass = async (req, res) => {
//     try {
//       if (!req.user) return await res.status(401).json("Timed Out");
//       if (!req.user.Roles.includes("Admin")) return await res.status(401).json("UnAutherized");
//       const InitTasks = await InitTask.find({}).populate("AssignMember");
//       console.log("all InitTasks", InitTasks);
//       await res.json(InitTasks);
//     } catch (err) {
//       console.log(err);
//     }
//   };
// module.exports.UpdateTaskInit = async (req, res) => {
//   try {
//     if (!req.user) return await res.status(401).json("Timed Out");
//     if (!req.user.Roles.includes("Admin")) return await res.status(401).json("UnAutherized");
//     const InitTasks = await InitTask.findOneAndUpdate({ _id: req.params.id },req.body);
//     console.log("all InitTasks", InitTasks);
//     await res.json(InitTasks);
//   } catch (err) {
//     console.log(err);
//   }
// };
