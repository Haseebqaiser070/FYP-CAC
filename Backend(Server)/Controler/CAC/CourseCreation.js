var Repo = require("../../Models/RepoCourse");
var Userdoc = require("../../Models/User");
module.exports.showUsers = async (req, res) => {
    try {
    if (!req.user) return await res.status(401).json("Timed Out");
    const user = await Userdoc.findById(req.user._id);
    console.log(user.CourseCreation)
    const r = await Repo.find({_id:{$in:user.CourseCreation}});
    await res.json(r)
    } catch (err) {
      console.log(err);
    }
  };