var Admin = require("../../Models/Admin");
var Faculty = require("../../Models/Faculty");
var bcrypt = require("bcrypt");
var { createjwts } = require("../../Utils/JWTs");
module.exports.registerAdmin = async (req, res) => {
  try {
    const { Email, Password } = req.body;

    let old = await Admin.findOne({ Email });
    if (old) {
      res.status(200).json("already exists");
    }

    const salt = await bcrypt.genSalt(10);

    const hashPassword = await bcrypt.hash(Password, salt);
    const newu = await Admin.create({ Email, Password: hashPassword });

    res.status(200).json(newu);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
module.exports.Login = async (req, res) => {
  try {
    const { Email, Password } = req.body;
    const isAdmin = await Admin.findOne({ Email });
    const isFaculty = await Faculty.findOne({ Email });
    const user = isAdmin || isFaculty;
    if (!user) return res.status("200").json("is not a User");
    const match = await bcrypt.compare(Password, user.Password);
    if (!match) return res.status("200").json("wrong");
    const AccessTokens = createjwts(user, "Access key", "10s");
    const RefreshTokens = createjwts(user, "Refersh Key", "10m");
    res.cookie("AccessTokens", AccessTokens, {
      MaxAge: 600000,
      httpOnly: true,
    });
    res.cookie("RefreshTokens", RefreshTokens, {
      MaxAge: 600000,
      httpOnly: true,
    });
    if (isAdmin) {
      res.status("200").json("Logged in as Admin");
    } else if (isFaculty) {
      res.status("200").json("Logged in as Faculty");
    }
  } catch (err) {
    res.status("400").json(err);
  }
};
module.exports.Logout = async (req, res) => {
  res.cookie("AccessTokens", "", {
    MaxAge: 0,
    httpOnly: true,
  });
  res.cookie("RefreshTokens", "", {
    MaxAge: 0,
    httpOnly: true,
  });
  res.json("logged out");
};
