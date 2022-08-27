var Folderdoc = require("../../../Models/Folders");
var Userdoc = require("../../../Models/User");

module.exports.Add = async (req, res) => {
  try {
    if (!req.user) return await res.status(401).json("Timed Out");
    if (!req.user.Roles.includes("Admin")) return await res.status(401).json("UnAutherized");
    const Folders=await Promise.all(req.body.obj.map(async(e)=>{
     try{
        const fold = await Folderdoc.create({Program:e.Program,
            Course:e.Course,
            Section:e.Section,
            User:req.body.User,
            files:[],
            LectureDeliveryRecord:"",
            ICEF:""
        })
            console.log("\n\nfold",fold)
            return fold        
    }    
      catch(er){
          console.error(er);
      }
    }))
    console.log("body",req.body)
    Folders.forEach((e)=> {
    console.log("\n\n\n\n\n\n",e)
    req.body.User.CourseFolders=[...req.body.User.CourseFolders,e._id]
    console.log("user obj",e.User)
    });
    const up = await Userdoc.findOneAndUpdate({ _id: req.body.User._id },req.body.User);
    console.log("User Updated",up)
    console.log("Folders",Folders)
    await res.status(201).json(Folders);
  } catch (err) {
    console.log(err);
  }
};
