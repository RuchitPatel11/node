const mongoose = require("mongoose");
const { Schema } = mongoose;
const Joi = require("joi");

const doctorSchema = new Schema({
  user_id:{type: Schema.Types.ObjectId, ref: "User" },
  name: { type: String, required: true },
  department: { type: Schema.Types.ObjectId, ref: "Department" },
});

module.exports.validateDoctorPost = (doctor) => {
  const schema = Joi.object({
    user_id:Joi.string().length(24).required(),
    name: Joi.string().min(4).max(20).required(),
    department: Joi.string().length(24).required(),
  });
  return schema.validate(doctor);
};

module.exports.validateDoctorPut = (doctor) => {
  const schema = Joi.object({
    user_id:Joi.string().length(24),
    name: Joi.string().min(4).max(20),
    department: Joi.string().length(24),
  });
  return schema.validate(doctor);
};

module.exports.Doctor = mongoose.model("Doctor", doctorSchema);
