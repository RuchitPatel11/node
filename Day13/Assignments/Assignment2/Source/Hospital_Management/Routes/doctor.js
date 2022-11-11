const router = require("express").Router();
const {
  Doctor,
  validateDoctorPost,
  validateDoctorPut,
} = require("../Models/doctor");
const { User } = require("../Models/user");
const { Department } = require("../Models/department");
const _ = require("lodash");

router.use((req, res, next) => {
  if (req.method === "POST" && req.user.role !== "admin") {
    return res
      .status(403)
      .send("You don't have permission to access this resource.");
  }
  next();
});

router.get("/", async (req, res, next) => {
  const user = await User.findOne({
    username: req.user.username,
  });

  if (!user) return res.status(404).send("User Does Not exist");
  const doctor = await Doctor.findOne({
    user_id: user._id,
  }).populate("user_id department", "-_id -password");
  if (!doctor) return res.status(404).send("Doctor Does Not exist");
  res.send(doctor);
});

router.get("/:username", async (req, res, next) => {
  const user = await User.findOne({
    username: req.params.username,
  });
  if (!user) return res.status(404).send("User Does Not exist");
  const doctor = await Doctor.findOne({
    user_id: user._id,
  })
    .select("-_id")
    .populate("department user_id", "-_id -password");
  if (!doctor) return res.status(404).send("Doctor Does Not exist");
  res.send(doctor);
});

router.post("/", async (req, res, next) => {
  const { error, value } = validateDoctorPost(
    _.merge({ user_id: req.user._id.toString() }, req.body)
  );

  if (error) return res.status(404).send(error.message);

  let doctor = await Doctor.findOne({
    name: value.name,
  });
  if (doctor) return res.status(403).send("Doctor Already Exists!!");

  const newDoctor = new Doctor({
    user_id: value.user_id,
    name: value.name,
    department: value.department,
  });

  newDoctor.save(function (err) {
    if (err) return res.status(404).send(err);
    res.status(200).send(newDoctor);
  });
});

router.put("/:username", async (req, res, next) => {
  if (req.user.role !== "admin") {
    return res
      .status(403)
      .send("You don't have permission to access this resource.");
  }
  const user = await User.findOne({
    username: req.params.username,
  });
  if (!user) return res.status(404).send("User Does Not exist");
  const { error, value } = validateDoctorPut(req.body);
  if (error) return res.status(404).send(error.message);
  const doctor = await Doctor.findOne({
    user_id: user._id,
  }).populate("department user_id", "-_id -password");
  if (!doctor) return res.status(404).send("Doctor Does Not exist");
  Object.keys(value).forEach((key) => {
    doctor[key] = value[key];
  });
  doctor.save();
});

router.delete("/:username", async (req, res, next) => {
  const user = await User.findOne({
    username: req.params.username,
  });
  if (!user) return res.status(404).send("User Does Not exist");
  const doctor = await Doctor.findOneAndDelete({
    user_id: user._id,
  }).populate("department user_id", "-_id -password");
  if (!doctor) return res.status(404).send("Doctor Does Not exist");
  doctor.save();
  res.send(doctor);
});

module.exports = router;
