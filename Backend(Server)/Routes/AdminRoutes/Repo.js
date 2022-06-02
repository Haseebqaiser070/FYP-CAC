var express = require("express");
var router = express.Router();
var Repo = require("../../Controler/AdminControllers/Repo");

router.route("/add").post(Repo.Add);
router.route("/show").get(Repo.Showall);
router.route("/:id").delete(Repo.Delete)

module.exports = router;