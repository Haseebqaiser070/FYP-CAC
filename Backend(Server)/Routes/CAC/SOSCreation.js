var express = require("express");
var router = express.Router();
var SOSCreation = require("../../Controler/CAC/SOS/SOSCreation");

router.route("/get").get(SOSCreation.showUsers);
// router.route("/Submit/:Code").post(CourseCreation.Submit);

module.exports = router;
