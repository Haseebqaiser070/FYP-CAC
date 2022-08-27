var express = require("express");
var router = express.Router();
var AssignFolder = require("../../Controler/AdminControllers/Folders/AssignFolders");

router.route("/add").post(AssignFolder.Add);

module.exports = router;
