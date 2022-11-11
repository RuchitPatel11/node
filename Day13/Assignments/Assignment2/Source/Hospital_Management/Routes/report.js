const router = require("express").Router();
const { Doctor } = require("../Models/doctor");
const { User } = require("../Models/user");
const { Patient } = require("../Models/patient");
const _ = require("lodash");

router.use((req, res, next) => {
  if (req.user.role !== "admin") {
    return res
      .status(403)
      .send("You don't have permission to access this resource.");
  }
  next();
});

router.get("/patients/:doctor", async (req, res, next) => {
  const doctor = await Doctor.findById(req.params.doctor);
  if (!doctor) return res.status(404).send("Doctor Does Not exist");
  const patient = await Patient.find({
    doctor: doctor._id,
  }).populate({
    path: "doctor department assistant drug.morning drug.evening drug.afternoon",
    strictPopulate: false,
  });
  res.send({
    doctor,
    patient,
  });
});

router.get("/medicines/patients/:patient", async (req, res, next) => {
  const patient = await Patient.findById(req.params.patient).populate(
    "drug.morning drug.evening drug.afternoon"
  );
  if (!patient) return res.status(404).send("Patient Does Not exist");
  res.send(
    _.pick(patient,["name","age","drug","gender"])
  );
});


module.exports = router;
