var Repo = require("../../Models/RepoCourse");

module.exports.Add = async (req, res) => {
  try {
    if (!req.user) return await res.status(401).json("Timed Out");
    if (!req.user.Roles.includes("Admin")) return await res.status(401).json("UnAutherized");
    const repo = await Repo.create(req.body);
    console.log("Repo added", repo);
    await res.json(repo);
  } catch (err) {
    console.log(err);
  }
};
module.exports.Showall = async (req, res) => {
  try {
    if (!req.user) return await res.status(401).json("Timed Out");
    if (!req.user.Roles.includes("Admin")) return await res.status(401).json("UnAutherized");
    const Repos = await Repo.find({});
    console.log("all Repos", Repos);
    await res.json(Repos);
  } catch (err) {
    console.log(err);
  }
};


module.exports.Delete = async (req, res) => {
  try {
    if (!req.user) return await res.status(401).json("Timed Out");
    if (!req.user.Roles.includes("Admin")) return await res.status(401).json("UnAutherized");
    const repo = await Repo.deleteOne({ _id: req.params.id });
    console.log("all Repos", repo);
    await res.json(repo);
  } catch (err) {
    console.log(err);
  }
};
