var express = require("express");
var router = express.Router();
var CourseCreation = require("../../Controler/CAC/CourseCreation");

router.route("/get").get(CourseCreation.showUsers);
router.route("/Submit/:Code").post(CourseCreation.Submit);

module.exports = router;
