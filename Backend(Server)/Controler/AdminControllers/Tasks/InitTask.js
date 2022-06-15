var InitTask = require("../../../Models/InitTask");

module.exports.Add = async (req, res) => {
  try {
    if (!req.user) return await res.status(401).json("Timed Out");
    if (!req.user.Roles.includes("Admin")) return await res.status(401).json("UnAutherized");
    console.log(req.body)
    const Inittask = await InitTask.create(req.body);
    console.log("InitTask added", Inittask);
    await res.status(201).json(Inittask);
  } catch (err) {
    console.log(err);
  }
};
module.exports.Showallnotass = async (req, res) => {
  try {
    if (!req.user) return await res.status(401).json("Timed Out");
    if (!req.user.Roles.includes("Admin")) return await res.status(401).json("UnAutherized");
    const InitTasks = await InitTask.find({}).populate("AssignMember");
    const response = InitTasks.filter((i)=>{
        if(i.Task==null)return i
    }) 
    console.log("all InitTasks", response);
    await res.json(response);
  } catch (err) {
    console.log(err);
  }
};

module.exports.Showallass = async (req, res) => {
    try {
      if (!req.user) return await res.status(401).json("Timed Out");
      if (!req.user.Roles.includes("Admin")) return await res.status(401).json("UnAutherized");
      const InitTasks = await InitTask.find({}).populate("AssignMember");
      console.log("all InitTasks", InitTasks);
      await res.json(InitTasks);
    } catch (err) {
      console.log(err);
    }
  };
  

module.exports.Delete = async (req, res) => {
  try {
    if (!req.user) return await res.status(401).json("Timed Out");
    if (!req.user.Roles.includes("Admin")) return await res.status(401).json("UnAutherized");
    const Inittask = await InitTask.deleteOne({ _id: req.params.id });
    console.log("all InitTasks", Inittask);
    await res.json(Inittask);
  } catch (err) {
    console.log(err);
  }
};
