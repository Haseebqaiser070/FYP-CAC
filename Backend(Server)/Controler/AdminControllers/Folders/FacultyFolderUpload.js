var Folderdoc = require("../../../Models/Folders");

module.exports.Add = async (req, res) => {
  try {
    if (!req.user) return await res.status(401).json("Timed Out");
    if (!req.user.Roles.includes("Faculty")) return await res.status(401).json("UnAutherized");
    const old = await Folderdoc.findById(req.params.id)    
    const isalready = old.files.find(obj => {
        return obj.Title === req.body.Title
      })
    if(isalready!=undefined){
        const fils = old.files.map((x)=>{
            if(x.Title==req.body.Title){
                return({
                    Title:req.body.Title,
                    Question:req.body.Question,
                    Solution:req.body.Solution,
                    Awardlist:req.body.Awardlist,
                    Best:req.body.Best,
                    Average:req.body.Average,
                    Worst:req.body.Worst
                })

            }
            else{
                return x
            }
        })
        old.files=fils
    }
    else{
        const obj = {
            Title:req.body.Title,
            Question:req.body.Question,
            Solution:req.body.Solution,
            Awardlist:req.body.Awardlist,
            Best:req.body.Best,
            Average:req.body.Average,
            Worst:req.body.Worst
        }
        old.files.push(obj)
    }
    
    console.log("old",old)
    const up = await Folderdoc.findOneAndUpdate({_id:req.params.id},old);
    console.log("Folders",up)
    await res.status(201).json(up);
  } catch (err) {
    console.log(err);
  }
};

module.exports.showOne = async (req, res) => {
    
    try {
        console.log(req.user)
        if (!req.user) return await res.json("Timed Out");
        try {        
          const Folder = await Folderdoc.findById(req.params.id)
          console.log("CourseFolder",Folder)
          await res.status(200).json(Folder)
          } catch (err) {
            console.log(err);
            await res.status(400).json("error")    
          }  
      } catch (err) {
        console.log(err);
      }    

}
