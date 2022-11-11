const Joi = require("joi");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const assistantSchema = new Schema({
  name: { type: String, required: true },
  department: { type: Schema.Types.ObjectId, ref: "Department" },
});

module.exports.validAssistant = (assistant) => {
  const schema = Joi.object({
    name: Joi.string().min(4).max(20).required(),
    department: Joi.string().length(24).required(),
  });
  return schema.validate(assistant);
};

module.exports.Assistant = mongoose.model("Assistant", assistantSchema);
