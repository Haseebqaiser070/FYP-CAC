const Repo = require("../../../Models/RepoCourse");
const Userdoc = require("../../../Models/User");
const Versionodoc=require("../../../Models/CourseModels/CourseVersion")
const Task = require("../../../Models/Tasks");
const ReturnCourse = require("../../../Models/CourseModels/ReturnCourse");

module.exports.showUsers = async (req, res) => {
    try {
    if (!req.user) return await res.status(401).json("Timed Out");
    const user = await Userdoc.findById(req.user._id);
    console.log(user.CourseSyllabus)
    const r = await Repo.find({_id:{$in:user.CourseSyllabus}});
    await res.status(200).json(r)
    } catch (err) {
      console.log(err);
      await res.status(400).json("error")

    }
  };
  