var express = require("express");
var router = express.Router();
var courses = require("../../Controler/AdminControllers/Courses");
var returnedcourses = require("../../Controler/AdminControllers/ReturnedCourse");

router.route("/ReturnedSOS/:Program").get(returnedcourses.ViewOne);

module.exports = router;
