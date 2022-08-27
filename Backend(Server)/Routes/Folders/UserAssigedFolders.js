var express = require("express");
var router = express.Router();
var UserAssigedFolders = require("../../Controler/AdminControllers/Folders/UserAssigedFolders");

router.route("/showAll").get(UserAssigedFolders.Showall);

module.exports = router;
