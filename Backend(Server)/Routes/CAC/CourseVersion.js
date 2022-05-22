var express = require("express");
var router = express.Router();
var CourseVersion = require("../../Controler/CAC/CourseVersion");

router.route("/add").post(CourseVersion.Add);
router.route("/all").get(CourseVersion.ViewAll);
router.route("/:id").get(CourseVersion.ViewOne);

module.exports = router;
