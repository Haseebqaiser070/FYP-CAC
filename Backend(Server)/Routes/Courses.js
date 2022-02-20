var express = require("express");
var router = express.Router();
var courses = require("../Controler/Courses");

router.route("/add").post(courses.Add);
router.route("/show").get(courses.Showall);
router.route("/:id").delete(courses.Delete).put(courses.Update).get(courses.ShowOne);

module.exports = router;
