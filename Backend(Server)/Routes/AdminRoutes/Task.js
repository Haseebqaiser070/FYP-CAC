var express = require("express");
var router = express.Router();
var Repo = require("../../Controler/AdminControllers/Tasks/Task");
var CourseTasks = require("../../Controler/AdminControllers/Tasks/CourseTasks");
var InitTask = require("../../Controler/AdminControllers/Tasks/InitTask")

router.route("/add").post(Repo.Add);
router.route("/show").get(Repo.Showall);
router.route("/show/:status").get(CourseTasks.Showall);
router.route("/lock/:id").post(CourseTasks.Lock);
router.route("/addInit").post(InitTask.Add);
router.route("/showInit").get(InitTask.Showallnotass);


//router.route("/revision/:id").post(CourseTasks.Showall);
router.route("/getUser").get(Repo.showUsers)
router.route("/:id").delete(Repo.Delete)

module.exports = router;
