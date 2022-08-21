const Repo = require("../../../Models/RepoCourse");
const Userdoc = require("../../../Models/User");

module.exports.showUsers = async (req, res) => {
    try {
    if (!req.user) return await res.status(401).json("Timed Out");
    const user = await Userdoc.findById(req.user._id).populate("CourseSyllabus");;
    console.log(user.CourseSyllabus)
    await res.status(200).json(user.CourseSyllabus)
    } catch (err) {
      console.log(err);
      await res.status(400).json("error")

    }
  };
  