var Userdoc = require("../../Models/User");
var bcrypt = require("bcrypt");

module.exports.Add = async (req, res) => {
  try {
    if (!req.user) return await res.status(401).json("Timed Out");
    if(!req.user.Roles.includes("Admin")) return res.status(401).json("Unautherized");
    newPassword = await bcrypt.hash(req.body.Password, 12);
    req.body.Password = newPassword
    console.log(req.body)
    
    const oldUser = await Userdoc.find({Email:req.body.Email});
    if(oldUser)return await res.status(409).json("Email")
    const oldUser2 = await Userdoc.find({Phone:req.body.Phone});
    if(oldUser2)return await res.status(409).json("Phone")
    const User = await Userdoc.create(
      req.body
    );
    console.log("User added", User);
    await res.status(201).json(User);
  } catch (err) {
    console.log(err);
  }
};
module.exports.Showall = async (req, res) => {
  try {
    if (!req.user) return await res.status(401).json("Timed Out");
    if(!req.user.Roles.includes("Admin")) return res.status(401).json("Unautherized");
    const User = await Userdoc.find({});
    console.log("all User", User);
    await res.status(200).json(User);
  } catch (err) {
    console.log(err);
  }
};

module.exports.Delete = async (req, res) => {
  try {
    if (!req.user) return await res.status(401).json("Timed Out");
    if(!req.user.Roles.includes("Admin")) return res.status(401).json("Unautherized");   
    const User = await Userdoc.deleteOne({ _id: req.params.id });
    console.log("deleteuser", User);
    await res.status(201).json(User);
  } catch (err) {
    console.log(err);
  }
};

module.exports.getRole = async (req, res) => {
  try {
    if (!req.user) return await res.status(401).json("Timed Out");
    if(!req.user.Roles.includes("Admin")) return res.status(401).json("Unautherized");
    const Users = await Userdoc.find({});
    const RoleUsers = Users.filter((user)=>{
      if(user?.Roles?.includes(req.params.Role))
      return user
    })
    console.log(RoleUsers)
    res.status(200).json(RoleUsers);
  } catch (err) {
    console.log(err);
  }
};

module.exports.ShowOne = async (req, res) => {
  try {
    if (!req.user) return await res.status(401).json("Timed Out");
    if(!req.user.Roles.includes("Admin")) return res.status(401).json("Unautherized");
    const User = await Userdoc.findById(req.params.id);
    res.status(200).json(User);
  } catch (err) {
    console.log(err);
  }
};




module.exports.Update = async (req, res) => {
  try {
    if(!req.user)return await res.status(401).json("Timed Out")
    if(!req.user.Roles.includes("Admin")) return res.status(401).json("Unautherized");
    const User = await Userdoc.findOneAndUpdate({ _id: req.params.id },req.body);
    await res.status(201).json(User);
  } catch (err) {
    console.log(err);
  }
};
