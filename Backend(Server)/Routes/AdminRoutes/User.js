var express = require("express");
var router = express.Router();
var User = require("../../Controler/AdminControllers/User");

router.route("/add").post(User.Add);
router.route("/show").get(User.Showall);
router.route("/:id").delete(User.Delete).put(User.Update).get(User.ShowOne);

module.exports = router;
