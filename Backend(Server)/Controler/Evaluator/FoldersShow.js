var Userdoc = require("../../Models/User");
module.exports.Showall = async (req, res) => {
    try {
      console.log(req.user)
      if (!req.user) return await res.json("Timed Out");
      try {      
        const user = await Userdoc.findById(req.user._id).
        populate({path:"EvaluateFolders",model:"Eval",populate:{path:"Folder",model:"Folder",
        populate:{path:"Course",model:"ProgramCourses"}}}).
        populate({path:"EvaluateFolders",model:"Eval",populate:{path:"Folder",model:"Folder",
        populate:{path:"User",model:"User"}}})
       
        
        console.log("EvaluateFolders",user.EvaluateFolders)
        await res.status(200).json(user.EvaluateFolders)
        } catch (err) {
          console.log(err);
          await res.status(400).json("error")    
        }  
    } catch (err) {
      console.log(err);
    }
  };
module.exports.ShowId = async (req, res) => {
    try {
      console.log(req.user)
      if (!req.user) return await res.json("Timed Out");
      try {  
        const user = await Userdoc.findById(req.params.id).
        populate({path:"EvaluateFolders",model:"Eval",populate:{path:"Folder",model:"Folder",
        populate:{path:"Course",model:"ProgramCourses"}}}).
        populate({path:"EvaluateFolders",model:"Eval",populate:{path:"Folder",model:"Folder",
        populate:{path:"User",model:"User"}}})
        console.log("EvaluateFolders",user.EvaluateFolders)
        await res.status(200).json(user.EvaluateFolders)
        } catch (err) {
          console.log(err);
          await res.status(400).json("error")    
        }  
    } catch (err) {
      console.log(err);
    }
  };
  module.exports.ShowComp = async (req, res) => {
    try {
      console.log(req.user)
      if (!req.user) return await res.json("Timed Out");
      try {  
        const user = await Userdoc.findById(req.params.id).
        populate({path:"EvaluateFolders",model:"Eval",populate:{path:"Folder",model:"Folder",
        populate:{path:"Course",model:"ProgramCourses"}}}).
        populate({path:"EvaluateFolders",model:"Eval",populate:{path:"Folder",model:"Folder",
        populate:{path:"User",model:"User"}}})
        
        .populate({path:"EvaluateFolders",model:"Eval",populate:{path:"Folder",model:"Folder",
        populate:{path:"files",populate:{path:"Base64",model:"Base64"}}}})
        
        .populate({path:"EvaluateFolders",model:"Eval",populate:{path:"Folder",model:"Folder",
        populate:{path:"ICEF",model:"Base64"}}})
        
        .populate({path:"EvaluateFolders",model:"Eval",populate:{path:"Folder",model:"Folder",
        populate:{path:"Obe",model:"Base64"}}})
        
        .populate({path:"EvaluateFolders",model:"Eval",populate:{path:"Folder",model:"Folder",
        populate:{path:"LectureDeliveryRecord",model:"Base64"}}})
        
        console.log("EvaluateFolders",user.EvaluateFolders)
        await res.status(200).json(user.EvaluateFolders)
        } catch (err) {
          console.log(err);
          await res.status(400).json("error")    
        }  
    } catch (err) {
      console.log(err);
    }
  };
  