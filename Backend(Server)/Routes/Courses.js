var express = require("express");
var router = express.Router();
var courses = require("../Controler/Courses");
console.log("\n Router \n");

router.route("/add").post(courses.Add);
router.route("/show").get(courses.Showall);
router.route("/show/:id").get(courses.ShowOne);
router.route("/delete/:id").delete(courses.Delete);

module.exports = router;
