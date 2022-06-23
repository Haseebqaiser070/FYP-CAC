var express = require("express");
var router = express.Router();
var CDF = require("../../Controler/CAC/CDF/CDFCreation");

router.route("/get").get(CDF.showUsers);


module.exports = router;
