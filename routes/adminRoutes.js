const express = require("express");
const {
  getAllUsersController,
  getAllDoctorsController,
  changeAccountStatusController,
} = require("../controllers/adminCtrl");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

//get method || Users
router.get("/getAllUsers", authMiddleware, getAllUsersController);

//get method || Doctors
router.get("/getAllDoctors", authMiddleware, getAllDoctorsController);

//post method || Accounts status
router.post(
  "/changeAccountStatus",
  authMiddleware,
  changeAccountStatusController
);

module.exports = router;
