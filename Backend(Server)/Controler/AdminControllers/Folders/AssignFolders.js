var Folderdoc = require("../../../Models/Folders");
var Userdoc = require("../../../Models/User");

module.exports.Add = async (req, res) => {
  try {
    if (!req.user) return await res.status(401).json("Timed Out");
    if (!req.user.Roles.includes("Admin")) return await res.status(401).json("UnAutherized");
    var Folders = []
    console.log(req.body.obj)
    await Promise.all(req.body.obj.map(async(e)=>{
     try{
        
        const fold = await Folderdoc.create({Program:e.Program,
            Course:e.Course,
            Section:e.Section,
            User:req.body.User,
            files:[],
            LabTheory:"Theory",
            LectureDeliveryRecord:"",
            ICEF:"",
            Obe:""
        })
        console.log("\n\nfold",fold)
        Folders.push(fold)            
        console.log("Folders",Folders)
        if(e.Course.LabHoursWeek==1){            
          const foldlab = await Folderdoc.create({Program:e.Program,
            Course:e.Course,
            Section:e.Section,
            User:req.body.User,
            files:[],
            LabTheory:"Lab",
            LectureDeliveryRecord:"",
            ICEF:"",
            Obe:""          
          })
          Folders.push(foldlab)
          console.log("\n\foldlab",foldlab)
          console.log("Folders",Folders)
        }                  
      }    
      catch(er){
          console.error(er);
      }
    }))
    console.log("body",req.body)
    console.log("Folders",Folders)
    req.body.User.CourseFolders=[...Folders]
    const up = await Userdoc.findOneAndUpdate({ _id: req.body.User._id },req.body.User);
    console.log("User Updated",up)
    console.log("Folders",Folders)
    await res.status(201).json(Folders);
  } catch (err) {
    console.log(err);
  }
};
module.exports.Add2 = async (req, res) => {
  try {
    if (!req.user) return await res.status(401).json("Timed Out");
    if (!req.user.Roles.includes("Admin")) return await res.status(401).json("UnAutherized");
    
    const userF = await Userdoc.findById(req.user._id).populate("CourseFolders").
        populate({path:"CourseFolders",populate:{path:"Course",model:"ProgramCourses"}});
    
    Folderdoc
    var Folders = []
    console.log(req.body.obj)
    await Promise.all(await req.body.obj.map(async(e)=>{
     try{
      if(!userF.CourseFolders.find(x=>x.Course==e.Course)){
        await Folderdoc.deleteMany({Course:e.Course._id,User:req.body.User})
        }
      else{
          var f = userF.CourseFolders.find(x=>x.Course==e.Course)
          Folders.push(f)     
        } 
      }  
       
      catch(er){
          console.error(er);
      }
    }))
    await Promise.all(await req.body.obj.map(async(e)=>{
     try{
      if(!userF.CourseFolders.find(x=>x.Course==e.Course)){
      const fold = await Folderdoc.create({Program:e.Program,
        Course:e.Course,
        Section:e.Section,
        User:req.body.User,
        files:[],
        LabTheory:"Theory",
        LectureDeliveryRecord:"",
        ICEF:"",
        Obe:""
    })
    console.log("\n\nfold",fold)
    Folders.push(fold)            
    console.log("Folders",Folders)
    if(e.Course.LabHoursWeek==1){            
      const foldlab = await Folderdoc.create({Program:e.Program,
        Course:e.Course,
        Section:e.Section,
        User:req.body.User,
        files:[],
        LabTheory:"Lab",
        LectureDeliveryRecord:"",
        ICEF:"",
        Obe:""          
      })
      Folders.push(foldlab)
      console.log("\n\foldlab",foldlab)
      console.log("Folders",Folders)
      }}
                        
    }    
     catch(er){
         console.error(er);
     }}
     ))
    console.log("body",req.body)
    console.log("Folders",Folders)
    
    req.body.User.CourseFolders=[...Folders]
    console.log("user obj",req.body.User)
    
    const up = await Userdoc.findOneAndUpdate({ _id: req.body.User._id },req.body.User);
    console.log("User Updated",up)
    console.log("Folders",Folders)
    await res.status(201).json(Folders);
  } catch (err) {
    console.log(err);
  }
};
