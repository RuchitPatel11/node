require("dotenv").config();
const express = require("express");
const app = express();
app.disable("x-powered-by");
const auth = require("./middleware/auth");
const userroute = require("./Routes/user");
const doctorrouter = require("./Routes/doctor");
const patientrouter = require("./Routes/patient");
const reportrouter = require("./Routes/report");

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/Hospital")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could'd not connect", err));

app.use(express.json());
app.use("/", userroute);
app.use(auth);
app.use("/doctor", doctorrouter);
app.use("/patient", patientrouter);
app.use("/report", reportrouter);

app.use((req, res, next) => {
  res.status(404).send("Route Not Found");
});

app.listen(3002, () => {
  console.log("Server is running on port 3002...");
});
