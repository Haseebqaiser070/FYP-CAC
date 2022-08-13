var express = require("express");
var router = express.Router();
var returnedSOS = require("../../Controler/AdminControllers/ReturnedSOS");

router.route("/ReturnedSOS/:Program").get(returnedSOS.ViewOne);

module.exports = router;
