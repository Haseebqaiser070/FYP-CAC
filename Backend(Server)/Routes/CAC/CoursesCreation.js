var express = require("express");
var router = express.Router();
var CourseCreation = require("../../Controler/CAC/CourseCreation");

router.route("/get").get(CourseCreation.showUsers);

module.exports = router;
