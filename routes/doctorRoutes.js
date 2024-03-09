const express = require("express");
const {
  getDoctorInfoController,
  updateProfileController,
  getDoctorByIdController,
  doctorAppointmentsController,
  updateStatusController,
} = require("../controllers/doctorCtrl");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

//post single doctor info
router.post("/getDoctorInfo", authMiddleware, getDoctorInfoController);

//post update profile
router.post("/updateProfile", authMiddleware, updateProfileController);

//get single doctor info
router.post('/getDoctorById', authMiddleware, getDoctorByIdController)

//get Appointments
router.get("/doctor-appointments", authMiddleware, doctorAppointmentsController);

//post update status
router.post("/update-status", authMiddleware, updateStatusController);

module.exports = router;
