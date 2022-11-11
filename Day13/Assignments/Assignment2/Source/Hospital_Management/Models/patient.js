const Joi = require("joi");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const patientSchema = new Schema({
  name: { type: String, required: true },
  department: { type: Schema.Types.ObjectId, ref: "Department" },
  drug: {
    morning: [{ type: Schema.Types.ObjectId, ref: "Drug" }],
    afternoon: [{ type: Schema.Types.ObjectId, ref: "Drug" }],
    evening: [{ type: Schema.Types.ObjectId, ref: "Drug" }],
  },
  gender: { type: String, enum: ["male", "female"] },
  age: { type: Number },
  doctor: [{ type: Schema.Types.ObjectId, ref: "Doctor" }],
  assistant: [{ type: Schema.Types.ObjectId, ref: "Assistant" }],
});

module.exports.validatePatient = (patient) => {
  const schema = Joi.object({
    name: Joi.string().min(4).max(20).required(),
    department: Joi.string().length(24).required(),
    drug: {
      morning: Joi.array().items(Joi.string().length(24)),
      afternoon: Joi.array().items(Joi.string().length(24)),
      evening: Joi.array().items(Joi.string().length(24)),
    },
    gender: Joi.string().valid("male", "female").required(),
    age: Joi.number().required(),
    doctor: Joi.array().items(Joi.string().length(24).required()),
    assistant: Joi.array().items(Joi.string().length(24).required()),
  });
  return schema.validate(patient);
};

module.exports.Patient = mongoose.model("Patient", patientSchema);
