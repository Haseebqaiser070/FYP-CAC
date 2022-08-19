var CDFdoc = require("../../Models/CDFModels/CDF");
var coursedoc = require("../../Models/CourseModels/Course");

module.exports.Showall = async (req, res) => {
  try {
    console.log(req.user)
    if (!req.user) return await res.json("Timed Out");
    const CDF = await CDFdoc.find({});
    const course = await coursedoc.find({}); 
    const CDFf = CDF.map(i=>{
        const coursefilt = course.find(e=>{
            if(e.Code==i.Code){
              console.log("here")
              const nam=e.Name
              return(nam)
                
            }
          })
          console.log(coursefilt)

          i.Name=coursefilt
          
          console.log(i)

          return(i)
    })
    console.log("all CDFs", CDFf);
    await res.json(CDFf);
  } catch (err) {
    console.log(err);
  }
};

module.exports.ShowOne = async (req, res) => {
  try {
    if (!req.user) return await res.json("Timed Out");
    const CDF = await CDFdoc.findById(req.params.id).
    populate({path:"CLOs",populate:{path:"BTL",model:"BTL"}})
    .populate({path:"CLOs",populate:{path:"So",model:"SOO"}}) 
    console.log(CDF)
    res.json(CDF);
  } catch (err) {
    console.log(err);
  }
};

module.exports.Delete = async (req, res) => {
  try {
    if (!req.user) return await res.json("Timed Out");
    const CDF = await CDFdoc.deleteOne({ _id: req.params.id });
    console.log("all CDFs", CDF);
    await res.json(CDF);
  } catch (err) {
    console.log(err);
  }
};
module.exports.Update = async (req, res) => {
  try {
    if (!req.user) return await res.json("Timed Out");
    const CDF = await CDFdoc.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    ).
    populate({path:"CLOs",populate:{path:"BTL",model:"BTL"}})
    .populate({path:"CLOs",populate:{path:"So",model:"SO"}}) ;
    console.log("all CDFs", CDF);
    await res.json(CDF);
  } catch (err) {
    console.log(err);
  }
};
