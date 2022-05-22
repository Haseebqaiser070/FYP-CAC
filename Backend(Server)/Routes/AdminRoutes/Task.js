var express = require("express");
var router = express.Router();
var Repo = require("../../Controler/AdminControllers/Task");

router.route("/add").post(Repo.Add);
router.route("/show").get(Repo.Showall);
router.route("/getUser").get(Repo.showUsers)
router.route("/:id").delete(Repo.Delete)

module.exports = router;
