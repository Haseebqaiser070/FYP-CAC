const Task = require("../../Models/Tasks");
const coursedoc = require("../../Models/CourseModels/Course");
const ReturnCourse = require("../../Models/CourseModels/ReturnCourse");
const Versionodoc=require("../../Models/CourseModels/CourseVersion")

module.exports.Showall = async (req, res) => {
    try {
      if (!req.user) return await res.status(401).json("Timed Out");
      if(!req.user.Roles.includes("Admin")) return res.status(401).json("Unautherized");
      const task = await Task.find({Status:req.params.status}).populate("User").populate("Course");     
      console.log(task)
      res.status(200).json(task);
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
      const obj = await ReturnCourse.findOne({Code:task.Course.Code},{_id:0})
      console.log(obj)
      const finalcourse = await coursedoc.create({
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
      });
      console.log("finalcourse",finalcourse)
      await Task.deleteOne({_id:req.params.id});
      await Versionodoc.deleteMany({Code:task.Course.Code})
      await ReturnCourse.deleteOne({Code:task.Course.Code})
      console.log(finalcourse)
      res.status(200).json(finalcourse);
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
