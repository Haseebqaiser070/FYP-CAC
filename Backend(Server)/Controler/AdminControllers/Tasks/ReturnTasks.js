const Task = require("../../../Models/Tasks");
const coursedoc = require("../../../Models/CourseModels/Course");
const ReturnCourse = require("../../../Models/CourseModels/ReturnCourse");
const VersionCourse=require("../../../Models/CourseModels/CourseVersion")
const ReturnedSOS = require("../../../Models/SOSModels/ReturnSOS");
const VersionSOS=require("../../../Models/SOSModels/SOSVersions")
const SOSdoc=require("../../../Models/SOSModels/SOS")
const ProgramCourses=require("../../../Models/CourseModels/ProgramWiseCourses")
const SOSCourse=require("../../../Models/CourseModels/SOSCourse")
const ReturnedCDF = require("../../../Models/CDFModels/ReturnCDF");
const CDFdoc = require("../../../Models/CDFModels/CDF");
const VaersionCDF = require("../../../Models/CDFModels/CDFVersions");
const genCDF = require("../../../Models/CDFModels/CDFGeneral");
const ReturnedSyllabus = require("../../../Models/SyallabusModels/ReturnSyllabus");
const Syllabusdoc = require("../../../Models/SyallabusModels/Syllabus");
const VaersionSyllabus = require("../../../Models/SyallabusModels/SyllabusVersion");
const genSyllabus = require("../../../Models/SyallabusModels/SyllabusGeneral");

module.exports.Showall = async (req, res) => {
    try {
      if (!req.user) return await res.status(401).json("Timed Out");
      if(!req.user.Roles.includes("Admin")) return res.status(401).json("Unautherized");
      const task = await Task.find({Status:req.params.status}).populate("User").populate("Course");     
      console.log(task)
      await res.status(200).json(task);
    } catch (err) {
        res.status(400).json("error");
        console.log(err);
    }
  };
    
module.exports.Lock = async (req, res) => {
    try {
      
      if (!req.user) return await res.status(401).json("Timed Out");
      if(!req.user.Roles.includes("Admin")) return res.status(401).json("Unautherized");
      const task = await Task.findById(req.params.id).populate("Course");
      
      if(task.taskType=="Create Catalog Description"||task.taskType=="Update Catalog Description"){
        const obj = await ReturnCourse.findOne({Code:task.Course.Code},{_id:0})
        console.log(obj)
        var finalcourse
        if(task.taskType=="Create Catalog Description"){
         finalcourse = await coursedoc.create({
          Code: obj.Code,
          Name: obj.Name,
          Credit: obj.Credit,
          LectureHoursWeek: obj.LectureHoursWeek ,
          LabHoursWeek:obj.LabHoursWeek,
          Category:obj.Category,
          PreRequisites:obj.PreRequisites,
          catalogue: obj.catalogue,
          objectiveList:obj.objectiveList ,
          Books:obj.Books
        });}
        else if(task.taskType=="Update Catalog Description"){
          finalcourse = await coursedoc.findOneAndUpdate({Code:obj.Code},{
           Code: obj.Code,
           Name: obj.Name,
           Credit: obj.Credit,
           LectureHoursWeek: obj.LectureHoursWeek ,
           LabHoursWeek:obj.LabHoursWeek,
           Category:obj.Category,
           PreRequisites:obj.PreRequisites,
           catalogue: obj.catalogue,
           objectiveList:obj.objectiveList ,
           Books:obj.Books
         });}
        console.log("finalcourse",finalcourse)
        task.Status = "Finished"
        await Task.findByIdAndUpdate(task._id,task)
        await ReturnCourse.deleteOne({Code:task.Course.Code})
        await VersionCourse.deleteMany({Code:task.Course.Code})
        console.log(finalcourse)
        await res.status(200).json(finalcourse);
      }
      else if(task.taskType=="Create SOS"||task.taskType=="Update SOS"){
        console.log("Task",task)
        const obj = await ReturnedSOS.findOne({Program:task.Program}).populate({path:"Categories"
        ,populate:{path:"Courses",model:"SOSCourse",
        populate:{path:'PreRequisites',model:'Course'}}});
        console.log("obj",obj)
<<<<<<< HEAD
        const cats = await Promise.all(obj.Categories.map(async(e) => {
          const cors = await Promise.all(e.Courses.map(async(i) => {
              delete i._id
              console.log("i",i)
              const doc = await ProgramCourses.create({          
                Program: i.Program,
                Code: i.Code,
                Name: i.Name,
                Credit: i.Credit,
                LectureHoursWeek: i.LectureHoursWeek ,
                LabHoursWeek:i.LabHoursWeek,
                Category:i.Category,
                PreRequisites:i.PreRequisites,
                catalogue: i.catalogue,
                objectiveList:i.objectiveList ,
                Books:i.Books})   
              return await doc          
           })
           )
           console.log("cors",cors)
           e.Courses = cors
           return await e
       }))
       console.log("cats",cats)
       obj.Categories=cats
        console.log(obj)
        const finalSOS = await SOSdoc.create({Program:obj.Program,Year:obj.Year,Categories:obj.Categories});
=======
      //   const cats = await Promise.all(obj.Categories.map(async(e) => {
      //     const cors = await Promise.all(e.Courses.map(async(i) => {
      //         delete i._id
      //         console.log("i",i)
      //         const doc = await ProgramCourses.create({          
      //           Program: i.Program,
      //           Code: i.Code,
      //           Name: i.Name,
      //           Credit: i.Credit,
      //           LectureHoursWeek: i.LectureHoursWeek ,
      //           LabHoursWeek:i.LabHoursWeek,
      //           PreRequisites:i.PreRequisites,
      //           catalogue:i.catalogue,
      //           objectiveList:i.objectiveList,
      //           Books:i.Books
      //           })   
      //         return await doc          
      //      })
      //      )
      //      console.log("cors",cors)
      //      e.Courses = cors
      //      return await e
      //  }))
       const p1 = await SOSPage1.find({Program:obj.Program,Year:obj.Year})
       await Promise.all(p1.map(async(i) => {
        console.log("i",i)
        console.log("ob",obj.Page1)
        console.log(obj.Page1!=i._id)
        if(obj.Page1!=i._id){
          console.log("condi")
        
          // var doc = await SOSPage1.deleteOne({_id:i._id})
          // console.log("delete",doc)
          }
        })
        )
      //  console.log("cats",cats)
      //  obj.Categories=cats
        // console.log(obj)
        const finalSOS = await SOSdoc.create({Page1:obj.Page1,Program:obj.Program,Year:obj.Year,Categories:obj.Categories});
>>>>>>> LULU
        console.log("finalSOS",finalSOS)        
        task.Status = "Finished"
        // await Task.findByIdAndUpdate(task._id,task)
        // await ReturnedSOS.deleteOne({Program:task.Program})
        // await VersionSOS.deleteMany({Program:task.Program})
        // await SOSCourse.deleteMany({Program:task.Program})
        console.log(finalSOS)
        await res.status(200).json(finalSOS);
      }
      
      else if(task.taskType=="Create CDF"||task.taskType=="Update CDF"){
        const obj = await ReturnedCDF.findOne({Code:task.Course.Code},{_id:0})
        console.log(obj)
        const SOS = await SOSdoc.find({})
        if(task.taskType=="Create CDF"){
          await genCDF.create({
            Code: obj.Code,
            Topics: obj.Topics,
            CLOs: obj.CLOs,
            textBook: obj.textBook ,
            referenceBook:obj.referenceBook
            })
          await Promise.all(SOS.map(async(i)=>{
            const CDF = await CDFdoc.create({
              Program:i.Program,
              Code: obj.Code,
              Topics: obj.Topics,
              CLOs: obj.CLOs,
              textBook: obj.textBook ,
              referenceBook:obj.referenceBook
              })
              console.log("finalCDF",CDF)
              }
            ))
          }
        else if(task.taskType=="Update CDF"){
          await genCDF.findOneAndUpdate({Code: obj.Code},{
            Code: obj.Code,
            Topics: obj.Topics,
            CLOs: obj.CLOs,
            textBook: obj.textBook ,
            referenceBook:obj.referenceBook
            })
            await Promise.all(SOS.map(async(i)=>{
              const CDF = await CDFdoc.findOneAndUpdate({Code: obj.Code,Program:i.Program},{
                Program:i.Program,
                Code: obj.Code,
                Topics: obj.Topics,
                CLOs: obj.CLOs,
                textBook: obj.textBook ,
                referenceBook:obj.referenceBook
                })
                console.log("finalCDF",CDF)
                }
              ))
        
        }
        task.Status = "Finished"
        await Task.findByIdAndUpdate(task._id,task)
        await ReturnedCDF.deleteOne({Code:task.Course.Code})
        await VaersionCDF.deleteMany({Code:task.Course.Code})
        console.log(genCDF)
        res.status(200).json(genCDF);
      }

      else if(task.taskType=="Create Syllabus"||task.taskType=="Update Syllabus"){
        const obj = await ReturnedSyllabus.findOne({Code:task.Course.Code},{_id:0})
        console.log(obj)
        const SOS = await SOSdoc.find({})
        if(task.taskType=="Create Syllabus"){
          await genSyllabus.create({
            Code: obj.Code,
            Plan:obj.Plan,
            textBook: obj.textBook ,
            referenceBook:obj.referenceBook
            })
          await Promise.all(SOS.map(async(i)=>{
            const Syllabus = await Syllabusdoc.create({
              Program:i.Program,
              Code: obj.Code,
              Plan:obj.Plan,
              textBook: obj.textBook ,
              referenceBook:obj.referenceBook
              })
              console.log("finalSyllabus",Syllabus)
              }
            ) 
          )
        }
        if(task.taskType=="Update Syllabus"){
          await genSyllabus.findOneAndUpdate({Code: obj.Code,},{
            Code: obj.Code,
            Plan:obj.Plan,
            textBook: obj.textBook ,
            referenceBook:obj.referenceBook
            })
          await Promise.all(SOS.map(async(i)=>{
            const Syllabus = await Syllabusdoc.findOneAndUpdate({Program:i.Program,
              Code: obj.Code},{
              Program:i.Program,
              Code: obj.Code,
              Plan:obj.Plan,
              textBook: obj.textBook ,
              referenceBook:obj.referenceBook
              })
              console.log("finalSyllabus",Syllabus)
              }
            ) 
          )
        }
           
        task.Status = "Finished"
        const newtask  = await Task.findByIdAndUpdate(task._id,task)
        await ReturnedSyllabus.deleteOne({Code:task.Course.Code})
        await VaersionSyllabus.deleteMany({Code:task.Course.Code})
        console.log(genSyllabus)
        await res.status(200).json(genSyllabus);
      }


      
    } catch (err) {
        res.status(400).json("error");
        console.log(err);
    }
  };

// module.exports.Revision = async (req, res) => {
//     try {
//       if (!req.user) return await res.status(401).json("Timed Out");
//       if(!req.user.Roles.includes("Admin")) return res.status(401).json("Unautherized");
//       const task = await Task.find({Status:req.params.status});     
//       console.log(task)
//       res.status(200).json(task);
//     } catch (err) {
//         res.status(400).json("error");
//         console.log(err);
//     }
//   };
