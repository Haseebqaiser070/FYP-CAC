var uuidv4 = require("uuid").v4
var Task = require("../../../Models/Tasks");
var Userdoc = require("../../../Models/User");
var InitTask = require("../../../Models/InitTask");
var VersionCDFodoc=require("../../../Models/CDFModels/CDFVersions")
var CDFgendoc = require("../../Models/CDFModels/CDFGeneral");
var Syllabusgendoc = require("../../Models/SyallabusModels/SyllabusGeneral");
var VersionSyllabusdoc=require("../../../Models/SyallabusModels/SyllabusVersion")
var coursedoc = require("../../Models/CourseModels/Course");
var VersionCourseodoc=require("../../../Models/CourseModels/CourseVersion")

module.exports.Add = async (req, res) => {
  try {
    if (!req.user) return await res.status(401).json("Timed Out");
    if (!req.user.Roles.includes("Admin")) return await res.status(401).json("UnAutherized");
    const Tasks=await Promise.all(req.body.obj.map(async(e)=>{
     try{
      if(e.taskType=="Create SOS"||e.taskType=="Update SOS"){
        const task = await Task.create({taskType:e.taskType,User:e.User,Deadline:e.Deadline
        ,Status:e.Status,Program:e.Program})
        console.log("\n\nTASK",task)
        return task
          
      }
      else{
        const task = await Task.create({taskType:e.taskType,User:e.User,Deadline:e.Deadline
        ,Status:e.Status,Course :e.Course,Program:e.Program})
        console.log("\n\nTASK",task)
        return task
        }
      }
      catch(er){
          console.error(er);
      }
    }))
    console.log("body",req.body)
    req.body.obj.forEach(async(e)=> {
    console.log("\n\n\n\n\n\n",e)
    if(e.taskType=="Create Catalog Description"||e.taskType=="Update Catalog Description"){
        e.User.CourseCreation=[...e.User.CourseCreation,e.Course._id]
        if(e.taskType=="Update Catalog Description"){
          const course = await coursedoc.findOne({Code:e.Course.Code}).populate('PreRequisites')
          delete course._id
          await VersionCourseodoc.create(course) 

        }
    }
    else if(e.taskType=="Create SOS"||e.taskType=="Update SOS"){
      e.User.SOSCreation=[...e.User.SOSCreation,{Program:e.Program}]
      if(e.taskType=="Update SOS"){

        // fnction will be made here after an descusion
        // 
        // 
        //
      }
    }
    else if(e.taskType=="Create CDF"||e.taskType=="Update CDF"){
        e.User.CourseCDF=[...e.User.CourseCDF,e.Course._id]
        if(e.taskType=="Update CDF"){
          const CDF = await CDFgendoc.findOne({Code:e.Course.Code}).
          populate({path:"CLOs",populate:{path:"BTL",model:"BTL"}})
          .populate({path:"CLOs",populate:{path:"So",model:"SOO"}})           
          delete CDF._id
          await VersionCDFodoc.create(CDF)
        }
    }
    else if(e.taskType=="Create Syllabus"||e.taskType=="Update Syllabus"){
        e.User.CourseSyllabus=[...e.User.CourseSyllabus,e.Course._id]
        if(e.taskType=="Update Syllabus"){
          const Syllabus = await Syllabusgendoc.findOne({Code:e.Course.Code})
          delete Syllabus._id
          await VersionSyllabusdoc.create(Syllabus) 
        }
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

//need to remake this later
module.exports.Update = async (req, res) => {
  console.log("\n\n\n\n UPdate \n\n\n\n")
  try {
    if (!req.user) return await res.status(401).json("Timed Out");
    if (!req.user.Roles.includes("Admin")) return await res.status(401).json("UnAutherized");
    const Tasks=await Promise.all(req.body.obj.map(async(e)=>{
     try{
      const task = await Task.findOneAndUpdate({ _id: e._id },{taskType:e.taskType,User:e.User,Deadline:e.Deadline
        ,Status:e.Status,Course :e.Course})
        return task}
      catch(er){
          console.error(er);
      }
    }))
    console.log("body",req.body)
    req.body.obj.forEach(async(e)=> {
      var update = false
      console.log("\n\n\n\n\n\n",e)
    if(e.taskType=="Create Catalog Description"&&!e.User.CourseCreation.includes(e.Course._id)){
        e.User.CourseCreation=[...e.User.CourseCreation,e.Course._id]
        update = true
      }
    
    else if(e.taskType=="Create CDF"&&!e.User.CourseCDF.includes(e.Course._id)){
        e.User.CourseCDF=[...e.CourseCDF,e.Course._id]
        update = true
      }
    else if(e.taskType=="Create Syllabus"&&!e.User.CourseSyllabus.includes(e.Course._id)){
        e.User.CourseSyllabus=[...e.User.CourseSyllabus,e.Course._id]
        update = true
      }
    console.log("user obj",e.User)
    if(update){
      const up = await Userdoc.findOneAndUpdate({ _id: e.User._id },e.User);
      console.log("User Updated",up)
    }
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
    const abc = await Task.findById(req.params.id).populate("User")
    
    /////---------------------------------------------------------------------------------------
    if(abc.taskType=="Create Catalog Description"){
      abc.User.CourseCreation=abc.User.CourseCreation.filter((i)=>{
        if(i!=abc._id)return i
      })
  }
  
  else if(abc.taskType=="Create CDF"){
    abc.User.CourseCDF=abc.User.CourseCDF=abc.User.CourseCDF.filter((i)=>{
      if(i!=abc._id)return i
    })
  }
  else if(abc.taskType=="Create Syllabus"){
    abc.User.CourseSyllabus=abc.User.CourseSyllabus=abc.User.CourseSyllabus.filter((i)=>{
      if(i!=abc._id)return i
    }) 
  } 
    const up = await Userdoc.findOneAndUpdate({ _id: abc.User._id },abc.User);    
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