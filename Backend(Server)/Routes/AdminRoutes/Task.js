var express = require("express");
var router = express.Router();
var Task = require("../../Controler/AdminControllers/Tasks/Task");
var CourseTasks = require("../../Controler/AdminControllers/Tasks/CourseTasks");
var InitTask = require("../../Controler/AdminControllers/Tasks/InitTask")

router.route("/add").post(Task.Add);
router.route("/show").get(Task.Showall);
router.route("/show/:status").get(CourseTasks.Showall);
router.route("/lock/:id").post(CourseTasks.Lock);
router.route("/addInit").post(InitTask.Add);
router.route("/showInit").get(InitTask.Showall);
router.route("/showOneInit/:id").get(InitTask.ShowOne);
router.route("/deleteInit/:id").delete(InitTask.Delete);
router.route("/updateInit/:id").put(InitTask.UpdateTaskInit);
//router.route("/revision/:id").post(CourseTasks.Showall);
router.route("/getUser").get(Task.showUsers)
router.route("/:id").delete(Task.Delete)

module.exports = router;
