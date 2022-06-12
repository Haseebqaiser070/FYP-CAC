var express = require("express");
var router = express.Router();
var Repo = require("../../Controler/AdminControllers/Task");
var CourseTasks = require("../../Controler/AdminControllers/CourseTasks");

router.route("/add").post(Repo.Add);
router.route("/show").get(Repo.Showall);
router.route("/show/:status").get(CourseTasks.Showall);
router.route("/lock/:id").post(CourseTasks.Lock);
//router.route("/revision/:id").post(CourseTasks.Showall);
router.route("/getUser").get(Repo.showUsers)
router.route("/:id").delete(Repo.Delete)

module.exports = router;
