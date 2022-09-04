var express = require("express");
var router = express.Router();
var Folders = require("../../Controler/AdminControllers/Folders/FacultyFolderUpload");

router.route("/add/:id").put(Folders.Add);
router.route("/showOne/:id").get(Folders.showOne);

module.exports = router;
