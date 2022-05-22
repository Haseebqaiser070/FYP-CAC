var mongoose = require("mongoose");
var RepoSchema = new mongoose.Schema({
  Code: {
    type: String,
    unique: true,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },  
});

module.exports = mongoose.model("Repo", RepoSchema);
