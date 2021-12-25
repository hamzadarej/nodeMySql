var express = require("express");
var router = express.Router();
const allControllers = require("../controllers/userControllers");
// Inset  User 1
router.get("/addOne", allControllers.addOneUser);
// Inset  User 2
router.get("/addTwo",allControllers.addSecondUser);
// get One user by Id
router.get("/getOne/:id", allControllers.getOneById);
// get allUser
router.get("/getUsers", allControllers.getAllUsers);
// update  User
router.get("/updateUser/:id",allControllers.updateOneUser);
// delete  User
router.get("/deleteUser/:id", allControllers.deleteOneUser);

module.exports = router;