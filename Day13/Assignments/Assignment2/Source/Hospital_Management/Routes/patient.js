const router = require("express").Router();
const { Patient } = require("../Models/patient");
const { User } = require("../Models/user");
const { Department } = require("../Models/department");
const { Assistant } = require("../Models/assistant");
const { Drug } = require("../Models/drug");

const _ = require("lodash");

router.use((req, res, next) => {
  if (req.user.role !== "admin") {
    return res
      .status(403)
      .send("You don't have permission to access this resource.");
  }
  next();
});

router.get("/", async (req, res, next) => {
  const patient = await Patient.find({})
    .populate(
      "department assistant drug doctor.department drug.morning drug.evening drug.afternoon",
      "-__v"
    )
    .populate({
      path: "doctor",
      populate: { path: "department" },
      strictPopulate: false,
    });
  if (!patient) return res.status(404).send("Patient Does Not exist");
  res.send(patient);
});

router.get("/:patientid", async (req, res, next) => {
  const patient = await Patient.findById(req.params.patientid) .populate(
    "department assistant drug doctor.department drug.morning drug.evening drug.afternoon",
    "-__v"
  )
  .populate({
    path: "doctor",
    populate: { path: "department" },
    strictPopulate: false,
  });
  if (!patient) return res.status(404).send("Patient Does Not exist");
  res.send(patient);
});

module.exports = router;
