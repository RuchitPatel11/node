const mongoose = require("mongoose");
const { Schema } = mongoose;
const Joi = require("joi");

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["doctor", "assistant","admin"], required: true },
});

module.exports.validateRegister = (user) => {
  const schema = Joi.object({
    username: Joi.string().min(4).max(20).required(),
    password: Joi.string().min(6).max(18).required(),
    role: Joi.string().valid("doctor", "assistant","admin").required(),
  });
  return schema.validate(user)
};

module.exports.validateLogin = (user) => {
    const schema = Joi.object({
      username: Joi.string().min(4).max(20).required(),
      password: Joi.string().min(6).max(18).required()
    });
    return schema.validate(user)
  };

module.exports.User = mongoose.model("User", userSchema);
