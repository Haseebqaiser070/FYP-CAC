var express = require("express");
var router = express.Router();
var meeting = require("../../Controler/Meeting/Meeting");

router.route("/create").post(meeting.Create);
router.route("/create").put(meeting.Update);
router.route("/all").get(meeting.GetAll);

module.exports = router;
