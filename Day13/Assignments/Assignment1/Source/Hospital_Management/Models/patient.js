const mongoose = require("mongoose");
const { Schema } = mongoose;

const patientSchema = new Schema({
  name: { type: String, required: true },
  department: { type: Schema.Types.ObjectId, ref: "Department" },
  medicine: {
    morning: [{ type: Schema.Types.ObjectId, ref: "Drug" }],
    afternoon: [{ type: Schema.Types.ObjectId, ref: "Drug" }],
    evening: [{ type: Schema.Types.ObjectId, ref: "Drug" }],
  },
  gender: { type: String, enum: ["Male", "Female"] },
  age: { type: Number },
  doctor: [{ type: Schema.Types.ObjectId, ref: "Doctor" }],
  assistant: [{ type: Schema.Types.ObjectId, ref: "Department" }],
});

module.exports = mongoose.model("Assistant", patientSchema);
