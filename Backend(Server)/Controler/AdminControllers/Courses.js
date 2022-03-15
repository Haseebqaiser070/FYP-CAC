var coursedoc = require("../../Models/Course");

module.exports.Add = async (req, res) => {
  try {
    if(!req.user)return await res.json("Timed Out")
    const course = await coursedoc.create(req.body);
    console.log("course added", course);
    await res.json(course);
  } catch (err) {
    console.log(err);
  }
};
module.exports.Showall = async (req, res) => {
  try {
    if(!req.user)return await res.json("Timed Out")
    const course = await coursedoc.find({});
    console.log("all courses", course);
    await res.json(course);
  } catch (err) {
    console.log(err);
  }
};

module.exports.ShowOne = async (req, res) => {
  try {
    if(!req.user)return await res.json("Timed Out")
    const course = await coursedoc.findById(req.params.id);
    res.json(course);
  } catch (err) {
    console.log(err);
  }
};

module.exports.Delete = async (req, res) => {
  try {
    if(!req.user)return await res.json("Timed Out")
    const course = await coursedoc.deleteOne({ _id: req.params.id });
    console.log("all courses", course);
    await res.json(course);
  } catch (err) {
    console.log(err);
  }
};
module.exports.Update = async (req, res) => {
  try {
    if(!req.user)return await res.json("Timed Out")
    const course = await coursedoc.findOneAndUpdate({ _id: req.params.id },req.body);
    console.log("all courses", course);
    await res.json(course);
  } catch (err) {
    console.log(err);
  }
};