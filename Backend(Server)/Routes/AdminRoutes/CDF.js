var express = require("express");
var router = express.Router();
var returnedCDF = require("../../Controler/AdminControllers/ReturnedCDF");

router.route("/ReturnedCourseCDF/:Code").get(returnedCDF.ViewOne);

module.exports = router;
