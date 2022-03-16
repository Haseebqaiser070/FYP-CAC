var express = require("express");
var router = express.Router();
var meeting = require("../../Controler/Meeting/Meeting");

router.route("/create").post(meeting.Create);
router.route("/update").put(meeting.Update);
router.route("/delete/:id").delete(meeting.Delete);
router.route("/all").get(meeting.GetAll);

module.exports = router;
