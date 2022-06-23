var express = require("express");
var router = express.Router();
var Syllabus = require("../../Controler/CAC/Syllabus/SyllabusCreation");

router.route("/get").get(Syllabus.showUsers);


module.exports = router;
