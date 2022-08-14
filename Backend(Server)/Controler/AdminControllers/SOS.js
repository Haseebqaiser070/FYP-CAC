var SOS = require("../../Models/SOSModels/SOS");

module.exports.Showall = async (req, res) => {
    try {
      console.log(req.user)
      if (!req.user) return await res.json("Timed Out");
      const backSOS = await SOS.find({});
      console.log("all SOSs", backSOS);
      await res.json(backSOS);
    } catch (err) {
      console.log(err);
    }
  };
  
  module.exports.ShowOne = async (req, res) => {
    try {
      if (!req.user) return await res.json("Timed Out");
      const backSOS = await SOS.findById(req.params.id).populate({path:"Categories"
      ,populate:{path:"Courses",model:"ProgramCourses",
      populate:{path:'PreRequisites',model:'Course'}}});
      console.log(backSOS)
      res.json(backSOS);
    } catch (err) {
      console.log(err);
    }
  };
  
  module.exports.Delete = async (req, res) => {
    try {
      if (!req.user) return await res.json("Timed Out");
      const backSOS = await SOS.deleteOne({ _id: req.params.id });
      console.log("SOS", backSOS);
      await res.json(backSOS);
    } catch (err) {
      console.log(err);
    }
  };