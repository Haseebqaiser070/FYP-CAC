var TheoryContents = require("../../../Models/FolderContents/TheoryContents");
var LabContents = require("../../../Models/FolderContents/LabContents");

module.exports.Theory = async (req, res) => {
  try {
    if (!req.user) return await res.status(401).json("Timed Out");
    if (!req.user.Roles.includes("Admin")) return await res.status(401).json("UnAutherized");
    const old = await TheoryContents.findOne({});
    var obj=req.body.obj
    if(req.body.Round=="Round1"){
        if(old){
            if(old.Round1.MidorSessioanls=="Mid"){
                obj.MidorSessioanls="Mid"
            }
            else if(old.Round1.MidorSessioanls=="Sessional"){
                obj.MidorSessioanls="Sessional"
            }
            else{
                obj.MidorSessioanls="Mid"
            }
        }
        else{
            obj.MidorSessioanls="Mid"
        }
    }

    console.log("Round1","Round2",obj)
    if(old){
        
        if(req.body.Round=="Round1"){
        await TheoryContents.findByIdAndUpdate(old._id,{Round1:obj,Round2:old.Round2})}
        else if(req.body.Round=="Round2"){
        await TheoryContents.findByIdAndUpdate(old._id,{Round1:old.Round1,Round2:obj})}
        
        }
    else{    
        
        if(req.body.Round=="Round1")
        await TheoryContents.create({Round1:obj});
        else if(req.body.Round=="Round2")
        await TheoryContents.create(old._id,{Round2:obj})
                
    }

    await res.status(201).json("TheoryContents");
  } catch (err) {
    console.log(err);
  }
};

module.exports.Lab = async (req, res) => {
    try {
      if (!req.user) return await res.status(401).json("Timed Out");
      if (!req.user.Roles.includes("Admin")) return await res.status(401).json("UnAutherized");
      const old = await LabContents.findOne({});
  
      var obj=req.body.obj
      if(req.body.Round=="Round1"){
        if(old){
            if(old.Round1.MidorSessioanls=="Mid"){
                obj.MidorSessioanls="Mid"
            }
            else if(old.Round1.MidorSessioanls=="Sessional"){
                obj.MidorSessioanls="Sessional"
            }
            else{
                obj.MidorSessioanls="Mid"
            }
        }
        else{
            obj.MidorSessioanls="Mid"
        }
      }
  
      console.log("Round1","Round2",obj)
      if(old){
          
          if(req.body.Round=="Round1")
          await LabContents.findByIdAndUpdate(old._id,{Round1:obj})
          else if(req.body.Round=="Round2")
          await LabContents.findByIdAndUpdate(old._id,{Round2:obj})
          
          }
      else{    
          
          if(req.body.Round=="Round1")
          await LabContents.create({Round1:obj});
          else if(req.body.Round=="Round2")
          await LabContents.create(old._id,{Round2:obj})
                  
      }  
      await res.status(201).json("LabContents");
    } catch (err) {
      console.log(err);
    }
  };
  
  module.exports.MidSesTheory = async (req, res) => {
    try {
      if (!req.user) return await res.status(401).json("Timed Out");
      if (!req.user.Roles.includes("Admin")) return await res.status(401).json("UnAutherized");
      const old = await TheoryContents.findOne({});
      console.log(req.body)
      if(old){
        old.Round1.MidorSessioanls=req.body.MidSessional
        console.log("old",old)
          await TheoryContents.findByIdAndUpdate(old._id,old)
          await res.status(201).json("TheoryContents");
    
        }
      else{    
        await res.status(404).json("Not initizalized");     
                  
      }
  
    } catch (err) {
      console.log(err);
    }
  };
  
  module.exports.MidSesLab = async (req, res) => {
      try {
        if (!req.user) return await res.status(401).json("Timed Out");
        if (!req.user.Roles.includes("Admin")) return await res.status(401).json("UnAutherized");
        const old = await LabContents.findOne({});        
        console.log(req.body)
        if(old){
        old.Round1.MidorSessioanls=req.body.MidSessional
          await LabContents.findByIdAndUpdate(old._id,old)
          await res.status(201).json("LabContents");    
        }
      else{    
        await res.status(404).json("Not initizalized");     
                  
      }
  
    }  
     catch (err) {
        console.log(err);
      }
    };
    
  module.exports.ShowTheory = async (req, res) => {
    try {
      if (!req.user) return await res.status(401).json("Timed Out");
      if(!req.user.Roles.includes("Admin")) return res.status(401).json("Unautherized");
      const aa = await TheoryContents.findOne({});
      console.log("aa", aa);
      await res.status(200).json(aa);
    } catch (err) {
      console.log(err);
    }
  };
  module.exports.ShowLab = async (req, res) => {
    try {
      if (!req.user) return await res.status(401).json("Timed Out");
      if(!req.user.Roles.includes("Admin")) return res.status(401).json("Unautherized");
      const aa = await LabContents.findOne({});
      console.log("aa", aa);
      await res.status(200).json(aa);
    } catch (err) {
      console.log(err);
    }
  };