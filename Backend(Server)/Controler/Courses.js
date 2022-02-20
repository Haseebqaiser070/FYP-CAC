var coursedoc = require("../Models/Course");

module.exports.Add = async (req, res, next) => {
  try {
    const course = await coursedoc.create(req.body);
    console.log("course added", course);
    await res.json(course);
  } catch (err) {
    console.log(err);
  }
};
module.exports.Showall = async (req, res, next) => {
  try {
    const course = await coursedoc.find({});
    console.log("all courses", course);
    await res.json(course);
  } catch (err) {
    console.log(err);
  }
};

module.exports.ShowOne = async (req, res, next) => {
  try {
    const course = await coursedoc.findById(req.params.id);
    res.json(course);
  } catch (err) {
    console.log(err);
  }
};

module.exports.Delete = async (req, res, next) => {
  try {
    const course = await coursedoc.deleteOne({ _id: req.params.id });
    console.log("all courses", course);
    await res.json(course);
  } catch (err) {
    console.log(err);
  }
};
