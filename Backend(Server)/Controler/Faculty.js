var coursedoc = require("../Models/Course");
var facultydoc = require("../Models/Faculty");

module.exports.Add = async (req, res, next) => {
  try {
    const {FirstName,SecondName,Email,Password,Allocated,Degree}=req.body
    const cor = await coursedoc.findOne({Allocated})
    if (!cor) return res.status('400').json('no course')
    const faculty = await facultydoc.create({FirstName,SecondName,Email,Password,Course:cor._id});
    console.log("faculty added", faculty);
    await res.json(faculty);
  } catch (err) {
    console.log(err);
  }
}
module.exports.Showall = async (req, res, next) => {
  try {
    console.log('insiede')
    const faculty = await facultydoc.find({}).populate("Course");
    console.log("all faculty", faculty);
    await res.json(faculty);
  } catch (err) {
    console.log(err);
  }
}

module.exports.Delete = async (req, res, next) => {
  try {
    const faculty = await facultydoc.deleteOne({ _id: req.params.id });
    console.log("all faulty", faculty);
    await res.json(faculty);
  } catch (err) {
    console.log(err);
  }
};

/*
module.exports.ShowOne = async (req, res, next) => {
  try {
    const course = await coursedoc.findById(req.params.id);
    res.json(course);
  } catch (err) {
    console.log(err);
  }
};
module.exports.Update = async (req, res, next) => {
  try {
    const course = await coursedoc.findOneAndUpdate({ _id: req.params.id },req.body);
    console.log("all courses", course);
    await res.json(course);
  } catch (err) {
    console.log(err);
  }
};*/