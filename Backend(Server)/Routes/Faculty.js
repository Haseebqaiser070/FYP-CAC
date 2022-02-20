var express = require("express");
var router = express.Router();
var Faculty = require("../Controler/Faculty");

router.route("/add").post(Faculty.Add);
router.route("/show").get(Faculty.Showall);
router.route("/:id").delete(Faculty.Delete)/*.put(Faculty.Update).get(Faculty.ShowOne);*/

module.exports = router;
